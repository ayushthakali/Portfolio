import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

/** Top of the About page: page title and short profile. */
function About() {
  return (
    <Section labelledBy="about-title" className="pt-12 md:pt-16">
      <Container>
        <SectionHeader
          as="h1"
          label="About"
          id="about-title"
          title={
            <>
              I build practical web apps, <em className="italic">front to back.</em>
            </>
          }
        />

        <div className="grid-site mt-10 md:mt-14">
          <div
            data-reveal
            className="col-span-4 space-y-5 md:col-span-6 md:col-start-3 lg:col-span-7 lg:col-start-4"
          >
            <p className="text-lead">
              I’m a Full Stack Developer based in Pokhara, Nepal, currently
              building and maintaining production systems at Omni Tech.
            </p>
            <p className="max-w-[40rem] leading-relaxed text-muted-foreground">
              Most of my work happens in the React and Next.js ecosystem, with
              TypeScript and Tailwind CSS on the front end and Node.js and
              Express behind it. I’ve shipped applications on MongoDB, MySQL
              with Prisma, and PostgreSQL, and worked inside an established
              ASP.NET MVC and SQL Server codebase.
            </p>
            <p className="max-w-[40rem] leading-relaxed text-muted-foreground">
              I care about interfaces that are clear to use and code that stays
              easy to change: simple structure, sensible data models and pages
              that load quickly.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default About;
