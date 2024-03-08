import { iComment } from "./comment.type";
import { iPost } from "./post.type";

export interface iUser {
  id: string;
  name: string;
  email: string;
  image: string;
  Post: iPost[];
  Comment: iComment[];
}
