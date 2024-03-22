import { Link } from "@tanstack/react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";

const NavMenu: React.FC = () => {
  return (
    <div className="fixed top-0 grid h-14 w-full grid-cols-3 bg-white">
      <div id="logo" className="pl-20 pt-4">
        <p className="font-playfair">Motswana Mind</p>
      </div>
      <div id="menu" className="grid w-full place-items-center">
        <NavigationMenu>
          <NavigationMenuList className="font-della flex gap-3">
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Learn
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Resources
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Events
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div id="user" className="flex justify-end pr-20 pt-2">
        <div className="font-della flex gap-3">
          <Button className="w-fit align-middle">Login</Button>
          <Button variant={"outline"}>Signup</Button>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;