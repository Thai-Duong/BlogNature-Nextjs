import Link from "next/link";
import AuthList from "../authlist/AuthList";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import CategoryList from "../categoryList/CategoryList";
export default function Navbar() {
  return (
    <div className="flex justify-between py-2 px-2 bg-white md:text-2xl text-lg">
      <Link href="/" className=" font-bold">
        National Geographic Blog
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
            <NavigationMenuContent>
              <CategoryList />
            </NavigationMenuContent>
            <AuthList />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
