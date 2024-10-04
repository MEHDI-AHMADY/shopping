import { useEffect, useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { setBooks } from "../redux/slice/bookSlice";
import { useGetAllBooks } from "../services";
import Book from "./Book";
import Pagination from "./Pagination";

const Home = () => {
  const dispatch = useAppDispatch();

  const { data: allBooks, isPending, isError } = useGetAllBooks();

  useEffect(() => {
    if (allBooks) dispatch(setBooks(allBooks));
  }, []);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const booksPerPage = 6;

  // pagination logic
  const indexOfLastBook: number = currentPage * booksPerPage;
  const indexOfFirstBook: number = indexOfLastBook - booksPerPage;
  const currentBooks = allBooks?.slice(indexOfFirstBook, indexOfLastBook);

  if (!allBooks?.length) return;

  const pagesCount: number = Math.ceil(allBooks.length / booksPerPage);
  const pagesNumbers: number[] = Array.from(Array(pagesCount).keys());

  return (
    <>
      <img
        src="./images/bookBanner.jpg"
        alt="banner"
        className="w-full h-80 md:h-[540px] object-cover"
      />
      <div className="container my-10">
        {currentBooks?.map((book) => (
          <Book key={book.id} {...book} />
        ))}

        <Pagination
          pagesNumbers={pagesNumbers}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
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
    </>
  );
};

export default Home;
