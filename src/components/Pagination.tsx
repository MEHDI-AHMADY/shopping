import { useEffect, useState } from "react";
import { Book as BookType } from "../types";
import { useParams, Link } from "react-router-dom";

type PaginationType = {
  items: BookType[];
  itemsCount: number;
  setCurrentBooks: (value: BookType[]) => void;
};

export default function Pagination({
  items,
  itemsCount,
  setCurrentBooks,
}: PaginationType) {
  const { page } = useParams<{ page: string }>();
  const currentPage = Number(page) || 1;
  const [pagesCount, setPagesCount] = useState<number | null>(null);

  useEffect(() => {
    let endIndex = itemsCount * currentPage;
    let startIndex = endIndex - itemsCount;
    let paginatedItems = items.slice(startIndex, endIndex);

    setCurrentBooks(paginatedItems);

    let pagesNumber = Math.ceil(items.length / itemsCount);
    setPagesCount(pagesNumber);
  }, [page , itemsCount , setCurrentBooks]);

  return (
    <div className="flex items-center justify-center gap-2">
      {Array(pagesCount)
        .fill(0)
        .map((_, index) => (
          <Link
            to={`/${index + 1}`}
            className={`px-5 py-2 rounded-lg text-xl ${
              index + 1 === currentPage ? "bg-green-500" : "bg-green-300"
            }`}
            key={index}
          >
            {index + 1}
          </Link>
        ))}
    </div>
  );
}
