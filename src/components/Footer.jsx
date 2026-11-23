import { ArrowUp } from "lucide-react";
import Container from "@/components/ui/Container";
import TextLink from "@/components/ui/TextLink";
import { profile } from "@/data/profile";

const footerLinks = [
  ...profile.socials.filter((s) => ["GitHub", "LinkedIn"].includes(s.label)),
  { label: "Email", href: `mailto:${profile.email}` },
];

function Footer() {
  return (
    <footer data-tone="dark" className="bg-background text-foreground">
      <Container>
        <div className="flex flex-col gap-6 border-t border-border py-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm">
            <span className="font-serif text-xl">{profile.name}</span>
            <span className="ml-3 label-mono text-muted-foreground">
              © {new Date().getFullYear()}
            </span>
          </p>

          <ul className="flex flex-wrap gap-x-6">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <TextLink href={link.href} className="min-h-11 text-sm">
                  {link.label}
                </TextLink>
              </li>
            ))}
          </ul>

          <TextLink
            href="#top"
            icon={ArrowUp}
            iconNudge="group-hover:-translate-y-0.5"
            className="min-h-11 text-sm"
          >
            Back to top
          </TextLink>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
