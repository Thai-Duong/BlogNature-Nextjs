import { iPost } from "@/types/post.type";
import Card from "../../card/Card";
import CardLarge from "../../cardLLarge/CardLarge";
import CardSmall from "../../cardsmall/CardSmall";
import { getPosts } from "@/app/getApi/posts";

const LastStory = async () => {
  const data = await getPosts();
  const itemCardLagre = data[5];
  return (
    <div className="wrapper">
      <div className="text-center justify-center">
        <div className="text-6xl font-bold mb-5">LATEST STORIES</div>
        <div className="px-2 md:text-xl ">
          Subscribe for full access to read stories from National Geographic.
        </div>
        <div className="bg-yellow-500 w-16 h-1 my-5 mx-auto"></div>
      </div>
      <div className="md:grid md:grid-cols-12 gap-10">
        <div className="px-3 md:col-span-4">
          <CardSmall data={data} title="TODAY'S PICKS" />
        </div>
        <div className="col-span-8 mx-auto">
          <CardLarge item={itemCardLagre} />
          <div className="md:flex items-center justify-between gap-5 mt-5">
            {data?.slice(0, 2).map((item: iPost) => (
              <div className="items-center" key={item._id}>
                <Card item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default LastStory;
