import { useAppDispatch, useAppSelector } from "../redux/hooks";
import CartBook from "./CartBook";
import { IoClose } from "react-icons/io5";
import { addToCart, removeBook } from "../redux/slice/bookSlice";

type CartProps = {
  showCart: boolean;
  setShowCart: (value: boolean) => void;
};

export default function Cart({ showCart, setShowCart }: CartProps) {
  const books = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  const addMoreOfTheSameBook = (bookID: number) => {
    const mainBook = books.find((book) => book.id === bookID);
    dispatch(addToCart(mainBook!));
  };

  const removeBookFromCart = (bookID: number) => {
    dispatch(removeBook(bookID));
  };

  return (
    <div
      className={`fixed top-0 right-0 left-0 h-96 shadow-xl bg-gray-200 overflow-y-auto transition-transform duration-200 ${
        showCart ? "translate-y-0" : "-translate-y-96"
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
          </div>
        ) : (
          <div className="text-center text-2xl ">No Book has added yet!</div>
        )}
      </div>
    </div>
  );
}
