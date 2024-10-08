import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

export default function App() {

  return (
    <div
      className="dark:bg-gray-800 dark:text-white transition-colors duration-300"
    >
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
