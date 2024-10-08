import { createContext, ReactNode, useEffect, useState } from "react";

export type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};

export const themeContext = createContext<ThemeContextType | undefined>(
  undefined
);

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const systemTheme = window.matchMedia("(prefers-color-scheme : dark)")
        .matches
        ? "dark"
        : "light";

      setTheme(systemTheme);
      localStorage.setItem("theme", systemTheme);
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme : dark)");
    const handleSystemThemeChange = (e: MediaQueryListEvent): void => {
      const newSystemTheme = e.matches ? "dark" : "light";
      setTheme(newSystemTheme);
      localStorage.setItem("theme", newSystemTheme);
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () =>
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, []);

  return (
    <themeContext.Provider value={{ theme, setTheme: toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeContextProvider;
