import { iPost } from "@/types/post.type";
import Card from "../../card/Card";
import CardLarge from "../../cardLLarge/CardLarge";
import CardSmall from "../../cardsmall/CardSmall";
import axios from "axios";
import { getPosts } from "@/app/getApi/posts";

const LastStory = async () => {
  const data = await getPosts();
  const itemCardLagre = data[1];
  return (
    <div className="wrapper">
      <div className="text-center justify-center text-white mb-16">
        <div className="text-6xl font-bold mb-5">LATEST STORIES</div>
        <div className="px-2 md:text-xl ">
          Subscribe for full access to read stories from National Geographic.
        </div>
        <div className="bg-yellow-500 w-16 h-1 my-5 mx-auto"></div>
      </div>
      <div className="md:grid md:grid-cols-12 gap-5">
        <div className="px-3 md:col-span-4">
          <CardSmall data={data} title="TODAY'S PICKS" />
          <button className="relative  text-white transition-all duration-150 ease-in-out group">
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#fbcc08] group-hover:h-full"></span>
            <span className="relative  w-full text-left transition-colors duration-200 ease-in-out group-hover:text-black ">
              SEE MORE
            </span>
          </button>
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
