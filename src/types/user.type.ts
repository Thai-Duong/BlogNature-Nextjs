import { iComment } from "./comment.type";
import { iPost } from "./post.type";

export interface iUser {
  id: string;
  name: string;
  email: string;
  // emailVerified : DateTime?
  image: string;
  // accounts  :    Account[]
  // sessions   :   Session[]
  Post: iPost[];
  Comment: iComment[];
}
