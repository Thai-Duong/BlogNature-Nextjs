import { iPost } from "@/types/post.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardLarge = async ({ item }: { item: iPost }) => {
  return (
    <Link
      className="relative max-w-2xl overflow-hidden bg-cover bg-no-repeat"
      href={`/posts/${item.slug}`}
    >
      <Image
        src={item.img}
        alt="photo"
        width={660}
        height={400}
        className="h-[380px] object-cover max-w-2xl opacity-70 transition duration-300 ease-in-out hover:scale-110"
      />
      <div className="absolute bottom-5 left-5 text-white">
        <div className="text-xl uppercase font-mono">{item.catSlug}</div>
        <div className="uppercase text-2xl font-bold">{item.title}</div>
      </div>
    </Link>
  );
};
export default CardLarge;
