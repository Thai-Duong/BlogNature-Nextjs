import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="text-white bg-black text-sm">
      <div className="grid grid-cols-4 wrapper ">
        <div className="flex flex-col gap-3">
          <div className="font-bold">LEGAL</div>
          <Link href="/">Terms of Use</Link>
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Your US State Privacy Rights</Link>
          <Link href="/">Children s Online Privacy Policy</Link>
          <Link href="/">Interest-Based Ads</Link>
          <Link href="/">About Nielsen Measurement</Link>
          <Link href="/">Do Not Sell or Share My Personal Information</Link>
        </div>
        <div className="flex flex-col gap-3">
          <div className="font-bold">OUT SITE</div>
          <Link href="/">Nat Geo Home</Link>
          <Link href="/">Attend a Live Event</Link>
          <Link href="/">Book a Trip</Link>
          <Link href="/">Buy Maps</Link>
          <Link href="/">Inspire Your Kids</Link>
          <Link href="/">Shop Nat Geo</Link>
          <Link href="/">Visit the D.C. Museum</Link>
          <Link href="/">Watch TV</Link>
          <Link href="/">Learn About Our Impact</Link>
          <Link href="/">Support Our Mission</Link>
        </div>
        <div className="flex flex-col gap-3">
          <div className="font-bold">JOIN US</div>
          <Link href="/">Terms of Use</Link>
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Your US State Privacy Rights</Link>
          <Link href="/">Children s Online Privacy Policy</Link>
          <Link href="/">Interest-Based Ads</Link>
          <Link href="/">About Nielsen Measurement</Link>
          <Link href="/">Do Not Sell or Share My Personal Information</Link>
        </div>
        <div className="flex flex-col gap-3">
          <div className="font-bold">Follow Us</div>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Twiter</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
      <div className="bg-white h-[0.5px]"></div>
      <div className="wrapper flex justify-between items-center">
        <Image
          src="/Logo.png"
          alt=""
          width={150}
          height={50}
          className=" bg-white"
        />
        <p>Copyright © 1996-2015 National Geographic Society</p>
        <p className="bg-white w-[0.8px] h-2"></p>
        <p>
          Copyright © 2015-2024 National Geographic Partners, LLC. All rights
          reserved
        </p>
      </div>
    </div>
  );
}
