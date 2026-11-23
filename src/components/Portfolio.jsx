import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import MonoLabel from "@/components/ui/MonoLabel";
import TextLink from "@/components/ui/TextLink";
import ProjectImage from "@/components/ProjectImage";
import { projects } from "@/data/projects";
import { projectSlug, splitTitle } from "@/lib/projects";
import { cn } from "@/lib/utils";

// The first two projects get the full-width featured treatment.
const FEATURED_COUNT = 2;

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

      <ul className="mt-5 space-y-2">
        {project.features.map((feature) => (
          <li
            key={feature}
            className="relative pl-5 text-sm leading-relaxed text-muted-foreground before:absolute before:top-[0.7em] before:left-0 before:h-px before:w-2.5 before:bg-foreground/40"
          >
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-x-6">
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
    <article id={projectSlug(project)} data-reveal className="group">
      <ProjectImage
        project={project}
        name={name}
        href={project.live}
        sizes="(min-width: 80rem) 76rem, 100vw"
      />

      <div className="grid-site mt-8 gap-y-6">
        <MonoLabel className="col-span-4 text-foreground md:col-span-2 lg:col-span-3">
          {number}
        </MonoLabel>
        <div className="col-span-4 md:col-span-6 lg:col-span-5">
          <h2 className="font-serif text-h2">{name}</h2>
          {subtitle && <p className="mt-2 font-medium">{subtitle}</p>}
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
    <article
      id={projectSlug(project)}
      data-reveal
      className="group grid-site items-start gap-y-7"
    >
      <ProjectImage
        project={project}
        name={name}
        href={project.live}
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
        <h2 className="mt-3 font-serif text-h3">{name}</h2>
        {subtitle && <p className="mt-1.5 font-medium">{subtitle}</p>}
        <p className="mt-4 leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-5">
          <ProjectMeta project={project} name={name} />
        </div>
      </div>
    </article>
  );
}

/** Full project showcase for the Work page, in data order. */
function Portfolio() {
  const featured = projects.slice(0, FEATURED_COUNT);
  const rest = projects.slice(FEATURED_COUNT);
  const number = (index) => String(index + 1).padStart(2, "0");

  return (
    <Section aria-label="Projects" className="pt-4 pb-[var(--section-space)] md:pt-8">
      <Container>
        <div className="space-y-16 md:space-y-24">
          {featured.map((project, i) => (
            <FeaturedProject key={project.id} project={project} number={number(i)} />
          ))}
        </div>

        <div className="mt-16 space-y-14 border-t border-border pt-14 md:mt-24 md:space-y-20 md:pt-20">
          {rest.map((project, i) => (
            <Project
              key={project.id}
              project={project}
              number={number(i + FEATURED_COUNT)}
              flip={i % 2 === 1}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Portfolio;
