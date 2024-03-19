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
              <Image
                src={item.img}
                height={1000}
                width={1000}
                alt=""
                className="h-[260px] object-cover"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
