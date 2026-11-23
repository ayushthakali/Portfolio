import { useSyncExternalStore } from "react";

// Minimal History API router for the four static pages. Vercel serves
// index.html for every route (see vercel.json); Vite does the same in dev.

const NAV_EVENT = "app:navigate";
let navType = "load"; // load | push | pop

function subscribe(callback) {
  const onPop = () => {
    navType = "pop";
    callback();
  };
  window.addEventListener("popstate", onPop);
  window.addEventListener(NAV_EVENT, callback);
  return () => {
    window.removeEventListener("popstate", onPop);
    window.removeEventListener(NAV_EVENT, callback);
  };
}

const getSnapshot = () => window.location.pathname + window.location.hash;

export function useLocation() {
  const value = useSyncExternalStore(subscribe, getSnapshot, () => "/");
  const i = value.indexOf("#");
  const pathname = i === -1 ? value : value.slice(0, i);
  return {
    pathname: pathname.replace(/\/+$/, "") || "/",
    hash: i === -1 ? "" : value.slice(i),
  };
}

export function navigate(to) {
  navType = "push";
  window.history.pushState(null, "", to);
  window.dispatchEvent(new Event(NAV_EVENT));
}

/** Returns how the current location was reached, then resets to "pop". */
export function takeNavType() {
  const type = navType;
  navType = "pop";
  return type;
}

/** True for same-site page routes ("/about"), false for files and URLs. */
export function isRouteHref(href) {
  return (
    typeof href === "string" &&
    href.startsWith("/") &&
    !href.startsWith("//") &&
    !/\.[a-z0-9]{2,5}(?:[?#]|$)/i.test(href)
  );
}
