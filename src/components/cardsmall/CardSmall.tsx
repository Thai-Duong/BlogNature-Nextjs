import { iPost } from "@/types/post.type";
import Image from "next/image";
import Link from "next/link";

const CardSmall = async ({ data, title }: { data: iPost[]; title: string }) => {
  return (
    <div className="text-white">
      <div className="flex pb-10">
        <p className="bg-yellow-500 w-2 h-auto mr-3"></p>
        <div className="text-3xl font-semibold">{title}</div>
      </div>
      {data.slice(0, 6).map((item: iPost) => (
        <Link
          href={`/posts/${item.slug}`}
          className="grid grid-flow-col gap-2 pb-8"
          key={item._id}
        >
          <div className="w-[100px]">
            <Image
              src={item.img}
              alt="photo"
              width={90}
              height={50}
              className="h-[100px] object-cover"
            />
          </div>
          <div className="ml-2">
            <div className="text-sm uppercase font-semibold hover:underline">
              {item.catSlug}
            </div>
            <div className="line-clamp-3 my-1 text-[16px] font-bold hover:underline ">
              {item.title}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default CardSmall;
