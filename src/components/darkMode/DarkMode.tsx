import { useThemeContext } from "../../context/ThemeContext";

const DarkMode = () => {
  const { theme, darkModeToggler } = useThemeContext();

  return (
    <button
      onClick={darkModeToggler}
      className=" text-light-text p-5 py-1.5 rounded-md outline-1 
      bg-gradient-to-l from-accent to-primary capitalize"
    >
      {`${theme} mode`}
    </button>
  );
};

export default DarkMode;
