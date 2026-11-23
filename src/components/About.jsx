import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import MonoLabel from "@/components/ui/MonoLabel";
import { education } from "@/data/education";

function About() {
  return (
    <Section id="about" labelledBy="about-title">
      <Container>
        <SectionHeader
          index="01"
          label="About"
          id="about-title"
          title={
            <>
              I build practical web apps, <em className="italic">front to back.</em>
            </>
          }
        />

        <div className="grid-site mt-12 gap-y-8 md:mt-16">
          <div className="col-span-4 space-y-6 md:col-span-6 md:col-start-3 lg:col-span-6 lg:col-start-4">
            <p className="text-lead">
              I’m a Full Stack Developer based in Pokhara, Nepal, currently
              building and maintaining production systems at Omni Tech.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Most of my work happens in the React and Next.js ecosystem, with
              TypeScript and Tailwind CSS on the front end and Node.js and
              Express behind it. I’ve shipped applications on MongoDB, MySQL
              with Prisma, and PostgreSQL, and worked inside an established
              ASP.NET MVC and SQL Server codebase.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              I care about interfaces that are clear to use and code that stays
              easy to change: simple structure, sensible data models and pages
              that load quickly.
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="grid-site mt-20 gap-y-6 md:mt-28">
          <h3 className="col-span-4 md:col-span-2 lg:col-span-3">
            <MonoLabel className="text-foreground">Education</MonoLabel>
          </h3>
          <ol className="col-span-4 border-t border-border md:col-span-6 lg:col-span-9">
            {education.map((item) => (
              <li
                key={item.title}
                className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-6 gap-y-1 border-b border-border py-5 md:grid-cols-[7.5rem_minmax(0,1fr)_auto] md:items-baseline"
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
        </div>
      </Container>
    </Section>
  );
}

export default About;
