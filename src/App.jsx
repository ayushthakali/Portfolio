import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 font-poppins overflow-hidden" >
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
