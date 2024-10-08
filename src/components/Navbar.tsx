import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { useAppSelector } from "../redux/hooks";
import Cart from "./Cart";
import SwitchTheme from "./SwitchTheme";

export default function Navbar() {
  const count = useAppSelector((state) => state.cart.length);
  const [showCart, setShowCart] = useState<boolean>(false);

  return (
    <header className="sticky top-0 pt-4 z-50 bg-white dark:bg-gray-800">
      <div className="container">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold cursor-pointer">Books</h1>

          <div className="flex gap-4 md:gap-8 items-center">
            <SwitchTheme />
            <div className="hidden md:flex items-center gap-3">
              <div className="rounded-full border-2 border-gray-300 text-gray-500 dark:text-white text-3xl w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-all duration-200">
                <AiOutlineUser />
              </div>

              <div>
                <a href="#" className="text-gray-500 dark:text-white">
                  Sign In
                </a>
              </div>
            </div>

            <div
              onClick={() => setShowCart(true)}
              className="text-3xl relative cursor-pointer text-gray-500"
            >
              <FiShoppingCart className="dark:text-white" />
              <div className="absolute -top-3 -right-2 bg-red-500 w-5 h-5 rounded-full text-white text-sm flex items-center justify-center">
                {count}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200 pt-4" />

      <Cart showCart={showCart} setShowCart={setShowCart} />
    </header>
  );
}
