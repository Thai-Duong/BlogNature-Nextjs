import { getData } from "@/app/api/posts/route";
import { iPost } from "@/types/post.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardLarge = async ({ item }: { item: iPost }) => {
  return (
    <Link className="relative" href={`/posts/${item.slug}`}>
      <Image
        src={item.img}
        alt="photo"
        width={1000}
        height={400}
        className="h-[300px] object-cover opacity-70"
      />
      <div className="absolute bottom-5 left-5 text-white">
        <div className="text-lg uppercase font-mono">{item.catSlug}</div>
        <div className="uppercase text-2xl font-bold">{item.title}</div>
      </div>
    </Link>
  );
};
export default CardLarge;
