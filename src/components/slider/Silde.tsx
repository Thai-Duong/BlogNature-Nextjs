"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { iCategories } from "@/types/categories.type";
import { iPost } from "@/types/post.type";
import Image from "next/image";
import Link from "next/link";

export default function Silde({ data }: { data: iCategories }) {
  return (
    <Carousel className="w-full my-5">
      <CarouselContent className="-ml-1">
        {data.Posts.map((item: iPost) => (
          <CarouselItem
            key={item._id}
            className="pl-1 md:basis-1/2 lg:basis-1/5"
          >
            <div className="p-1">
              <Link href={`/posts/${item.slug}`}>
                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                  <Image
                    src={item.img}
                    alt="photo"
                    width={200}
                    height={1000}
                    className="h-[260px] w-[170px] object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110"
                  />
                </div>
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
