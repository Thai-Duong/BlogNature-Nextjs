"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useRouter } from "next/navigation";
import { app } from "@/utils/firebbase";
import { type } from "os";
import axios from "axios";
const storage = getStorage(app);

export default function WritePage() {
  const router = useRouter();

  const [value, setValue] = useState("");
  const [file, setFile] = useState<File | null>();
  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  useEffect(() => {
    if (!file) return;
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          switch (error.code) {
            case "storage/unauthorized":
              break;
            case "storage/canceled":
              break;
            case "storage/unknown":
              break;
          }
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };
    file && upload();
  }, [file]);
  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await axios.post("/api/posts", {
      title,
      desc: value,
      img: media,
      slug: slugify(title),
      catSlug: catSlug || "animals",
    });
    if (res.status === 200) {
      router.push(`/posts/${res.data.slug}`);
    }
  };
  return (
    <div className="py-20">
      <input
        type="text"
        placeholder="Main Title"
        className="w-full py-10 text-3xl focus:outline-none"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0])}
        className="border"
      />
      <select
        onChange={(e) => setCatSlug(e.target.value)}
        className="py-1 border mx-5"
      >
        <option value="animals">Animals</option>
        <option value="environment">Environment</option>
        <option value="history-culture">History and Culture</option>
        <option value="science">Science</option>
        <option value="travel">Travel</option>
      </select>
      <ReactQuill
        theme="bubble"
        value={value}
        onChange={setValue}
        placeholder="Tell your story"
        className="m-5 text-lg border-none"
      />
      <button
        onClick={handleSubmit}
        className="px-4 py-2 font-bold text-white bg-green-600 border rounded-lg"
      >
        Pulish
      </button>
    </div>
  );
}
