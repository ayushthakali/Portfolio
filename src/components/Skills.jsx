import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import MonoLabel from "@/components/ui/MonoLabel";
import { skillGroups } from "@/data/skills";

function Skills() {
  return (
    <Section id="skills" labelledBy="skills-title">
      <Container>
        <SectionHeader
          index="04"
          label="Skills"
          id="skills-title"
          title={
            <>
              What I <em className="italic">work with</em>
            </>
          }
        />

        <div className="mt-12 grid grid-cols-1 gap-x-[var(--grid-gap)] gap-y-12 sm:grid-cols-2 md:mt-20 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <section key={group.title} aria-labelledby={`skills-${i}`}>
              <h3
                id={`skills-${i}`}
                className="flex items-baseline justify-between border-b border-foreground pb-3"
              >
                <span className="font-semibold">{group.title}</span>
                <MonoLabel>{String(group.items.length).padStart(2, "0")}</MonoLabel>
              </h3>
              <ul>
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-border py-2.5 text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Skills;
