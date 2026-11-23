import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Portfolio from "@/components/Portfolio";

function Work() {
  return (
    <>
      <Section labelledBy="work-title" className="pt-12 md:pt-16">
        <Container>
          <SectionHeader
            as="h1"
            label="Work"
            id="work-title"
            title={
              <>
                Selected <em className="italic">work</em>
              </>
            }
            intro="A selection of web applications I’ve built, from food and music discovery to personal finance, AI tools and real-time chat."
          />
        </Container>
      </Section>
      <Portfolio />
    </>
  );
}

export default Work;
