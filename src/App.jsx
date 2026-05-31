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
      
      {/* Top Navbar */}
      <Navbar />

      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main
        className="
          w-full
          md:pl-28
          pt-24
        "
      >
        <Hero />
        <About />
        <Skills />
        <Education />
        <Certification />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
