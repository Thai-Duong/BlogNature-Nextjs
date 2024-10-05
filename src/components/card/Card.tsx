"use client";
import { iPost } from "@/types/post.type";
import Image from "next/image";
import Link from "next/link";

export default function Card({ item }: { item: iPost }) {
  return (
    <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border-gray-400 h-[380px] w-full mt-5">
      <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
        <Image
          src={item.img}
          alt="photo"
          width={600}
          height={10}
          className="h-[200px] object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <div className="py-3 px-5">
        <div className="uppercase">{item.catSlug}</div>
        <div className="min-h-[3rem] text-lg line-clamp-3 font-bold py-3">
          {item.title}
        </div>
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
