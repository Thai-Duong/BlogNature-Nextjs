import Comment from "@/components/comment/page";
import { formatDate } from "@/utils/utilis";
import Image from "next/image";

const getData = async (slug: string) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};
const Post = async ({ params }: any) => {
  const { slug } = params;
  const data = await getData(slug);
  if (!data) return null;
  return (
    <div className="mx-5">
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="flex flex-col justify-between">
          <h1 className="text-4xl font-bold">{data.title}</h1>
          <div className="flex gap-3 my-3">
            <Image
              src={data.user.image}
              alt=""
              height={60}
              width={50}
              className=" rounded-full"
            />
            <div>
              <div>{data.user.name}</div>
              <div>{formatDate(data.createdAt)}</div>
            </div>
          </div>
        </div>
        <Image
          src={data.img}
          alt=""
          width={1000}
          height={200}
          className="rounded-lg"
        />
      </div>
      <div className="gap-10 mt-5 lg:flex">
        <div
          className="mt-10"
          dangerouslySetInnerHTML={{ __html: data?.desc }}
        ></div>
      </div>
      <div className="mt-5">
        <Comment postSlug={data.slug} />
      </div>
    </div>
  );
};
export default Post;
