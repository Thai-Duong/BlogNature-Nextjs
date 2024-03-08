import prisma from "@/utils/connect";
import axios from "axios";
import { NextResponse } from "next/server";

export const GET = async (req: any, { params }: any) => {
  const { slug } = params;

  try {
    const categories = await prisma.category.findMany({
      where: { slug },
      include: { Posts: true },
    });
    return new NextResponse(JSON.stringify(categories));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" })
    );
  }
};
export const getData = async (slug: string) => {
  try {
    const res = await axios.get(`http://localhost:3000/api/categories/${slug}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
