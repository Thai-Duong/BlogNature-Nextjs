import { getCategories } from "@/app/getApi/categories";
import { iCategories } from "@/types/categories.type";
import {
  NavigationMenu,
  NavigationMenuItem,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import {
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

const CategoryList = async () => {
  const data = await getCategories();

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex flex-col items-start">
        {data.map((item: iCategories) => (
          <NavigationMenuItem key={item.id}>
            <Link
              href={`/categories/${item.slug}`}
              className={navigationMenuTriggerStyle()}
            >
              {item.title}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default CategoryList;
