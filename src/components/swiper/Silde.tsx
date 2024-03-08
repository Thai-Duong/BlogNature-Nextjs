"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { iPost } from "@/types/post.type";
import Image from "next/image";
import { iCategories } from "@/types/categories.type";
export default function Silde({ data }: { data: iCategories }) {
  return (
    <div className="my-5">
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.Posts.map((item: iPost) => (
          <SwiperSlide key={item._id}>
            <Image
              src={item.img}
              height={1000}
              width={1000}
              alt=""
              className="h-[260px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
