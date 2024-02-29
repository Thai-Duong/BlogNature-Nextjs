"use client";
import { iPost } from "@/types/post.type";
import Image from "next/image";
import Link from "next/link";

export default function Card({ item }: { item: iPost }) {
  return (
    <div className="border h-[380px] ">
      <Image
        src={item.img}
        alt="photo"
        width={1000}
        height={200}
        className="h-[180px] object-cover"
      />
      <div className="p-3 ">
        <div className="uppercase">{item.catSlug}</div>
        <div className="text-lg font-bold">{item.title}</div>
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <Link href={`/posts/${item.slug}`} className="ml-2">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
