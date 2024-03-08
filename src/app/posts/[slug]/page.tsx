import { getAllPosts } from "@/app/getApi/posts";
import Comment from "@/components/comment/page";
import { formatDate } from "@/utils/utilis";
import Image from "next/image";

const Post = async ({ params }: any) => {
  const { slug } = params;
  const data = await getAllPosts(slug);
  if (!data) return null;
  return (
    <div className="">
      <div className="flex">
        <Image
          src={data.img}
          alt=""
          width={1000}
          height={200}
          className="h-[600px] w-[800px] object-cover"
        />
        <div className="my-auto mx-5">
          <span className="p-2 border-2 border-black hover:text-white hover:bg-black">
            {data.cat.title}
          </span>
          <h1 className="text-4xl font-bold my-3">{data.title}</h1>
          <div>
            <div> By {data.user.name}</div>
            <div>{formatDate(data.createdAt)}</div>
          </div>
        </div>
      </div>

      <div className="gap-10 mt-5 lg:flex mx-[350px]">
        <div
          className="mt-10 text-xl"
          dangerouslySetInnerHTML={{ __html: data?.desc }}
        ></div>
      </div>
      <div className="mt-5 mx-[350px]">
        <Comment postSlug={data.slug} />
      </div>
    </div>
  );
};
export default Post;
