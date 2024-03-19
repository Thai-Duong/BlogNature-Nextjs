import Card from "../card/Card";
import { iPost } from "@/types/post.type";
import { getPosts } from "@/app/getApi/posts";

const CardList = async () => {
  const data = await getPosts();
  return (
    <div className="wrapper">
      <h5 className="text-2xl font-bold my-3">Popular Category</h5>
      <div className="md:grid grid-cols-2 md:grid-cols-3 items-center justify-between gap-10">
        {data?.slice(0, 6).map((item: iPost) => (
          <div className="item-center" key={item._id}>
            <Card item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default CardList;
