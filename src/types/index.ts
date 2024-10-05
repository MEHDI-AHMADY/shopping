export interface Book {
  id: number;
  title: string;
  authors: [{ name: string }];
  price: number;
  downloadCount: number;
  quantity: number;
}
