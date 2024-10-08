import { useAppDispatch, useAppSelector } from "../redux/hooks";
import CartBook from "./CartBook";
import { IoClose } from "react-icons/io5";
import { addToCart, removeBook } from "../redux/slice/bookSlice";
import { useEffect, useState } from "react";

type CartProps = {
  showCart: boolean;
  setShowCart: (value: boolean) => void;
};

export default function Cart({ showCart, setShowCart }: CartProps) {
  const books = useAppSelector((state) => state.cart);
  const [pricesSum, setPricesSum] = useState<number>(0);

  const dispatch = useAppDispatch();

  const addMoreOfTheSameBook = (bookID: number) => {
    const mainBook = books.find((book) => book.id === bookID);
    dispatch(addToCart(mainBook!));
  };

  const removeBookFromCart = (bookID: number) => {
    dispatch(removeBook(bookID));
  };

  useEffect(() => {
    const calculateSumOfBookPrices = (): number => {
      let price: number = 0;
      if (books) {
        for (let book of books) {
          if (book.quantity > 1) {
            price += book.price * book.quantity;
          }else{
            price += book.price;
          }
        }
      }
      return price;
    };
    setPricesSum(calculateSumOfBookPrices());
  }, [books]);

  return (
    <div
      className={`fixed top-0 right-0 left-0 h-[420px] shadow-xl bg-gray-200 dark:bg-slate-900 overflow-y-auto transition-transform duration-200 ${
        showCart ? "translate-y-0" : "-translate-y-[420px]"
      }`}
    >
      <div className="p-5 flex flex-col gap-4">
        <IoClose
          className="text-3xl cursor-pointer"
          onClick={() => setShowCart(false)}
        />
        {books.length !== 0 ? (
          <div className="flex flex-col gap-4">
            {books.length !== 0 &&
              books.map((book) => (
                <CartBook
                  key={book.id}
                  {...book}
                  removeBookFromCart={removeBookFromCart}
                  addMoreOfTheSameBook={addMoreOfTheSameBook}
                />
              ))}
            <div className="mt-5 text-2xl">Total Price : {pricesSum}$</div>
          </div>
        ) : (
          <div className="text-center text-2xl ">No Book has added yet!</div>
        )}
      </div>
    </div>
  );
}
