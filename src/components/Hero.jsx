import { ArrowRight, Download } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import MonoLabel from "@/components/ui/MonoLabel";
import Button from "@/components/ui/Button";
import TextLink from "@/components/ui/TextLink";
import LocalTime from "@/components/LocalTime";
import { profile } from "@/data/profile";
import { currentRole } from "@/data/experience";

function Hero() {
  const { photo } = profile;

  return (
    <Section
      id="top"
      labelledBy="hero-title"
      spacing={false}
      className="pt-6 pb-[calc(var(--section-space)*0.5)] md:pt-10"
    >
      <Container>
        {/* Meta line */}
        <div className="grid-site gap-y-2 border-b border-border pb-4">
          <MonoLabel className="col-span-4 text-foreground md:col-span-3">
            {profile.role}
          </MonoLabel>
          <MonoLabel className="col-span-2 lg:col-span-3">
            {profile.location}
          </MonoLabel>
          <LocalTime className="col-span-2 text-right md:col-span-3 lg:col-span-6" />
        </div>

        {/* Name: second line aligns with the text column below */}
        <h1
          id="hero-title"
          className="mt-12 text-display md:mt-16 lg:mt-24"
        >
          <span className="block">{profile.firstName}</span>{" "}
          <span className="block pl-[14%] italic md:pl-[calc((100%_+_var(--grid-gap))*3/8)] lg:pl-[calc((100%_+_var(--grid-gap))/3)]">
            {profile.lastName}
          </span>
        </h1>

        <div className="grid-site mt-12 gap-y-10 md:mt-16 lg:mt-20">
          <div className="col-span-4 md:col-span-5 md:col-start-4 lg:col-span-6 lg:col-start-5">
            <p className="max-w-[36rem] text-lead">{profile.summary}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#projects" icon={ArrowRight}>
                View Projects
              </Button>
              <Button href="#contact" variant="secondary">
                Contact Me
              </Button>
            </div>

            <TextLink
              href={profile.resume}
              download
              icon={Download}
              className="mt-6 text-sm font-medium"
            >
              Download resume (PDF)
            </TextLink>
          </div>

          <figure className="col-span-2 md:col-span-3 md:col-start-1 md:row-start-1 lg:col-span-3">
            <picture>
              <source srcSet={photo.webp} type="image/webp" />
              <img
                src={photo.src}
                alt={`Portrait of ${profile.name}`}
                width={photo.width}
                height={photo.height}
                decoding="async"
                className="aspect-[4/5] w-full bg-muted object-cover object-[50%_15%]"
              />
            </picture>
          </figure>

          {currentRole && (
            <dl className="col-span-2 self-end md:col-span-5 md:col-start-4 lg:col-span-2 lg:col-start-11">
              <MonoLabel as="dt">Currently</MonoLabel>
              <dd className="mt-2 text-sm leading-relaxed">
                {currentRole.role}
                <br />
                <span className="text-muted-foreground">
                  at {currentRole.company}
                </span>
              </dd>
            </dl>
          )}
        </div>
      </Container>
    </Section>
  );
}

export default Hero;
