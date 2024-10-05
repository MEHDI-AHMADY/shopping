import { useState } from "react";
import { useGetAllBooks } from "../services";
import { Book as BookType } from "../types";
import Book from "./Book";
import Pagination from "./Pagination";

const Home = () => {

  const { data: allBooks, isPending, isError } = useGetAllBooks();
  const [currentBooks, setCurrentBooks] = useState<BookType[]>([]);

  if (!allBooks?.length) return null;

  return (
    <div>
      <img
        src="./images/bookBanner.jpg"
        alt="banner"
        className="w-full h-80 md:h-[540px] object-cover"
      />
      <div className="container my-10 flex flex-col gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5">
          {currentBooks?.map((book) => (
            <Book key={book.id} {...book} />
          ))}
        </div>

        <Pagination
          items={allBooks}
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
    </div>
  );
};

export default Home;
