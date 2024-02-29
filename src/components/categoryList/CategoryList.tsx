import { iCategories } from "@/types/categories.type";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const getData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/categories");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
const CategoryList = async () => {
  const data = await getData();
  if (!data) return null;
  return (
    <div className="xl:mt-10">
      <h5 className="mb-5 text-2xl font-bold">Popular Category</h5>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        {data &&
          data.map((item: iCategories) => (
            <div
              key={item.id}
              className="flex justify-center bg-[#57c4ff31] py-2 border rounded-md"
            >
              <Link
                href={`/categories/${item.slug}`}
                className="flex items-center px-2"
              >
                {/* <Image src={item.img} alt="" width={40px} className="w-10 h-10 mr-3" /> */}
                {item.title}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};
export default CategoryList;
