import { ArrowRight, Download } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import MonoLabel from "@/components/ui/MonoLabel";
import Button from "@/components/ui/Button";
import TextLink from "@/components/ui/TextLink";
import LocalTime from "@/components/LocalTime";
import { profile } from "@/data/profile";
import { currentRole, experiences } from "@/data/experience";
import { projects } from "@/data/projects";

const firstYear = experiences[0]?.date.match(/\d{4}/)?.[0];

const facts = [
  currentRole && {
    label: "Currently",
    value: `${currentRole.role}, ${currentRole.company}`,
  },
  {
    label: "Experience",
    value: `${experiences.length} roles since ${firstYear}`,
  },
  {
    label: "Work",
    value: `${String(projects.length).padStart(2, "0")} selected projects`,
  },
  { label: "Core stack", value: "React, Next.js, Node.js" },
].filter(Boolean);

function Hero() {
  const { photo } = profile;

  return (
    <Section
      labelledBy="hero-title"
      spacing={false}
      className="pt-10 pb-[calc(var(--section-space)*0.6)] md:pt-16"
    >
      <Container>
        <div className="grid-site gap-y-10 lg:items-end">
          <div className="col-span-4 md:col-span-8 lg:col-span-8">
            <MonoLabel as="p" className="motion-rise flex flex-wrap gap-x-3">
              <span className="text-foreground">{profile.role}</span>
              <span aria-hidden="true">/</span>
              <span>{profile.location}</span>
            </MonoLabel>

            <h1
              id="hero-title"
              className="motion-rise mt-6 text-display"
              style={{ "--delay": "80ms" }}
            >
              {profile.firstName}{" "}
              <em className="italic">{profile.lastName}</em>
            </h1>

            <p
              className="motion-rise mt-6 max-w-[38rem] text-lead text-muted-foreground md:mt-8"
              style={{ "--delay": "160ms" }}
            >
              {profile.summary}
            </p>

            <div
              className="motion-rise mt-8 flex flex-wrap items-center gap-x-6 gap-y-4"
              style={{ "--delay": "240ms" }}
            >
              <div className="flex flex-wrap gap-3">
                <Button href="/work" icon={ArrowRight}>
                  View work
                </Button>
                <Button href="/contact" variant="secondary">
                  Contact me
                </Button>
              </div>
              <TextLink
                href={profile.resume}
                download
                icon={Download}
                className="min-h-11 text-sm font-medium"
              >
                Download resume (PDF)
              </TextLink>
            </div>
          </div>

          <figure
            className="motion-rise col-span-4 mx-auto w-full max-w-[17rem] md:col-span-8 lg:col-span-3 lg:col-start-10 lg:max-w-none"
            style={{ "--delay": "200ms" }}
          >
            {/* Rounded corners plus a narrow feather on every edge, so the
                photo softens into the page without a heavy vignette. */}
            <picture className="block [mask-image:linear-gradient(to_right,transparent,#000_7%,#000_93%,transparent),linear-gradient(to_bottom,transparent,#000_6%,#000_92%,transparent)] [-webkit-mask-composite:source-in] [mask-composite:intersect]">
              <source srcSet={photo.webp} type="image/webp" />
              <img
                src={photo.src}
                alt={`Portrait of ${profile.name}`}
                width={photo.width}
                height={photo.height}
                decoding="async"
                className="aspect-[4/5] w-full rounded-[2rem] object-cover object-[50%_18%]"
              />
            </picture>
            <figcaption className="mt-1 flex justify-between gap-4 px-2">
              <MonoLabel>{profile.location.split(",")[0]}</MonoLabel>
              <LocalTime />
            </figcaption>
          </figure>
        </div>

        <dl
          className="motion-rise mt-14 grid grid-cols-2 border-t border-border md:mt-20 md:grid-cols-4"
          style={{ "--delay": "320ms" }}
        >
          {facts.map((fact, i) => (
            <div
              key={fact.label}
              className={`border-b border-border py-5 md:border-b-0 ${
                i % 2 === 1 ? "pl-4 md:pl-5" : "pr-4 md:pr-5"
              } ${i > 0 ? "md:border-l md:pl-5" : ""}`}
            >
              <MonoLabel as="dt">{fact.label}</MonoLabel>
              <dd className="mt-2 text-sm leading-snug font-medium md:text-base">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}

export default Hero;
