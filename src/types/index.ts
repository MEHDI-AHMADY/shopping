export interface Book {
  id: number;
  title: string;
  img: string;
  authors: (string | number)[];
  price: number;
  downloadCount: number;
  quantity: number;
}
