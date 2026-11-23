import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import MonoLabel from "@/components/ui/MonoLabel";
import TextLink from "@/components/ui/TextLink";
import { education } from "@/data/education";
import { certificates } from "@/data/certificates";

function ListBlock({ title, children }) {
  return (
    <div data-reveal className="grid-site gap-y-4">
      <h3 className="col-span-4 md:col-span-2 lg:col-span-3">
        <MonoLabel className="text-foreground">{title}</MonoLabel>
      </h3>
      <div className="col-span-4 border-t border-border md:col-span-6 lg:col-span-9">
        {children}
      </div>
    </div>
  );
}

/** Education and certifications as compact lists. */
function Background() {
  return (
    <Section id="education" labelledBy="background-title" className="pb-[var(--section-space)]">
      <Container>
        <SectionHeader
          index="01"
          label="Background"
          id="background-title"
          title={
            <>
              Education &amp; <em className="italic">certifications</em>
            </>
          }
        />

        <div className="mt-12 space-y-14 md:mt-16">
          <ListBlock title="Education">
            <ol>
              {education.map((item) => (
                <li
                  key={item.title}
                  className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-6 gap-y-1 border-b border-border py-4 md:grid-cols-[7.5rem_minmax(0,1fr)_auto] md:items-baseline"
                >
                  <MonoLabel className="col-span-2 md:col-span-1">{item.date}</MonoLabel>
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {item.college}
                    </p>
                  </div>
                  <MonoLabel className="self-start text-foreground md:self-baseline">
                    {item.grades}
                  </MonoLabel>
                </li>
              ))}
            </ol>
          </ListBlock>

          <ListBlock title="Certifications">
            <ul id="certifications">
              {certificates.map((cert) => (
                <li
                  key={cert.id}
                  className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-6 gap-y-1 border-b border-border py-2 md:grid-cols-[minmax(0,1fr)_14rem_auto]"
                >
                  <p className="font-medium">{cert.title}</p>
                  <MonoLabel className="order-3 col-span-2 md:order-none md:col-span-1">
                    {cert.issuer} / {cert.date}
                  </MonoLabel>
                  <TextLink
                    href={cert.credentialUrl}
                    arrow
                    className="min-h-11 text-sm"
                  >
                    View<span className="sr-only"> {cert.title} credential</span>
                  </TextLink>
                </li>
              ))}
            </ul>
          </ListBlock>
        </div>
      </Container>
    </Section>
  );
}

export default Background;
