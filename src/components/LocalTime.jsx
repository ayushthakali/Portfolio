import { useEffect, useState } from "react";
import MonoLabel from "@/components/ui/MonoLabel";
import { profile } from "@/data/profile";

const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: profile.timeZone,
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

/** Live local time in Pokhara, e.g. "Local time 14:32 NPT". */
function LocalTime({ className }) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 15_000);
    return () => clearInterval(id);
  }, []);

  return (
    <MonoLabel className={className}>
      <span className="hidden sm:inline">Local time </span>
      <time dateTime={now.toISOString()}>{formatter.format(now)}</time>{" "}
      {profile.timeZoneLabel}
    </MonoLabel>
  );
}

export default LocalTime;
