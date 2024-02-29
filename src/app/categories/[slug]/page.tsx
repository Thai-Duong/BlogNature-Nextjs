import Card from "@/components/card/Card";
import CardLarge from "@/components/cardLLarge/CardLarge";
import { iCategories } from "@/types/categories.type";
import { iPost } from "@/types/post.type";
import Image from "next/image";
import React from "react";

const getData = async (slug: string) => {
  const res = await fetch(`http://localhost:3000/api/categories/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};
const Categories = async ({ params }: any) => {
  const { slug } = params;
  const category = await getData(slug);
  const data = await category[0];
  return (
    <div className="grid grid-cols-3 gap-8 py-5">
      <div className="col-span-2">
        <CardLarge item={data.Posts[0]} />
      </div>
      {data.Posts.map((item: iPost) => (
        <div key={item._id}>
          <Card item={item} />
        </div>
      ))}
    </div>
  );
};
export default Categories;
