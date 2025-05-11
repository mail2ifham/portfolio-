import DarkMode from "../darkMode/DarkMode";


const NavBar = () => {
  return (
    <nav className="flex p-4 w-full font-black items-center justify-center  ">
      <h1 className="uppercase text-xl ">
        <a href="/">
          Ifham<span className="text-accent text-3xl">.</span>
        </a>
      </h1>

      <ul className="flex ml-auto *:justify-between gap-5 items-center ">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <DarkMode />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
