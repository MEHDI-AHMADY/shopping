export interface Book {
  id: number;
  title: string;
  authors: [{ name: string }];
  price: number;
  download_count: number;
  quantity: number;
  image: string;
}
