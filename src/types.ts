export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  image: string;
  category: string;
  isSpecial?: boolean;
}

export interface Testimonial {
  id: string;
  author: string;
  rating: number;
  comment: string;
  avatar?: string;
}

export interface Category {
  id: string;
  name: string;
}
