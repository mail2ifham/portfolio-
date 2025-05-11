import heroImg from "../../assets/Asset 1.svg";

const Hero = () => {
  return (
    <section id="hero" className="flex justify-center h-[calc(100vh-60px)] mb-10">
      <div className="w-full flex items-start justify-center flex-col ">
        <h2 className="text-lg pl-1 tracking-widest">Hey there! I'm, </h2>
        <h1 className="text-6xl font-primay font-black py-1">Mohammed Ifham</h1>
        <h2 className="text-2xl text-accent tracking-wider text-shadow-black ">
          A passionate frontend developer.
        </h2>
        <div className="my-5 flex gap-5 text-white text-lg">
          <button className="cm-bg-accent px-5 py-2 rounded-md text-white">
            View Projects
          </button>
          <button
            className="border-2 border-accent   text-accent 
             px-5 py-2 rounded-md"
          >
            Contact Me
          </button>
        </div>
      </div>
      <div className="w-full flex items-center justify-end ">
        <img
          src={heroImg}
          alt="image of dev who working on his laptop"
          className="w-100"
        />
      </div>
    </section>
  );
};

export default Hero;
