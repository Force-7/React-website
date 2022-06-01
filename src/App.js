import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Socials from "./components/Socials";

function App() {
  const [currTheme, setCurrTheme] = useState(true);
  return (
    <>
      {/* NAV */}
      <Navbar currTheme={currTheme} setCurrTheme={setCurrTheme} />
      {/* HERO */}
      <Hero currTheme={currTheme} />
      {/* ABOUT */}
      <About />
      {/* SKILLS */}
      <Skills />
      {/* PROJECT */}
      <Projects />
      {/* CONTACT ME */}

      <Contact />
      {/* Socials */}
      <Socials />
    </>
  );
}

export default App;
