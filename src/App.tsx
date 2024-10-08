import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {

  return (
    <div
      className="dark:bg-gray-800 dark:text-white transition-colors duration-300 min-h-screen"
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
