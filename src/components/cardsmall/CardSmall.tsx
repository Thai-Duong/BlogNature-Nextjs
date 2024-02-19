import { getData } from "@/app/api/posts/route";
import { iPost } from "@/types/post.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardSmall = async ({ data }: { data: iPost[] }) => {
  return (
    <div>
      <div className="flex">
        <div className="bg-yellow-500 w-2 h-8 mr-3"></div>
        <div className="text-3xl font-bold">TODAY&apos;S PICKS</div>
      </div>
      {data.slice(0, 6).map((item: iPost) => (
        <Link href="/" className="grid grid-flow-col gap-2 my-3" key={item._id}>
          <Image
            src={item.img}
            alt="photo"
            width={100}
            height={50}
            className="h-[100px] object-cover"
          />
          <div className="ml-2">
            <span className="text-sm font-bold uppercase">{item.catSlug}</span>
            <h4 className="my-1 text-sm font-bold">{item.title}</h4>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default CardSmall;
