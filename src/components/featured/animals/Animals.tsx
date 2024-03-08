import { getData } from "@/app/api/posts/route";
import { iPost } from "@/types/post.type";
import Card from "../../card/Card";
import CardLarge from "../../cardLLarge/CardLarge";
import CardSmall from "../../cardsmall/CardSmall";

const LastStory = async () => {
  const data = await getData();
  const itemCardLagre = data[5];
  return (
    <div className="wrapper">
      <div className="text-center justify-center ">
        <div className="text-6xl font-bold mb-5">LATEST STORIES</div>
        <div className="text-xl ">
          Subscribe for full access to read stories from National Geographic.
        </div>
        <div className="bg-yellow-500 w-16 h-1 my-5 mx-auto"></div>
      </div>
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-4">
          <CardSmall data={data} />
        </div>
        <div className="col-span-8">
          <CardLarge item={itemCardLagre} />
          <div className="flex justify-between mt-10">
            {data?.slice(0, 2).map((item: iPost) => (
              <Card key={item._id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default LastStory;
