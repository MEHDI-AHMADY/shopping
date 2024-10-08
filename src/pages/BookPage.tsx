import { useParams } from "react-router-dom";
import { useGetAllBooks } from "../services";

export default function BookPage() {
  const { book } = useParams();
  const { data: allBooks } = useGetAllBooks();

  const newBookTitle = book?.trim().replace(/-/g, " ");

  const mainBook = allBooks?.find((book) => book.title === newBookTitle);

  return (
    <div className="container mt-5 min-h-[404px]">
      {mainBook && (
        <>
          <img
            src="/images/book.jpg"
            alt="book"
            className="w-full max-h-96 object-contain rounded-md"
          />
          <div className="flex flex-col gap-6 mt-5 items-center">
            <h1>Title : {mainBook.title}</h1>
            <span>Author : {mainBook.authors[0].name}</span>
            <span>Downloads : {mainBook.download_count}</span>
          </div>
        </>
      )}
    </div>
  );
}
