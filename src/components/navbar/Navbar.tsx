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
    <div className="flex justify-between items-center py-2 px-4 bg-white md:text-2xl text-lg border-b-2">
      <Link href="/" className="font-bold">
        National Geographic Blog
      </Link>
      <div className="flex items-center gap-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
              <NavigationMenuContent>
                <CategoryList />
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <AuthList />
      </div>
    </div>
  );
}
