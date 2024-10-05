import { iPost } from "@/types/post.type";
import Image from "next/image";
import Link from "next/link";

const CardSmall = async ({ data, title }: { data: iPost[]; title: string }) => {
  return (
    <div>
      <div className="flex">
        <p className="bg-yellow-500 w-2 h-auto mr-3"></p>
        <div className="text-3xl font-bold">{title}</div>
      </div>
      {data.slice(0, 5).map((item: iPost) => (
        <Link
          href={`/posts/${item.slug}`}
          className="grid grid-flow-col gap-2 my-5"
          key={item._id}
        >
          <div className="w-[100px]">
            <Image
              src={item.img}
              alt="photo"
              width={100}
              height={50}
              className="h-[100px] object-cover"
            />
          </div>
          <div className="ml-2">
            <div className="text-xs uppercase hover:underline">
              {item.catSlug}
            </div>
            <div className=" my-1 text-sm font-bold hover:underline ">
              {item.title}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default CardSmall;
