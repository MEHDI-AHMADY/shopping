import { useContext } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { themeContext } from "../context/ThemeContext";

export default function SwitchTheme() {
  const { theme, setTheme } = useContext(themeContext)!;
  return (
    <div>
      {theme === "dark" ? (
        <IoSunnyOutline
          onClick={() => setTheme("light")}
          className="text-3xl cursor-pointer"
        />
      ) : (
        <MdDarkMode
          onClick={() => setTheme("dark")}
          className="text-3xl cursor-pointer text-gray-600"
        />
      )}
    </div>
  );
}
