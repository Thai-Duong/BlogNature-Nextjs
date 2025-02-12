import { iUser } from "./user.type";

export interface iComment {
  _id: string;
  createdAt: string;
  desc: string;
  userEmail: string;
  user: iUser;
  postSlug: string;
  parentId?: string | null; // Thêm parentId (có thể null nếu là comment chính)
  replies?: iComment[]; // Thêm replies để chứa danh sách reply
}
