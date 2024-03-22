import { Link } from "@tanstack/react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const NavMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed top-0 grid h-14 w-full grid-cols-3 bg-white">
      <div id="logo" className="pl-20 pt-4">
        <p className="font-playfair">Motswana Mind</p>
      </div>
      <div id="menu" className="hidden w-full place-items-center lg:grid">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-3 font-della">
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
        <div className="hidden gap-3 font-della lg:flex">
          <Button className="w-fit align-middle">Login</Button>
          <Button variant={"outline"}>Signup</Button>
        </div>
        <Button
          size={"icon"}
          variant={"ghost"}
          className="rounded-full bg-white focus:bg-white lg:hidden"
        >
          <Menu />
        </Button>
      </div>
      <div className="absolute h-screen w-screen bg-accent">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Learn</Link>
          </li>
          <li>
            <Link to="/">Resources</Link>
          </li>
          <li>
            <Link to="/">Events</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;
