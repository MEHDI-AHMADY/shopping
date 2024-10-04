import axios from "axios";
import { Book as BookType } from "../types";

export const getAllBooks = async (): Promise<BookType[]> => {
  const response = await axios.get("https://gutendex.com/books/");
  const books: BookType[] = response.data.results;
  return books;
};
