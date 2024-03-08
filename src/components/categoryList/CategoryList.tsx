import { getData } from "@/app/api/categories/route";
import { iCategories } from "@/types/categories.type";
import Link from "next/link";

const CategoryList = async () => {
  const data = await getData();
  if (!data) return null;
  return (
    <div className="mt-2 wrapper">
      <h5 className="mb-2 text-2xl font-bold">Popular Category</h5>
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
                {item.title}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};
export default CategoryList;
