import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req: any, { params }: any) => {
  const { slug } = params;
  try {
    const posts = await prisma.post.update({
      where: { slug },
      data: { views: { increment: 1 } },
      include: { user: true },
    });

    return new NextResponse(JSON.stringify(posts));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" })
    );
  }
};
