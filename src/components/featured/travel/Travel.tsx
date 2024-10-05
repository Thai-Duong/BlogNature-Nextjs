import { getAllCategories } from "@/app/getApi/categories";
import { getPosts } from "@/app/getApi/posts";
import Card from "@/components/card/Card";
import CardLarge from "@/components/cardLLarge/CardLarge";
import CardSmall from "@/components/cardsmall/CardSmall";
import { iPost } from "@/types/post.type";
import React from "react";

export default async function Travel() {
  const category = await getAllCategories("travel");
  const data = category[0];
  const itemCardLagre = data.Posts[2];
  return (
    <div className="wrapper">
      <div className="text-center justify-center">
        <div className="text-6xl font-bold mb-5">TRAVEL</div>
        <div className="bg-yellow-500 w-16 h-1 my-5 mx-auto"></div>
      </div>
      <div className="md:grid md:grid-cols-12 gap-16">
        <div className="col-span-8 mx-auto">
          <CardLarge item={itemCardLagre} />
          <div className="md:flex items-center justify-between gap-5 mt-5">
            {data?.Posts.slice(0, 2).map((item: iPost) => (
              <div className="items-center" key={item._id}>
                <Card item={item} />
              </div>
            ))}
          </div>
        </div>
        <div className="px-3 md:col-span-4">
          <CardSmall data={data.Posts} title="LATEST STORIES" />
        </div>
      </div>
    </div>
  );
}
