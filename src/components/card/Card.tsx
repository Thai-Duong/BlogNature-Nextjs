"use client";
import { iPost } from "@/types/post.type";
import Image from "next/image";
import Link from "next/link";

export default function Card({ item }: { item: iPost }) {
  return (
    <div className="bg-white shadow-lg border border-gray-200 h-[420px] w-[320px] mt-5 flex flex-col">
      <div className="relative overflow-hidden">
        <Image
          src={item.img}
          alt={item.title}
          width={600}
          height={200}
          className="h-[200px] w-full object-cover transition duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <div className="py-4 px-5 flex flex-col flex-grow">
        <div className="text-sm uppercase text-gray-500">{item.catSlug}</div>
        <h3 className="min-h-[5rem] text-xl font-bold py-4 line-clamp-3 flex-grow">
          {item.title}
        </h3>
        <div className="flex items-center mt-auto">
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
          <Link href={`/posts/${item.slug}`} className="ml-2 font-medium">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
