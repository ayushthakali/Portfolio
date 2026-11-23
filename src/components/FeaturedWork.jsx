import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import MonoLabel from "@/components/ui/MonoLabel";
import TextLink from "@/components/ui/TextLink";
import Link from "@/components/ui/Link";
import ProjectImage from "@/components/ProjectImage";
import { projects } from "@/data/projects";
import { projectSlug, splitTitle } from "@/lib/projects";
import { cn } from "@/lib/utils";

const featured = projects.slice(0, 2);

function FeaturedWork() {
  return (
    <Section tone="muted" labelledBy="featured-title">
      <Container>
        <SectionHeader
          index="01"
          label="Selected work"
          id="featured-title"
          title={
            <>
              Recent <em className="italic">projects</em>
            </>
          }
          action={
            <TextLink href="/work" icon={ArrowRight} iconNudge="group-hover:translate-x-0.5" className="min-h-11 text-sm font-medium">
              See all {projects.length} projects
            </TextLink>
          }
        />

        <div className="grid-site mt-12 gap-y-14 md:mt-16">
          {featured.map((project, i) => {
            const [name, subtitle] = splitTitle(project.title);
            const href = `/work#${projectSlug(project)}`;

            return (
              <article
                key={project.id}
                data-reveal
                style={{ "--delay": `${i * 120}ms` }}
                className={cn(
                  "group col-span-4",
                  i === 0
                    ? "md:col-span-8 lg:col-span-7"
                    : "md:col-span-6 md:col-start-3 lg:col-span-5 lg:col-start-8 lg:mt-28"
                )}
              >
                <ProjectImage
                  project={project}
                  name={name}
                  href={href}
                  sizes="(min-width: 64rem) 50vw, 100vw"
                />
                <div className="mt-5 flex items-baseline gap-4">
                  <MonoLabel className="text-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </MonoLabel>
                  <div>
                    <h3 className="font-serif text-h3">
                      <Link href={href} className="link-underline">
                        {name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

export default FeaturedWork;
