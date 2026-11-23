import Link from "@/components/ui/Link";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

/** Italic serif name with an accent full stop. Links to the home page. */
function Wordmark({ className, onClick }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label={`${profile.name}, home`}
      className={cn(
        "group inline-flex items-baseline font-serif text-[1.625rem] leading-none tracking-[-0.01em] italic",
        className
      )}
    >
      {profile.name}
      <span
        aria-hidden="true"
        className="text-accent transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5"
      >
        .
      </span>
    </Link>
  );
}

export default Wordmark;
