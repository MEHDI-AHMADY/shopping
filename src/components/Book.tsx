import { Link } from "react-router-dom";
import { Book as BookType } from "../types";

type BookProps = BookType & {
  addBookToCart: (bookID: number) => void;
  randomImage: string;
};

export default function Book(props: BookProps) {
  const { title, authors, id, addBookToCart, price, randomImage } = props;
  const titleSlug = title.trim().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-2 shadow-md rounded-md">
      <Link to={`/books/${titleSlug}`}>
        <img
          src={randomImage}
          alt="book"
          className="w-full h-48 object-cover rounded-md"
          loading="lazy"
        />
      </Link>

      <div className="relative min-h-64 p-4 mt-5">
        <div className="flex items-start gap-3">
          <h3 className="bg-green-600 p-1 rounded-sm text-white">title:</h3>
          <span className="line-clamp-2">{title}</span>
        </div>
        <div className="flex items-start gap-3 mt-4">
          <h3 className="bg-lime-800 p-1 rounded-sm text-white">Author:</h3>
          <span>{authors[0]?.name}</span>
        </div>

        <div className="mt-4 flex gap-2 items-center">
          <span className="bg-lime-300 dark:bg-lime-500 rounded-sm p-1 text-lg">
            Price:
          </span>
          <span>{price}$</span>
        </div>
        <button
          onClick={() => addBookToCart(id)}
          className="absolute bottom-4 right-2 left-2 mt-4 py-2 px-4 bg-green-300 dark:bg-slate-600 rounded-md hover:scale-95 transition-transform duration-200"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
