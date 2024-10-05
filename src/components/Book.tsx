import { Book as BookTypes } from "../types";
import book1 from "/images/book.jpg";
import book2 from "/images/book2.jpg";
import book3 from "/images/book3.jpg";
import book4 from "/images/book4.jpg";

export default function Book(props: BookTypes) {
  const { title, authors } = props;

  const randomImage = () => {
    const images = [book1, book2, book3, book4];
    return images[Math.floor(Math.random() * images.length)];
  };

  return (
    <div className="flex flex-col gap-2 shadow-md rounded-md">
      <img
        src={randomImage()}
        alt="book"
        className="w-full h-48 object-cover rounded-md"
      />

      <div className="relative min-h-52 p-4 mt-5">
        <div className="flex items-start gap-3">
          <h3 className="bg-green-600 p-1 rounded-sm text-white">title:</h3>
          <span className="line-clamp-2">{title}</span>
        </div>
        <div className="flex items-start gap-3 mt-4">
          <h3 className="bg-lime-800 p-1 rounded-sm text-white">Author:</h3>
          <span>{authors[0].name}</span>
        </div>

        <button className="absolute bottom-4 right-2 left-2 mt-4 py-2 px-4 bg-green-300 rounded-md hover:scale-95 transition-transform duration-200">
          Add To Cart
        </button>
      </div>
    </div>
  );
}
