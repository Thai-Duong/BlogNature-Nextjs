import Card from "../card/Card";
import { iPost } from "@/types/post.type";
import { getPosts } from "@/app/getApi/posts";

const CardList = async () => {
  const data = await getPosts();
  return (
    <div className="bg-white">
      <div className="wrapper ">
        <div className="text-center justify-center my-10">
          <div className="text-4xl font-bold mb-5">
            National Geographic Society Mission
          </div>
          <div className="bg-yellow-500 w-16 h-1 my-5 mx-auto"></div>
        </div>
        <div className="md:grid grid-cols-2 md:grid-cols-3 items-center justify-between gap-10">
          {data?.slice(0, 3).map((item: iPost) => (
            <div className="item-center" key={item._id}>
              <Card item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CardList;
