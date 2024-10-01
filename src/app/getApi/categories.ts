import axios from "axios";

export const getAllCategories = async (slug: string) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/categories/${slug}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const getCategories = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/categories");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
