import Link from "@/components/ui/Link";
import Monogram from "@/components/Monogram";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

/** AT monogram + name. Links to the home page. */
function Wordmark({ className, onClick }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label={`${profile.name}, home`}
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <Monogram className="size-9 transition-colors duration-200 group-hover:text-accent" />
      <span className="font-serif text-[1.375rem] leading-none tracking-[-0.01em]">
        {profile.name}
      </span>
    </Link>
  );
}

export default Wordmark;
