import { useState } from "react";
import Link from "@/components/ui/Link";
import { webpSet } from "@/lib/projects";
import { cn } from "@/lib/utils";

/**
 * Project screenshot in a fixed-ratio frame. Falls back to a plain panel
 * with the project name if the image is missing or fails to load.
 * When `href` is set the frame links there for pointer users only; the
 * same destination is always available as a visible text link nearby.
 */
function ProjectImage({ project, name, sizes, href, className }) {
  const [failed, setFailed] = useState(!project.image);

  const frame = cn(
    "relative block aspect-[1900/860] overflow-hidden border border-border bg-muted",
    className
  );

  if (failed) {
    return (
      <div className={cn(frame, "flex items-end p-6")}>
        <span className="font-serif text-h3 text-muted-foreground">{name}</span>
      </div>
    );
  }

  const image = (
    <picture>
      <source type="image/webp" srcSet={webpSet(project.image)} sizes={sizes} />
      <img
        src={project.image}
        alt={`Screenshot of ${name}`}
        width={1900}
        height={860}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
        className="h-full w-full object-cover object-top transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
      />
    </picture>
  );

  if (!href) return <div className={frame}>{image}</div>;

  const external = /^https?:\/\//.test(href);
  return (
    <Link
      href={href}
      tabIndex={-1}
      aria-hidden="true"
      className={frame}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {image}
    </Link>
  );
}

export default ProjectImage;
