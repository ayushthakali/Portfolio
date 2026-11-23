import { useEffect, useRef, useState } from "react";
import { Download } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import MonoLabel from "@/components/ui/MonoLabel";
import TextLink from "@/components/ui/TextLink";
import { useActiveSection } from "@/hooks/useActiveSection";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const getScrolled = () => typeof window !== "undefined" && window.scrollY > 8;

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(getScrolled);
  const active = useActiveSection(["top", ...links.map((link) => link.id)]);
  const toggleRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(getScrolled());
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile menu: lock page scroll, close on Escape or when resized to desktop.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const desktop = window.matchMedia("(min-width: 64rem)");

    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onResize = (event) => event.matches && setOpen(false);

    root.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      root.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);
  const isActive = (id) => active === id;

  return (
    <header
      className={cn(
        "motion-fade sticky top-0 z-50 border-b transition-colors duration-300",
        open || scrolled
          ? "border-border bg-background"
          : "border-transparent bg-background"
      )}
    >
      <Container className="flex h-[var(--nav-height)] items-center justify-between gap-6">
        <a
          href="#top"
          onClick={close}
          className="-my-2 py-2 font-serif text-[1.625rem] leading-none tracking-[-0.01em]"
        >
          {profile.name}
        </a>

        {/* Desktop */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {links.slice(0, -1).map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={isActive(link.id) ? "true" : undefined}
                  className={cn(
                    "relative inline-flex h-11 items-center text-sm font-medium transition-colors duration-200",
                    "before:absolute before:top-1/2 before:-left-3.5 before:size-1.5 before:-translate-y-1/2 before:rounded-full before:bg-accent before:transition-transform before:duration-300",
                    isActive(link.id)
                      ? "text-foreground before:scale-100"
                      : "text-muted-foreground before:scale-0 hover:text-foreground"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Button
                href="#contact"
                variant={isActive("contact") ? "primary" : "secondary"}
                size="sm"
                aria-current={isActive("contact") ? "true" : undefined}
              >
                Contact
              </Button>
            </li>
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="-mr-3 inline-flex h-11 min-w-11 items-center justify-center px-3 lg:hidden"
        >
          <MonoLabel className="text-foreground">
            {open ? "Close" : "Menu"}
          </MonoLabel>
        </button>
      </Container>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 top-[var(--nav-height)] bottom-0 overflow-y-auto bg-background lg:hidden",
          "transition-[opacity,transform,visibility] duration-300 ease-out",
          open
            ? "visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-2 opacity-0"
        )}
      >
        <Container
          as="nav"
          aria-label="Mobile"
          className="flex min-h-full flex-col justify-between gap-12 py-8"
        >
          <ol className="border-t border-border">
            {links.map((link, index) => (
              <li key={link.id} className="border-b border-border">
                <a
                  href={`#${link.id}`}
                  onClick={close}
                  aria-current={isActive(link.id) ? "true" : undefined}
                  className="flex items-baseline gap-5 py-5"
                >
                  <MonoLabel className={cn(isActive(link.id) && "text-accent")}>
                    {String(index + 1).padStart(2, "0")}
                  </MonoLabel>
                  <span className="font-serif text-h3">{link.label}</span>
                </a>
              </li>
            ))}
          </ol>

          <div className="flex flex-col items-start gap-3">
            <MonoLabel>Get in touch</MonoLabel>
            <TextLink href={`mailto:${profile.email}`} className="min-h-11 text-lg">
              {profile.email}
            </TextLink>
            <TextLink
              href={profile.resume}
              download
              icon={Download}
              className="min-h-11"
            >
              Download resume (PDF)
            </TextLink>
          </div>
        </Container>
      </div>
    </header>
  );
}

export default Navbar;
