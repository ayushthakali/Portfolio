import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-foreground focus:px-4 focus:py-3 focus:text-sm focus:text-background"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Experience />

        {/* Sections below keep their previous dark styling until they are
            redesigned in the next part of Phase 3. */}
        <div className="overflow-x-clip bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>
      <div className="overflow-x-clip bg-slate-950 text-white">
        <Footer />
      </div>
    </>
  );
}

export default App;
