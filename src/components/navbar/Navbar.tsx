import Link from "next/link";
import React from "react";
import AuthList from "../authlist/AuthList";
import ThemeToggle from "../themetoggle/ThemeToggle";

export default function Navbar() {
  return (
    <div className="flex justify-between py-5 ">
      <Link href="/" className="text-3xl font-bold">
        National Geographic Blog
      </Link>
      <div className="flex gap-5 text-center">
        <AuthList />
        <ThemeToggle />
      </div>
    </div>
  );
}
