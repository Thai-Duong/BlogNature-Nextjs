import prisma from "@/utils/connect";
import axios from "axios";
import { NextResponse } from "next/server";

export const GET = async (req: any, { params }: any) => {
  const { slug } = params;
  try {
    const posts = await prisma.post.update({
      where: { slug },
      data: { views: { increment: 1 } },
      include: { user: true, cat: true },
    });

    return new NextResponse(JSON.stringify(posts));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" })
    );
  }
};
export const getData = async (slug: string) => {
  try {
    const res = await axios.get(`http://localhost:3000/api/posts/${slug}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
