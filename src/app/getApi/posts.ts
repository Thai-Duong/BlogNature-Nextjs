import axios from "axios";

export const getAllPosts = async (slug: string) => {
  try {
    const res = await axios.get(`http://localhost:3000/api/posts/${slug}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const getPosts = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/posts");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
