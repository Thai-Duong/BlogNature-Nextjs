import { iPost } from "./post.type";

export interface iCategories {
  id: string;
  slug: string;
  title: string;
  img: string;
  Posts: iPost[];
}
