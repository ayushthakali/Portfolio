import { useEffect } from "react";

/**
 * Adds .is-revealed to every [data-reveal] element the first time it enters
 * the viewport. Styling lives in index.css; without IntersectionObserver
 * everything is revealed immediately.
 */
export function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]:not(.is-revealed)");
    const reveal = (el) => el.classList.add("is-revealed");

    if (!("IntersectionObserver" in window)) {
      elements.forEach(reveal);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
