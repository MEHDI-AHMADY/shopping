import { useEffect, useState } from "react";
import book1 from "/images/book.jpg";
import book2 from "/images/book2.jpg";
import book3 from "/images/book3.jpg";
import book4 from "/images/book4.jpg";
import { useAppDispatch } from "../redux/hooks";
import { addToCart } from "../redux/slice/bookSlice";
import { useGetAllBooks } from "../services";
import { Book as BookType } from "../types";
import Book from "./Book";
import Pagination from "./Pagination";

const Home = () => {
  const { data: allBooks, isPending, isError } = useGetAllBooks();
  const [currentBooks, setCurrentBooks] = useState<BookType[]>([]);
  const [booksWithQuantity, setBooksWithQuantity] = useState<BookType[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (allBooks && allBooks.length > 0) {
      const randomPrice = () => {
        const prices = [20, 30, 40, 10, 26, 42];
        return prices[Math.floor(Math.random() * prices.length)];
      };

      const randomImage = () => {
        const images = [book1, book2, book3, book4];
        return images[Math.floor(Math.random() * images.length)];
      };

      const newBooksWithQuantity = allBooks.map((book) => ({
        ...book,
        quantity: 0,
        price: randomPrice(),
        image: randomImage(),
      }));

      setBooksWithQuantity(newBooksWithQuantity);
    }
  }, [allBooks]);

  if (!booksWithQuantity.length) {
    return null;
  }

  const addBookToCartHandler = (bookID: number) => {
    const mainBook = booksWithQuantity.find((book) => book.id === bookID);
    dispatch(addToCart(mainBook!));
  };

  return (
    <main>
      <img
        src="./images/bookBanner.jpg"
        alt="banner"
        className="w-full h-80 md:h-[540px] object-cover"
      />
      <div className="container my-10 flex flex-col gap-10">
        <h1 className="text-center text-4xl bg-green-600 p-2 text-white rounded-md">
          All Books
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5">
          {currentBooks?.map((book) => (
            <Book
              key={book.id}
              {...book}
              addBookToCart={addBookToCartHandler}
              randomImage={book.image}
            />
          ))}
        </div>

        <Pagination
          items={booksWithQuantity}
          itemsCount={8}
          setCurrentBooks={setCurrentBooks}
        />
      </div>

      {isError && (
        <div className="errorOrPending">
          <h1 className="text-center text-3xl bg-gradient-to-r from-red-500 via-red-700 to-red-950 bg-clip-text text-transparent">
            Something went wrong, try again later
          </h1>
        </div>
      )}
      {isPending && (
        <div className="errorOrPending">
          <h1 className="text-center text-3xl bg-gradient-to-r from-red-500 via-red-700 to-red-950 bg-clip-text text-transparent">
            Loading...
          </h1>
        </div>
      )}
    </main>
  );
};

export default Home;
