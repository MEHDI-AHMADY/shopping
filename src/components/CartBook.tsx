import { Book as BookType } from "../types";
import book1 from "/images/book.jpg";

type CartBookProps = BookType & {
  addMoreOfTheSameBook: (value : number) => void;
  removeBookFromCart: (value : number) => void;
};

export default function CartBook(props: CartBookProps) {
  const {
    id,
    quantity,
    title,
    authors,
    addMoreOfTheSameBook,
    removeBookFromCart,
  } = props;

  return (
    <div className="p-4 shadow-md rounded-md bg-white flex items-center justify-between">
      <img
        src={book1}
        alt="book"
        className="hidden sm:block h-10 w-10 rounded-full object-cover"
      />
      <h3 className="w-40 line-clamp-2">{title}</h3>
      <div className="hidden sm:block">{authors[0].name}</div>
      <div className="flex items-center gap-2 sm:gap-5">
        <button
          onClick={() => addMoreOfTheSameBook(id)}
          className="w-10 h-10 rounded-full p-3 bg-green-600 flex items-center justify-center text-white"
        >
          +
        </button>
        <button
          onClick={() => removeBookFromCart(id)}
          className="w-10 h-10 rounded-full p-3 bg-red-600 flex items-center justify-center text-white"
        >
          -
        </button>
      </div>

      <div className="flex items-center justify-center text-white w-10 h-10 rounded-full bg-lime-800">
        {quantity !== 0 && quantity }
      </div>
    </div>
  );
}
