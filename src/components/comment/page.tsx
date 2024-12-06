"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { iComment } from "@/types/comment.type";
import { formatDate } from "@/utils/utilis";

export default function Comment({ postSlug }: any) {
  const [data, setData] = useState<iComment[]>();
  const [desc, setDesc] = useState("");
  const { status } = useSession();

  const getData = async ({ postSlug }: any) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/comments?postSlug=${postSlug}`
      );
      return setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:3000/api/comments", {
        desc,
        postSlug,
      });
      setDesc("");
      getData({ postSlug });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData({ postSlug });
  }, [postSlug]);
  if (!data) return null;
  return (
    <div className="my-5 wrapper">
      <h1 className="mb-4 text-2xl font-bold">Comment</h1>
      {status === "authenticated" ? (
        <div className="flex gap-3">
          <textarea
            placeholder="write a comment..."
            className="w-full px-5 py-2 border rounded-xl"
            onChange={(e) => setDesc(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="px-4 text-white bg-blue-500 border rounded-xl"
          >
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      {data?.map((item: iComment) => (
        <div className="my-4" key={item._id}>
          <div className="flex gap-3">
            <Image
              src={item.user.image}
              alt=""
              className="rounded-full"
              width={50}
              height={50}
            />
            <div>
              <div>{item.user.name}</div>
              <div>{formatDate(item.createdAt)}</div>
            </div>
          </div>
          <div className="p-4 ml-10">{item.desc}</div>
        </div>
      ))}
    </div>
  );
}
