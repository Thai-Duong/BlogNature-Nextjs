import { getAllCategories } from "@/app/getApi/categories";
import Silde from "@/components/slider/Silde";
import Image from "next/image";
import Link from "next/link";

const Culture = async () => {
  const category = await getAllCategories("history-culture");
  const data = category[0];
  return (
    <div className="my-5">
      <div className="relative ">
        <video
          width="320"
          height="240"
          muted
          loop
          autoPlay
          id="myVideo"
          className="w-full h-[1000px]"
        >
          <source src="videos/video2.mp4" type="video/mp4" />
        </video>
        <div className="absolute bottom-32 left-0 text-white flex flex-col justify-center items-center">
          <div className="text-xl mb-10 uppercase font-bold">OceanXplorers</div>
          <p className="md:px-[350px] text-center mb-5 text-lg">
            Alex Honnold leads a six-week expedition to eastern Greenland to
            make a first ascent of one of the highest unclimbed rock faces in
            the world, but this is much more than a climbing trip. With the help
            of glaciologist Heidi Sevestre, Alex and the team investigate the
            impact of climate change on the glaciers, ice caps and fjords in
            this remote part of the Arctic.
          </p>
          <div className="relative font-semibold  text-indigo-600 transition-all duration-150 ease-in-out  dark:text-white  dark:shadow-none group">
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-yellow-600 group-hover:h-full"></span>
            <span className="relative  w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white ">
              STREAM NOW
            </span>
          </div>
        </div>
      </div>
      <div className="text-white text-center mx-[250px]">
        <div className="flex md:justify-between">
          <div className="md:text-xl">DISCOVER MORE HISTORY AND CULTURE</div>
          <Link
            href={`/categories/history-culture`}
            className="flex items-center justify-center cursor-pointer "
          >
            <div className="relative font-semibold  text-indigo-600 transition-all duration-150 ease-in-out  dark:text-white  dark:shadow-none group">
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-yellow-600 group-hover:h-full"></span>
              <span className="relative  w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white ">
                SEE MORE
              </span>
            </div>
          </Link>
        </div>
        <Silde data={data} />
      </div>
    </div>
  );
};
export default Culture;
