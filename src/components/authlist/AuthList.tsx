"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function AuthList() {
  const { status } = useSession();
  return (
    <div className="flex items-center gap-3 text-xl">
      {status === "unauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <div className="flex gap-3">
          <div onClick={() => signOut()}>Logout</div>
          <Link href="/write">Write</Link>
        </div>
      )}
    </div>
  );
}
