"use client";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import { useContext } from "react";

export default function ThemeToggle() {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <div
      onClick={toggle}
      className="relative flex h-8 gap-2 p-1 cursor-pointer rounded-2xl"
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0f172a" }
      }
    >
      <Image src="/sun.png" height={22} width={22} alt="sun" />
      <div
        className="absolute w-6 h-6 bg-white rounded-full"
        style={
          theme === "dark"
            ? { left: 2, background: "#0f172a" }
            : { right: 2, background: "white" }
        }
      ></div>
      <Image
        src="/moon.jpg"
        height={22}
        width={22}
        alt="moon"
        className="rounded-xl"
      />
    </div>
  );
}
