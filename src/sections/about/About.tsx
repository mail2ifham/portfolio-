import img from "../../assets/Asset 1.svg";

const About = () => {
  return (
    <section id="about" className="mb-10">
      <h2 className="text-3xl font-black py-10 ">
        <a href="#about"># About Me</a>
      </h2>
      <div className="flex">
        <div className="w-1/2 pr-10 text-lg text-justify tracking-wide">
          <p>
            My name is Ifham, and I am a frontend developer with over two years
            of hands-on experience in building responsive, user-friendly web
            interfaces. I specialize in HTML, CSS, JavaScript, React, Tailwind
            CSS, Sass, as well as state management and APIs. I’m passionate
            about translating modern UI designs into clean, maintainable code.
            Though I have not yet held a full-time position in the tech
            industry, I have developed practical skills and experience through
            self-directed projects and consistent practice. This includes
            converting design files into functional web pages, focusing on
            performance, accessibility, and user experience.
          </p>
          <p className="mt-5">
            Currently, I am expanding my skill set by exploring backend
            technologies such as Express.js and PostgreSQL, with the goal of
            becoming a full-stack developer. I’m also looking forward to diving
            into cloud computing, Supabase, WebSocket, and GraphQL to further
            enhance my capabilities. If you have any questions or would like to
            discuss a project, I would be happy to connect.
          </p>
        </div>

        <img src={img} alt="" className="w-1/2" />
      </div>
    </section>
  );
};

export default About;
