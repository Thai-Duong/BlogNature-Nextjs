import Link from "next/link";
import React from "react";
import AuthList from "../authlist/AuthList";

export default function Navbar() {
  return (
    <div className="flex justify-between py-2 px-2 bg-white md:text-2xl text-sm">
      <Link href="/" className=" font-bold">
        National Geographic Blog
      </Link>
      <div className="flex gap-5 text-center">
        <AuthList />
      </div>
    </div>
  );
}
