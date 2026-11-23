import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "group inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "rounded-[2px] font-sans text-sm font-semibold tracking-[0.01em]",
    "transition-colors duration-200 ease-out",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-accent-foreground hover:bg-accent-hover",
        secondary:
          "border border-foreground/25 text-foreground hover:border-foreground hover:bg-foreground hover:text-background",
        ghost: "text-foreground hover:bg-muted",
      },
      size: {
        md: "h-12 px-6",
        sm: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

/**
 * Button or link styled as a button. Pass `href` to render an <a>.
 * `icon` renders after the label and nudges on hover.
 */
function Button({
  href,
  variant,
  size,
  icon,
  className,
  children,
  type = "button",
  ...props
}) {
  const Icon = icon;
  const classes = cn(buttonVariants({ variant, size }), className);
  const content = (
    <>
      {children}
      {Icon && (
        <Icon
          aria-hidden="true"
          className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
        />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {content}
    </button>
  );
}

export default Button;
