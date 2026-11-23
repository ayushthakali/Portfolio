import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import MonoLabel from "@/components/ui/MonoLabel";
import { experiences } from "@/data/experience";
import { cn } from "@/lib/utils";

function Highlights({ items }) {
  const detailed = items.every((item) => typeof item === "object");

  if (detailed) {
    return (
      <dl className="mt-8 border-t border-border">
        {items.map((item) => (
          <div
            key={item.title}
            className="grid gap-x-8 gap-y-1.5 border-b border-border py-5 md:grid-cols-[minmax(0,13rem)_minmax(0,1fr)]"
          >
            <dt className="font-semibold">{item.title}</dt>
            <dd className="max-w-[40rem] leading-relaxed text-muted-foreground">
              {item.text}
            </dd>
          </div>
        ))}
      </dl>
    );
  }

  return (
    <ul className="mt-8 max-w-[40rem] space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="relative pl-6 leading-relaxed text-muted-foreground before:absolute before:top-[0.8em] before:left-0 before:h-px before:w-3 before:bg-foreground/40"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function Experience() {
  return (
    <Section id="experience" labelledBy="experience-title">
      <Container>
        <SectionHeader
          index="01"
          label="Experience"
          id="experience-title"
          title={
            <>
              Where I’ve <em className="italic">built things</em>
            </>
          }
        />

        <ol className="mt-12 md:mt-20">
          {experiences.map((exp, index) => {
            const current = /present/i.test(exp.date);
            const tags = exp.tag.split(",").map((tag) => tag.trim());

            return (
              <li
                key={exp.company}
                data-reveal
                className="grid-site gap-y-5 border-t border-border py-10 first:border-t-0 first:pt-0 md:py-14"
              >
                <div className="col-span-4 flex flex-wrap gap-x-4 gap-y-1 md:col-span-2 md:flex-col lg:col-span-3">
                  <MonoLabel className="text-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </MonoLabel>
                  <MonoLabel className={cn(current && "text-accent")}>
                    {exp.date}
                  </MonoLabel>
                  <MonoLabel>{exp.location}</MonoLabel>
                </div>

                <div className="col-span-4 md:col-span-6 lg:col-span-9">
                  <h3 className="font-serif text-h3">{exp.company}</h3>
                  <p className="mt-2 font-medium">{exp.role}</p>

                  <ul
                    aria-label="Technologies"
                    className="mt-4 flex flex-wrap gap-x-2"
                  >
                    {tags.map((tag, i) => (
                      <li key={tag}>
                        <MonoLabel>
                          {tag}
                          {i < tags.length - 1 && (
                            <span aria-hidden="true" className="ml-2">
                              /
                            </span>
                          )}
                        </MonoLabel>
                      </li>
                    ))}
                  </ul>

                  <Highlights items={exp.highlights} />
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}

export default Experience;
