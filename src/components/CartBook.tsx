import { Book as BookType } from "../types";
import book1 from "/images/book.jpg";

type CartBookProps = BookType & {
  addMoreOfTheSameBook: (value: number) => void;
  removeBookFromCart: (value: number) => void;
};

export default function CartBook(props: CartBookProps) {
  const {
    id,
    quantity,
    title,
    authors,
    price,
    addMoreOfTheSameBook,
    removeBookFromCart,
  } = props;

  return (
    <div className="p-4 shadow-md rounded-md bg-white dark:bg-slate-600 grid grid-cols-1 sm:grid-cols-3 gap-5">
      <div className="flex items-center justify-between sm:gap-3">
        <img
          src={book1}
          alt="book"
          className="h-10 w-10 rounded-full object-cover"
        />
        <h3 className="w-40 line-clamp-2">{title}</h3>
      </div>

      <div className="flex items-center justify-between">
        <span>{authors[0].name}</span>
        <span className="p-2 max-w-11 rounded-full bg-green-200 dark:bg-gray-400">{price}$</span>
      </div>
      <div className="flex items-center gap-1 md:gap-3 sm:justify-end">
        <button
          onClick={() => addMoreOfTheSameBook(id)}
          className="w-10 h-10 rounded-full p-4 bg-green-600 flex items-center justify-center text-white"
        >
          +
        </button>
        <button
          onClick={() => removeBookFromCart(id)}
          className="w-10 h-10 rounded-full p-4 bg-red-600 flex items-center justify-center text-white"
        >
          -
        </button>
        <div className="flex items-center justify-center text-white w-10 h-10 rounded-full bg-lime-800">
          {quantity !== 0 && quantity}
        </div>
      </div>
    </div>
  );
}
