"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { iPost } from "@/types/post.type";
import Image from "next/image";
import { iCategories } from "@/types/categories.type";
import Link from "next/link";
export default function Silde({ data }: { data: iCategories }) {
  console.log("data", data);
  return (
    <div className="my-5" key={data.id}>
      <Swiper
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className=""
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          865: {
            slidesPerView: 4,
          },
          1000: {
            slidesPerView: 5,
          },
        }}
      >
        {data.Posts.map((item: iPost) => (
          <SwiperSlide key={item._id}>
            <Link href={`/posts/${item.slug}`}>
              <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                <Image
                  src={item.img}
                  alt="photo"
                  width={1000}
                  height={1000}
                  className="h-[260px] object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110"
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
