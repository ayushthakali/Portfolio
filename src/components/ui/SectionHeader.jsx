import { cn } from "@/lib/utils";
import MonoLabel from "./MonoLabel";

/**
 * Editorial section opener: thin rule, numbered mono label in the left
 * columns, serif heading and optional intro in the right columns.
 */
function SectionHeader({ index, label, title, intro, id, className }) {
  return (
    <header
      data-reveal
      className={cn(
        "grid-site gap-y-6 border-t border-border pt-6 md:pt-8",
        className
      )}
    >
      <MonoLabel className="col-span-4 md:col-span-2 lg:col-span-3">
        {index && <span className="text-foreground">{index}</span>}
        {index && label && <span aria-hidden="true"> / </span>}
        {label}
      </MonoLabel>

      <div className="col-span-4 md:col-span-6 lg:col-span-9">
        <h2 id={id} className="text-h2">
          {title}
        </h2>
        {intro && (
          <p className="mt-6 max-w-prose text-lead text-muted-foreground md:mt-8">
            {intro}
          </p>
        )}
      </div>
    </header>
  );
}

export default SectionHeader;
