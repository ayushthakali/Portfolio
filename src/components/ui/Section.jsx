import { cn } from "@/lib/utils";

const tones = {
  default: "",
  muted: "bg-muted",
  dark: "",
};

/**
 * Top-level page section.
 * `tone="dark"` re-maps the colour tokens for everything inside it
 * (see [data-tone="dark"] in index.css), so children need no colour logic.
 */
function Section({
  id,
  tone = "default",
  labelledBy,
  spacing = true,
  className,
  children,
  ...props
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      data-tone={tone === "dark" ? "dark" : undefined}
      className={cn(
        "relative bg-background text-foreground",
        tones[tone],
        spacing && "section-space",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

export default Section;
