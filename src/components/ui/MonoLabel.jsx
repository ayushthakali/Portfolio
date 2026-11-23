import { cn } from "@/lib/utils";

/** Small uppercase mono metadata: dates, locations, stacks, indices. */
function MonoLabel({ as = "span", className, ...props }) {
  const Tag = as;
  return (
    <Tag className={cn("label-mono text-muted-foreground", className)} {...props} />
  );
}

export default MonoLabel;
