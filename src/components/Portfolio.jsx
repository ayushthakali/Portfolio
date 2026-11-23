import { useState } from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import MonoLabel from "@/components/ui/MonoLabel";
import TextLink from "@/components/ui/TextLink";
import { projects } from "@/data/projects";
import { certificates } from "@/data/certificates";
import { cn } from "@/lib/utils";

// The first two projects get the full-width featured treatment.
const FEATURED_COUNT = 2;

// "PIIRRO – Food & Music Discovery Platform" -> ["PIIRRO", "Food & ..."]
const splitTitle = (title) => {
  const [name, ...rest] = title.split(" – ");
  return [name, rest.join(" – ")];
};

// WebP derivatives sit beside the original: /projects/piirro-960.webp etc.
const webpSet = (src) => {
  const base = src.replace(/\.(png|jpe?g)$/i, "");
  return `${base}-960.webp 960w, ${base}-1600.webp 1600w`;
};

function ProjectImage({ project, name, sizes, className }) {
  const [failed, setFailed] = useState(!project.image);

  const frame = cn(
    "relative block aspect-[1900/860] overflow-hidden border border-border bg-muted",
    className
  );

  if (failed) {
    return (
      <div className={cn(frame, "flex items-end p-6")}>
        <span className="font-serif text-h3 text-muted-foreground">{name}</span>
      </div>
    );
  }

  const image = (
    <picture>
      <source type="image/webp" srcSet={webpSet(project.image)} sizes={sizes} />
      <img
        src={project.image}
        alt={`Screenshot of ${name}`}
        width={1900}
        height={860}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
        className="h-full w-full object-cover object-top transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
      />
    </picture>
  );

  // The screenshot repeats the "Live site" link for pointer users only.
  return project.live ? (
    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={-1}
      aria-hidden="true"
      className={frame}
    >
      {image}
    </a>
  ) : (
    <div className={frame}>{image}</div>
  );
}

function ProjectMeta({ project, name }) {
  return (
    <>
      <ul aria-label="Technologies" className="flex flex-wrap gap-x-2 gap-y-1">
        {project.tags.map((tag, i) => (
          <li key={tag}>
            <MonoLabel>
              {tag}
              {i < project.tags.length - 1 && (
                <span aria-hidden="true" className="ml-2">
                  /
                </span>
              )}
            </MonoLabel>
          </li>
        ))}
      </ul>

      <ul className="mt-6 space-y-2">
        {project.features.map((feature) => (
          <li
            key={feature}
            className="relative pl-5 text-sm leading-relaxed text-muted-foreground before:absolute before:top-[0.7em] before:left-0 before:h-px before:w-2.5 before:bg-foreground/40"
          >
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
        {project.live && (
          <TextLink href={project.live} arrow className="min-h-11 text-sm font-medium">
            Live site<span className="sr-only">: {name}</span>
          </TextLink>
        )}
        {project.github && (
          <TextLink href={project.github} arrow className="min-h-11 text-sm font-medium">
            GitHub<span className="sr-only">: {name}</span>
          </TextLink>
        )}
      </div>
    </>
  );
}

function FeaturedProject({ project, number }) {
  const [name, subtitle] = splitTitle(project.title);

  return (
    <article className="group">
      <ProjectImage
        project={project}
        name={name}
        sizes="(min-width: 88rem) 82rem, 100vw"
      />

      <div className="grid-site mt-8 gap-y-6 md:mt-10">
        <MonoLabel className="col-span-4 text-foreground md:col-span-2 lg:col-span-3">
          {number}
        </MonoLabel>
        <div className="col-span-4 md:col-span-6 lg:col-span-5">
          <h3 className="font-serif text-h2">{name}</h3>
          {subtitle && <p className="mt-3 font-medium">{subtitle}</p>}
          <p className="mt-4 max-w-[34rem] leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>
        <div className="col-span-4 md:col-span-6 md:col-start-3 lg:col-span-4 lg:col-start-9">
          <ProjectMeta project={project} name={name} />
        </div>
      </div>
    </article>
  );
}

function Project({ project, number, flip }) {
  const [name, subtitle] = splitTitle(project.title);

  return (
    <article className="group grid-site items-start gap-y-8">
      <ProjectImage
        project={project}
        name={name}
        sizes="(min-width: 64rem) 55vw, 100vw"
        className={cn(
          "col-span-4 md:col-span-8 lg:col-span-7",
          flip && "lg:col-start-6 lg:row-start-1"
        )}
      />
      <div
        className={cn(
          "col-span-4 md:col-span-6 md:col-start-3 lg:col-span-4",
          flip ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-9"
        )}
      >
        <MonoLabel className="text-foreground">{number}</MonoLabel>
        <h3 className="mt-4 font-serif text-h3">{name}</h3>
        {subtitle && <p className="mt-2 font-medium">{subtitle}</p>}
        <p className="mt-4 leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-6">
          <ProjectMeta project={project} name={name} />
        </div>
      </div>
    </article>
  );
}

function Portfolio() {
  const featured = projects.slice(0, FEATURED_COUNT);
  const rest = projects.slice(FEATURED_COUNT);
  const number = (index) => String(index + 1).padStart(2, "0");

  return (
    <Section
      id="projects"
      tone="dark"
      labelledBy="projects-title"
      className="pb-[var(--section-space)]"
    >
      <Container>
        <SectionHeader
          index="03"
          label="Projects"
          id="projects-title"
          title={
            <>
              Selected <em className="italic">work</em>
            </>
          }
        />

        <div className="mt-12 space-y-20 md:mt-20 md:space-y-28">
          {featured.map((project, i) => (
            <FeaturedProject key={project.id} project={project} number={number(i)} />
          ))}
        </div>

        <div className="mt-20 space-y-16 border-t border-border pt-16 md:mt-28 md:space-y-24 md:pt-24">
          {rest.map((project, i) => (
            <Project
              key={project.id}
              project={project}
              number={number(i + FEATURED_COUNT)}
              flip={i % 2 === 1}
            />
          ))}
        </div>

        {/* Certifications */}
        <div className="grid-site mt-24 gap-y-6 md:mt-32">
          <h3 className="col-span-4 md:col-span-2 lg:col-span-3">
            <MonoLabel className="text-foreground">Certifications</MonoLabel>
          </h3>
          <ul className="col-span-4 border-t border-border md:col-span-6 lg:col-span-9">
            {certificates.map((cert) => (
              <li
                key={cert.id}
                className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-6 gap-y-1 border-b border-border py-4 md:grid-cols-[minmax(0,1fr)_14rem_auto]"
              >
                <p className="font-medium">{cert.title}</p>
                <MonoLabel className="order-3 col-span-2 md:order-none md:col-span-1">
                  {cert.issuer} / {cert.date}
                </MonoLabel>
                <TextLink href={cert.credentialUrl} arrow className="text-sm">
                  View<span className="sr-only"> {cert.title} credential</span>
                </TextLink>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}

export default Portfolio;
