export enum SelectedPage {
  Home = "home",
  About = "about",
  Contact = "contact",
  Blog = "blog",
  Careers = "careers",
}

export interface CardsType {
  name: string;
  image: string;
  description: string;
}

export interface BlogTypes {
  Image: string;
  AuthorName: string;
  name: string;
  description: string;
}

export interface IconTypes {
  image: string;
}
