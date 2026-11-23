import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import MonoLabel from "@/components/ui/MonoLabel";
import Button from "@/components/ui/Button";
import TextLink from "@/components/ui/TextLink";
import { profile } from "@/data/profile";

function ContactCta() {
  return (
    <Section tone="dark" labelledBy="cta-title" className="pb-[var(--section-space)]">
      <Container>
        <div data-reveal className="grid-site gap-y-8 lg:items-end">
          <div className="col-span-4 md:col-span-8 lg:col-span-8">
            <MonoLabel>Contact</MonoLabel>
            <h2 id="cta-title" className="mt-5 text-h1">
              Let’s build something <em className="italic">together.</em>
            </h2>
          </div>
          <div className="col-span-4 flex flex-col items-start gap-3 md:col-span-8 lg:col-span-4 lg:items-end">
            <Button href="/contact" icon={ArrowRight}>
              Start a conversation
            </Button>
            <TextLink href={`mailto:${profile.email}`} className="min-h-11 text-sm">
              {profile.email}
            </TextLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default ContactCta;
