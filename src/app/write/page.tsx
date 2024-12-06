"use client";
import { app } from "@/utils/firebbase";
import axios from "axios";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
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
    <div className="py-10 wrapper bg-white">
      <input
        type="text"
        placeholder="Main Title"
        className="w-full py-10 text-3xl focus:outline-none"
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="flex">
        <div className="grid w-full max-w-sm items-center gap-1.5 ">
          <Input
            id="picture"
            type="file"
            onChange={(e) => setFile(e.target.files?.[0])}
          />
        </div>
        <Select onValueChange={(value) => setCatSlug(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Animals" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="animals">Animals</SelectItem>
            <SelectItem value="environment">Environment</SelectItem>
            <SelectItem value="history-culture">History and Culture</SelectItem>
            <SelectItem value="science">Science</SelectItem>
            <SelectItem value="travel">Travel</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <ReactQuill
        theme="bubble"
        value={value}
        onChange={setValue}
        placeholder="Tell your story"
        className="m-5 text-lg border-none"
      />
      <Button
        onClick={handleSubmit}
        variant="outline"
        className="text-white bg-green-600 font-bold"
      >
        Pulish
      </Button>
    </div>
  );
}
