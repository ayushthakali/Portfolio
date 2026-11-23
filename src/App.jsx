import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { useLocation, takeNavType } from "./lib/router";
import { useScrollReveal } from "./hooks/useScrollReveal";

const SITE = "Ayush Thakali";

const routes = {
  "/": { page: Home, title: `${SITE} | Full Stack Developer` },
  "/about": { page: About, title: `About | ${SITE}` },
  "/experience": { page: Experience, title: `Experience | ${SITE}` },
  "/work": { page: Work, title: `Work | ${SITE}` },
  "/contact": { page: Contact, title: `Contact | ${SITE}` },
};

const notFound = { page: NotFound, title: `Page not found | ${SITE}` };

function App() {
  const { pathname, hash } = useLocation();
  const route = routes[pathname] ?? notFound;
  const Page = route.page;

  useEffect(() => {
    document.title = route.title;
  }, [route.title]);

  // New page or in-page link: jump to the #target or the top.
  // Back/forward (pop) keeps the browser's own scroll restoration.
  useEffect(() => {
    if (takeNavType() === "pop") return;
    const target = hash && document.getElementById(decodeURIComponent(hash.slice(1)));
    if (target) target.scrollIntoView();
    else window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);

  useScrollReveal(pathname);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-foreground focus:px-4 focus:py-3 focus:text-sm focus:text-background"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" key={pathname}>
        <Page />
      </main>
      <Footer />
    </>
  );
}

export default App;
