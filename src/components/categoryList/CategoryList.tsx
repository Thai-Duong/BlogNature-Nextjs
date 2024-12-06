import { iCategories } from "@/types/categories.type";
import {
  NavigationMenu,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import { navigationMenuTriggerStyle } from "../ui/navigation-menu";
import axios from "axios";
import { getCategories } from "@/app/getApi/categories";

const CategoryList = async () => {
  const data = await getCategories();
  if (!data) return null;
  return (
    <NavigationMenu className="flex flex-col">
      {data?.map((item: iCategories) => (
        <NavigationMenuLink
          key={item.id}
          href={`/categories/${item.slug}`}
          className={navigationMenuTriggerStyle()}
        >
          {item.title}
        </NavigationMenuLink>
      ))}
    </NavigationMenu>
  );
};
export default CategoryList;
