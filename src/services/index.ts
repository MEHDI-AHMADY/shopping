import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Book as BookType } from "../types";
import { getAllBooks } from "../utils";

export const useGetAllBooks = (): UseQueryResult<BookType[], Error> => {
  return useQuery({
    queryKey: ["allBooks"],
    queryFn: getAllBooks,
  });
};
