import { getAllCategories } from "@/app/getApi/categories";
import Card from "@/components/card/Card";
import CardLarge from "@/components/cardLLarge/CardLarge";
import SkeletonCategory from "@/components/skeletons/SkeletonCategory";
import { iPost } from "@/types/post.type";
import { Suspense } from "react";

interface CategoriesParams {
  params: { slug: string };
}

const Categories = async ({ params }: CategoriesParams) => {
  const { slug } = params;
  const category = await getAllCategories(slug);

  if (!category || category.length === 0) {
    return <div className="text-white text-center">Category not found</div>;
  }

  const data = category[0];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 py-5 wrapper">
      <div className="col-span-2 mt-5">
        {data.Posts.length > 0 ? (
          <CardLarge item={data.Posts[0]} />
        ) : (
          <div className="text-white">No posts available</div>
        )}
      </div>
      {data.Posts?.slice(1).map((item: iPost) => (
        <Card key={item._id} item={item} />
      ))}
    </div>
  );
};

export default function CategoriesWrapper({ params }: CategoriesParams) {
  return (
    <Suspense fallback={<SkeletonCategory />}>
      <Categories params={params} />
    </Suspense>
  );
}
