"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

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
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            onClick={() => signOut()}
          >
            Sign Out
          </NavigationMenuLink>

          <Link href="/write" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Write
            </NavigationMenuLink>
          </Link>
        </>
      )}
    </>
  );
}
