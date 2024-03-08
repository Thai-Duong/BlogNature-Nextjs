import { getAllCategories } from "@/app/getApi/categories";
import Silde from "@/components/swiper/Silde";
import Image from "next/image";

const Culture = async () => {
  const category = await getAllCategories("history-culture");
  const data = category[0];
  return (
    <div className="my-5 bg-black h-[1200px]">
      <Image
        src="/banner.webp"
        alt=""
        height={200}
        width={2000}
        className="h-[400px]"
      />
      <div className="text-white text-center wrapper ">
        <div className="text-xl mb-10">ARCTIC ASCENT</div>
        <p className="px-[150px]">
          Alex Honnold leads a six-week expedition to eastern Greenland to make
          a first ascent of one of the highest unclimbed rock faces in the
          world, but this is much more than a climbing trip. With the help of
          glaciologist Heidi Sevestre, Alex and the team investigate the impact
          of climate change on the glaciers, ice caps and fjords in this remote
          part of the Arctic.
        </p>
        <div className="w-full h-20 flex items-center justify-center cursor-pointer">
          <div className="relative  font-semibold  text-indigo-600 transition-all duration-150 ease-in-out  dark:text-white  dark:shadow-none group">
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-yellow-600 group-hover:h-full"></span>
            <span className="relative  w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white ">
              STREAM NOW
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex justify-between">
            <div className="text-xl">DISCOVER MORE HISTORY AND CULTURE</div>
            <div className="flex items-center justify-center cursor-pointer">
              <div className="relative  font-semibold  text-indigo-600 transition-all duration-150 ease-in-out  dark:text-white  dark:shadow-none group">
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-yellow-600 group-hover:h-full"></span>
                <span className="relative  w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white ">
                  SEE MORE
                </span>
              </div>
            </div>
          </div>
          <Silde data={data} />
        </div>
      </div>
    </div>
  );
};
export default Culture;
