import { cn } from "@/lib/utils";

/**
 * Page shell: the single max content width and horizontal gutter
 * shared by every section.
 */
function Container({ as = "div", className, ...props }) {
  const Tag = as;
  return <Tag className={cn("shell", className)} {...props} />;
}

export default Container;
