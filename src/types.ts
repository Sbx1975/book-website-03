export interface BookPage {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
}

export interface Review {
  id: number;
  author: string;
  content: string;
  rating: number;
}