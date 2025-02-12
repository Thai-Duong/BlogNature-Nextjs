"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { iComment } from "@/types/comment.type";
import { formatDate } from "@/utils/utilis";
import { Skeleton } from "@/components/ui/skeleton";

export default function Comment({ postSlug }: { postSlug: string }) {
  const [data, setData] = useState<iComment[] | null>(null);
  const [desc, setDesc] = useState("");
  const { status } = useSession();
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:3000/api/comments?postSlug=${postSlug}`
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:3000/api/comments", {
        desc,
        postSlug,
      });
      setDesc("");
      getData(); // Load lại comment sau khi gửi
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, [postSlug]);

  return (
    <div className="my-5 wrapper">
      <h1 className="mb-4 text-2xl font-bold">Comments</h1>

      {/* Hiển thị form nhập nếu user đã login */}
      {status === "authenticated" ? (
        <div className="flex gap-3">
          <textarea
            placeholder="Write a comment..."
            className="w-full px-5 py-2 border rounded-xl"
            value={desc}
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

      {/* Hiển thị Skeleton nếu đang tải */}
      {loading && (
        <div className="mt-4 space-y-4">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex gap-3">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-32 rounded-md" />
                <Skeleton className="h-3 w-24 rounded-md" />
                <Skeleton className="h-5 w-48 rounded-md mt-2" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Hiển thị comment nếu có dữ liệu */}
      {!loading && data?.length === 0 && (
        <p className="mt-4 text-gray-500">No comments yet.</p>
      )}

      {!loading &&
        data?.map((item: iComment) => (
          <div className="my-4" key={item._id}>
            <div className="flex gap-3">
              <Image
                src={item.user.image}
                alt="User Avatar"
                className="rounded-full"
                width={50}
                height={50}
              />
              <div>
                <div className="font-bold">{item.user.name}</div>
                <div className="text-gray-500 text-sm">
                  {formatDate(item.createdAt)}
                </div>
              </div>
            </div>
            <div className="p-4 ml-10 bg-gray-100 rounded-lg">{item.desc}</div>
          </div>
        ))}
    </div>
  );
}
