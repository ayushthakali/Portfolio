import { ArrowUp } from "lucide-react";
import Container from "@/components/ui/Container";
import MonoLabel from "@/components/ui/MonoLabel";
import TextLink from "@/components/ui/TextLink";
import Wordmark from "@/components/Wordmark";
import { profile } from "@/data/profile";

const pages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

const elsewhere = [
  ...profile.socials.filter((s) => ["GitHub", "LinkedIn"].includes(s.label)),
  { label: "Email", href: `mailto:${profile.email}` },
];

function LinkColumn({ title, links, label }) {
  return (
    <nav aria-label={label}>
      <MonoLabel as="h2">{title}</MonoLabel>
      <ul className="mt-3">
        {links.map((link) => (
          <li key={link.label}>
            <TextLink href={link.href} className="min-h-10 text-sm">
              {link.label}
            </TextLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer data-tone="dark" className="bg-background text-foreground">
      <Container>
        <div className="grid gap-10 border-t border-border py-12 sm:grid-cols-2 md:grid-cols-[minmax(0,1fr)_10rem_10rem] md:py-16">
          <div className="sm:col-span-2 md:col-span-1">
            <Wordmark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {profile.role} based in {profile.location}.
            </p>
          </div>
          <LinkColumn title="Pages" label="Footer" links={pages} />
          <LinkColumn title="Elsewhere" label="Profiles" links={elsewhere} />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border py-5">
          <MonoLabel>
            © {new Date().getFullYear()} {profile.name}
          </MonoLabel>
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
