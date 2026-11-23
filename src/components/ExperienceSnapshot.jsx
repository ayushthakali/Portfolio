import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import MonoLabel from "@/components/ui/MonoLabel";
import TextLink from "@/components/ui/TextLink";
import { experiences } from "@/data/experience";
import { cn } from "@/lib/utils";

function ExperienceSnapshot() {
  return (
    <Section labelledBy="snapshot-title">
      <Container>
        <SectionHeader
          index="02"
          label="Experience"
          id="snapshot-title"
          title={
            <>
              Where I’ve <em className="italic">built things</em>
            </>
          }
          action={
            <TextLink
              href="/about"
              icon={ArrowRight}
              iconNudge="group-hover:translate-x-0.5"
              className="min-h-11 text-sm font-medium"
            >
              More about me
            </TextLink>
          }
        />

        <ol data-reveal className="mt-10 border-t border-border md:mt-14 md:ml-[calc((100%_+_var(--grid-gap))/4)]">
          {experiences.map((exp) => {
            const current = /present/i.test(exp.date);
            return (
              <li
                key={exp.company}
                className="grid gap-x-8 gap-y-1 border-b border-border py-5 md:grid-cols-[11rem_minmax(0,1fr)_auto] md:items-baseline"
              >
                <MonoLabel className={cn(current && "text-accent")}>
                  {exp.date}
                </MonoLabel>
                <p className="flex flex-col md:flex-row md:items-baseline md:gap-3">
                  <span className="font-serif text-xl">{exp.company}</span>
                  <span className="text-muted-foreground">{exp.role}</span>
                </p>
                <MonoLabel className="hidden md:block">{exp.location}</MonoLabel>
              </li>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}

export default ExperienceSnapshot;
