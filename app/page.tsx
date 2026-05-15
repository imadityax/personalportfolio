import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />

        {/* Divider */}
        <div className="divider mx-6 md:mx-16" />

        <About />

        <div className="divider mx-6 md:mx-16" />

        <Projects />

        <div className="divider mx-6 md:mx-16" />

        <Skills />

        <div className="divider mx-6 md:mx-16" />

        <Experience />

        <div className="divider mx-6 md:mx-16" />

        <Contact />
      </main>
    </>
  );
}
