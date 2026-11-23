import { useEffect, useRef, useState } from "react";
import { Download } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Link from "@/components/ui/Link";
import MonoLabel from "@/components/ui/MonoLabel";
import TextLink from "@/components/ui/TextLink";
import Wordmark from "@/components/Wordmark";
import { useLocation } from "@/lib/router";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const pages = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

const getScrolled = () => typeof window !== "undefined" && window.scrollY > 8;

function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(getScrolled);
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
  const isActive = (href) => pathname === href;
  const current = (href) => (isActive(href) ? "page" : undefined);

  return (
    <header
      id="top"
      className={cn(
        "motion-fade sticky top-0 z-50 border-b bg-background transition-colors duration-300",
        open || scrolled ? "border-border" : "border-transparent"
      )}
    >
      <Container className="flex h-[var(--nav-height)] items-center justify-between gap-6">
        <Wordmark onClick={close} />

        {/* Desktop */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {pages.slice(1, -1).map((page) => (
              <li key={page.href}>
                <Link
                  href={page.href}
                  aria-current={current(page.href)}
                  className={cn(
                    "relative inline-flex h-11 items-center text-sm font-medium transition-colors duration-200",
                    "before:absolute before:top-1/2 before:-left-3.5 before:size-1.5 before:-translate-y-1/2 before:rounded-full before:bg-accent before:transition-transform before:duration-300",
                    isActive(page.href)
                      ? "text-foreground before:scale-100"
                      : "text-muted-foreground before:scale-0 hover:text-foreground"
                  )}
                >
                  {page.label}
                </Link>
              </li>
            ))}
            <li>
              <Button
                href="/contact"
                variant={isActive("/contact") ? "primary" : "secondary"}
                size="sm"
                aria-current={current("/contact")}
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
            {pages.map((page, index) => (
              <li key={page.href} className="border-b border-border">
                <Link
                  href={page.href}
                  onClick={close}
                  aria-current={current(page.href)}
                  className="flex items-baseline gap-5 py-5"
                >
                  <MonoLabel className={cn(isActive(page.href) && "text-accent")}>
                    {String(index + 1).padStart(2, "0")}
                  </MonoLabel>
                  <span className="font-serif text-h2">{page.label}</span>
                </Link>
              </li>
            ))}
          </ol>

          <div className="flex flex-col items-start gap-1">
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
