import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Experiences from "./components/sections/Experiences";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experiences />
        <Contact />
      </main>
    </>
  );
}

export default App;
