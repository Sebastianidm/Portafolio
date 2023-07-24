import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function Home() {
  return (
    <main className="text-gray-400  bg-gray-900 body-font ">
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default Home;
