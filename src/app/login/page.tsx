"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { status } = useSession();
  const router = useRouter();
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "authenticated") {
    router.push("/");
  }
  return (
    <div className="flex ">
      <div className="p-5 mx-auto my-20 border">
        <div
          className="p-5 text-center text-white bg-red-500"
          onClick={() => signIn("google")}
        >
          Sign in with Goggle
        </div>
      </div>
    </div>
  );
}
