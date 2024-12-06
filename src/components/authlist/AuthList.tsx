"use client";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function AuthList() {
  const { status } = useSession();
  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Sign In
          </NavigationMenuLink>
        </Link>
      ) : (
        <>
          <Link href="/write" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Write
            </NavigationMenuLink>
          </Link>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            onClick={() => signOut()}
          >
            Sign Out
          </NavigationMenuLink>
        </>
      )}
    </>
  );
}
