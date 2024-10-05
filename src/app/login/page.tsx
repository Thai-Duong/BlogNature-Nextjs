"use client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
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
    <div className="flex flex-col text-white">
      <Image
        src="/Logo.png"
        alt="photo"
        width={200}
        height={200}
        className="mx-auto mt-10"
      />
      <div className="md:w-[600px] p-10 md:p-16 mx-auto border m-5 rounded-3xl bg-gray-700">
        <Image
          src="Disney.svg"
          height={100}
          width={100}
          alt="logo"
          className="text-white py-2"
        />
        <h1 className="text-2xl font-bold">Enter your email to continue</h1>
        <p className="text-white my-5">
          Log in to National Geographic with your MyDisney account. If you dont
          have one, you will be prompted to create one.
        </p>
        <div
          className="p-5 text-center text-black bg-yellow-500 rounded-lg font-bold"
          onClick={() => signIn("google")}
        >
          Continue with Goggle
        </div>
        <p className="my-5">Need Help ?</p>
        <div className="w-full h-[1px] bg-white"></div>
        <h4 className="font-bold my-5">
          National Geographic is part of The Walt Disney Family of Companies.
        </h4>
        <p className="text-sm">
          MyDisney lets you seamlessly log in to services and experiences across
          The Walt Disney Family of Companies, such as Disney+, ESPN, Walt
          Disney World, and more.
        </p>
      </div>
    </div>
  );
}
