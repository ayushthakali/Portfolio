import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const isExternal = (href = "") => /^https?:\/\//.test(href);

/**
 * Inline text link with a drawn underline and optional arrow or icon.
 * External URLs open in a new tab with rel="noopener noreferrer".
 */
function TextLink({
  href,
  arrow = false,
  icon,
  className,
  children,
  ...props
}) {
  const external = isExternal(href);
  const Icon = icon || (external ? ArrowUpRight : ArrowRight);
  const nudge = icon
    ? "group-hover:translate-y-0.5"
    : external
      ? "group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      : "group-hover:translate-x-0.5";

  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center gap-1.5 text-foreground",
        className
      )}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      {...props}
    >
      <span className="link-underline">{children}</span>
      {(arrow || icon) && (
        <Icon
          aria-hidden="true"
          className={cn(
            "size-4 shrink-0 transition-transform duration-200 ease-out",
            nudge
          )}
        />
      )}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}

export default TextLink;
