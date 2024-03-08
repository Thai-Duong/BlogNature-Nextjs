import { iUser } from "./user.type";

export interface iComment {
  _id: string;
  createdAt: string;
  desc: string;
  userEmail: string;
  user: iUser;
  postSlug: string;
}
