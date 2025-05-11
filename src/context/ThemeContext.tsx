import {
  createContext,
  ReactNode,
  useContext, 
  useEffect,
  useState,
} from "react";

// Define the shape of the ThemeContext
type ThemeContextType = {
  theme: string; // Current theme, either "light" or "dark"
  darkModeToggler: () => void; // Function to toggle the theme
};

// Create the ThemeContext with an initial value of undefined
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

type ThemeProviderProps = {
  children: ReactNode; // Children components that will consume the context
};

// Define an enum for theme values
enum ThemeMode {
  DARK = "dark",
  LIGHT = "light",
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  // Check the user's system preference for dark mode
  const MediaProffered = matchMedia("(prefers-color-scheme: dark)").matches
    ? ThemeMode.DARK
    : ThemeMode.LIGHT;

  // Get the user's saved theme preference from localStorage or fallback to system preference
  const getDarkModePreference =
    (localStorage.getItem("theme") as ThemeMode) || MediaProffered;

  // State to manage the current theme
  const [theme, setTheme] = useState<ThemeMode>(getDarkModePreference);

  // Update the theme in localStorage and apply the corresponding class to the document
  useEffect(() => {
    localStorage.setItem("theme", theme);

    if (theme === ThemeMode.DARK) {
      document.documentElement.classList.add(ThemeMode.DARK);
    } else {
      document.documentElement.classList.remove(ThemeMode.DARK);
    }
  }, [theme]);

  // Function to toggle between light and dark themes
  const darkModeToggler = () => {
    setTheme((prevTheme) =>
      prevTheme === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK
    );
  };

  return (
    // Provide the theme and toggler function to the context consumers
    <ThemeContext.Provider value={{ theme, darkModeToggler }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use the ThemeContext
export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  // Throw an error if the hook is used outside of a ThemeProvider
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

export default ThemeProvider;
