"use client";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function AuthList() {
  const { status } = useSession();

  if (status === "loading") {
    return <span className="text-gray-500 text-lg mx-2">Loading...</span>;
  }
  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={navigationMenuTriggerStyle()}>
          Sign In
        </Link>
      ) : (
        <>
          <Link href="/write" className={navigationMenuTriggerStyle()}>
            Write
          </Link>
          <button
            className={navigationMenuTriggerStyle()}
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        </>
      )}
    </>
  );
}
