import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function Home() {
  return (
    <main className="text-gray-400  bg-slate-800 body-font ">
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default Home;
