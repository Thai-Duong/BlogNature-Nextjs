import prisma from "@/utils/connect";
import axios from "axios";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();
    return new NextResponse(JSON.stringify(categories));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" })
    );
  }
};
export const getData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/categories");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
