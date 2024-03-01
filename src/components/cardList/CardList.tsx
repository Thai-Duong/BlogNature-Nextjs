import axios from "axios";
import Card from "../card/Card";
import { iPost } from "@/types/post.type";
import { getData } from "@/app/api/posts/route";

const CardList = async () => {
  const data = await getData();
  return (
    <div>
      <h5 className="my-5 text-2xl font-bold">Popular Category</h5>
      <div className="my-6 grid lg:grid-cols-1 xl:grid-cols-3 gap-5 justify-between">
        {data?.slice(0, 8).map((item: iPost) => (
          <Card key={item._id} item={item} />
        ))}
      </div>
      {/* <Pagination page={page} /> */}
    </div>
  );
};
export default CardList;
