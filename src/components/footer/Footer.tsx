import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="grid gap-8 p-5 mt-5 xl:grid-cols-2 md:wrapper">
      <div>
        <Image
          src="/Logo.png"
          alt=""
          width={150}
          height={50}
          className="mb-5"
        />
        <p className="mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias magni
          saepe vero repellendus minus aliquam cumque laborum, delectus
          voluptatum ipsa voluptas ad veniam maxime, a magnam dolores vel! Illo,
          adipisci.
        </p>
        <p>By DuongThai @2023</p>
      </div>
      <div className="grid grid-cols-3 text-center">
        <div className="flex flex-col gap-3">
          <div className="font-bold">Links</div>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Blog</Link>
        </div>
        <div className="flex flex-col gap-3">
          <div className="font-bold">Category</div>
          <Link href="/">Asian</Link>
          <Link href="/">Euro</Link>
          <Link href="/">Africa</Link>
          <Link href="/">Amerca</Link>
        </div>
        <div className="flex flex-col gap-3">
          <div className="font-bold">Social</div>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Twiter</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
}
