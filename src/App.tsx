import NavBar from "./components/navBar/NavBar";
import About from "./sections/about/About";
import Hero from "./sections/hero/Hero";
import Projects from "./sections/projects/Projects";

function App() {
  return (
    <>
      {/* background gradiant element */}
      <div className="w-[min(450px,800px)] h-[min(550px,800px)] fixed -z-10 -top-75 -right-75  blur-[200px]  rounded-full bg-accent"></div>
      <div className="w-[min(450px,800px)] h-[min(550px,800px)] fixed -z-10 -bottom-75 -left-75  blur-[220px]  rounded-full bg-primary "></div>

      <NavBar />
      <Hero />
      <About/>
      <Projects/>
    </>
  );
}

export default App;
