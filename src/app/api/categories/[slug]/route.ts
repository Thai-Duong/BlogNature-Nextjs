import prisma from "@/utils/connect";
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
