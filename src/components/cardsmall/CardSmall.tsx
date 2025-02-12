import { NavigationMenu } from "@/components/ui/navigation-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { iPost } from "@/types/post.type";
import Image from "next/image";
import Link from "next/link";

const CardSmall = ({ data, title }: { data: iPost[]; title: string }) => {
  if (!data) {
    // Hiển thị Skeleton nếu chưa có dữ liệu
    return (
      <NavigationMenu className="flex flex-col space-y-3 mb-2">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="flex items-center space-x-4">
            {/* Skeleton cho hình ảnh */}
            <Skeleton className="h-32 w-32" />
            <div className="flex flex-col space-y-2">
              {/* Skeleton cho tiêu đề */}
              <Skeleton className="h-4 w-32 rounded-md" />
              <Skeleton className="h-3 w-24 rounded-md" />
            </div>
          </div>
        ))}
      </NavigationMenu>
    );
  }
  return (
    <div>
      <div className="flex pb-10">
        <p className="bg-yellow-500 w-2 h-auto mr-3"></p>
        <h3 className="text-3xl font-semibold">{title}</h3>
      </div>
      {data.slice(0, 6).map((item: iPost) => (
        <Link
          href={`/posts/${item.slug}`}
          className="grid grid-flow-col gap-2 pb-8"
          passHref
          key={item._id}
        >
          <div className="w-[100px]  overflow-hidden ">
            <Image
              src={item.img}
              alt={item.title}
              width={100}
              height={90}
              className="h-[90px] w-full object-cover transition duration-300 ease-in-out hover:scale-105"
              priority
            />
          </div>
          <div className="ml-2">
            <div className="text-sm uppercase font-semibold hover:underline">
              {item.catSlug}
            </div>
            <div className="line-clamp-3 my-1 text-sm font-bold hover:underline ">
              {item.title}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default CardSmall;
