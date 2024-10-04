type PaginationType = {
  pagesNumbers: number[];
  currentPage: number;
  setCurrentPage: (value: number) => void;
};

export default function Pagination({
  pagesNumbers,
  currentPage,
  setCurrentPage,
}: PaginationType) {
  const changePaginate = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="flex items-center justify-center gap-2">
      {pagesNumbers.map((pageNumber: number) => (
        <span
          className={`px-5 py-2 rounded-lg text-xl ${
            pageNumber + 1 === currentPage ? "bg-green-500" : "bg-green-300"
          }`}
          onClick={() => changePaginate(pageNumber + 1)}
          key={pageNumber}
        >
          {pageNumber + 1}
        </span>
      ))}
    </div>
  );
}
