import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import MonoLabel from "@/components/ui/MonoLabel";
import Button from "@/components/ui/Button";

function NotFound() {
  return (
    <Section labelledBy="notfound-title" className="pt-16 pb-[var(--section-space)] md:pt-24">
      <Container>
        <MonoLabel>404</MonoLabel>
        <h1 id="notfound-title" className="mt-5 text-h1">
          This page <em className="italic">doesn’t exist.</em>
        </h1>
        <p className="mt-6 max-w-[34rem] text-lead text-muted-foreground">
          The link may be out of date. Everything on the site is reachable from
          the home page.
        </p>
        <Button href="/" icon={ArrowRight} className="mt-8">
          Back to home
        </Button>
      </Container>
    </Section>
  );
}

export default NotFound;
