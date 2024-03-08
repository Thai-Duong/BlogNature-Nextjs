import { getData } from "@/app/api/categories/[slug]/route";
import Card from "@/components/card/Card";
import CardLarge from "@/components/cardLLarge/CardLarge";
import { iPost } from "@/types/post.type";

const Categories = async ({ params }: any) => {
  const { slug } = params;
  const category = await getData(slug);
  const data = await category[0];
  return (
    <div className="grid grid-cols-3 gap-8 py-5 wrapper">
      <div className="col-span-2">
        <CardLarge item={data.Posts[0]} />
      </div>
      {data.Posts.map((item: iPost) => (
        <Card key={item._id} item={item} />
      ))}
    </div>
  );
};
export default Categories;
