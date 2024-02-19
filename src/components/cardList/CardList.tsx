import axios from "axios";
import Card from "../card/Card";
import { iPost } from "@/types/post.type";
import { getData } from "@/app/api/posts/route";

const CardList = async () => {
  const data = await getData();
  return (
    <div>
      <h5 className="mb-5 text-2xl font-bold">Popular Category</h5>
      <div className="mt-6 grid lg:grid-cols-1 xl:grid-cols-4 gap-3">
        {data?.slice(0, 8).map((item: iPost) => (
          <div className="col-span-1" key={item._id}>
            <Card item={item} />
          </div>
        ))}
      </div>
      {/* <Pagination page={page} /> */}
    </div>
  );
};
export default CardList;
