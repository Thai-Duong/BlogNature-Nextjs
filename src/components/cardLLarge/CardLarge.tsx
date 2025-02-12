import { NavigationMenu } from "@/components/ui/navigation-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { iPost } from "@/types/post.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardLarge = ({ item }: { item: iPost }) => {
  if (!item) {
    // Hiển thị Skeleton nếu chưa có dữ liệu
    return (
      <NavigationMenu className="flex flex-col space-y-3">
        {[...Array(1)].map((_, index) => (
          <div key={index} className="items-center space-x-4 h-96 w-[660px]">
            {/* Skeleton cho hình ảnh */}
            <Skeleton className="h-80 w-full p-2" />
            <div className="flex flex-col space-y-2 mt-3">
              {/* Skeleton cho tiêu đề */}
              <Skeleton className="h-6 w-full rounded-md" />
              <Skeleton className="h-3 w-full rounded-md" />
            </div>
          </div>
        ))}
      </NavigationMenu>
    );
  }
  return (
    <Link
      href={`/posts/${item.slug}`}
      className="relative max-w-2xl overflow-hidden bg-cover bg-no-repeat rounded-lg group"
    >
      {/* Bọc ảnh trong div để tránh tràn khung */}
      <div className="overflow-hidden">
        <Image
          src={item.img}
          alt={`Image of ${item.title}`}
          width={660}
          height={400}
          className="h-[380px] object-cover w-full transition-transform duration-500 ease-in-out group-hover:scale-105"
          priority
        />
      </div>

      {/* Overlay tối giúp chữ nổi bật hơn */}
      <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition duration-300"></div>

      {/* Nội dung văn bản */}
      <div className="absolute bottom-5 left-5 text-white z-10">
        <p className="text-lg uppercase font-mono ">{item.catSlug}</p>
        <h3 className="uppercase text-2xl font-bold leading-tight  transition">
          {item.title}
        </h3>
      </div>
    </Link>
  );
};

export default CardLarge;
