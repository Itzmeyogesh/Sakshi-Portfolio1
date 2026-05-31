import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certification from "./components/Certification";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-x-hidden">

      {/* Navbar (fixed top) */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Sidebar (hidden on mobile, fixed on desktop) */}
      <div className="hidden md:block fixed top-0 left-0 h-full z-40">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main
        className="
          w-full
          pt-20
          md:pl-28
          transition-all
          duration-300
        "
      >
        {/* Each section full width + scroll smooth support */}
        <section id="home" className="w-full min-h-screen">
          <Hero />
        </section>

        <section id="about" className="w-full min-h-screen">
          <About />
        </section>

        <section id="skills" className="w-full min-h-screen">
          <Skills />
        </section>

        <section id="education" className="w-full min-h-screen">
          <Education />
        </section>

        <section id="certification" className="w-full min-h-screen">
          <Certification />
        </section>

        <section id="projects" className="w-full min-h-screen">
          <Projects />
        </section>

        <section id="contact" className="w-full min-h-screen">
          <Contact />
        </section>

        <Footer />
      </main>
    </div>
  );
}

export default App;
