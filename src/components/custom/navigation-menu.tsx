import { Link } from "@tanstack/react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import {
  BookText,
  CalendarDays,
  Glasses,
  Home,
  Menu,
  UserCircle,
  X,
} from "lucide-react";
import { useState } from "react";

const NavMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed top-0 grid h-14 w-full grid-cols-2 bg-white lg:grid-cols-3">
      <div id="logo" className="pl-5 pt-4 lg:pl-20">
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
      <div id="user" className="flex justify-end pt-2 lg:pr-20">
        <div className="hidden gap-3 font-della lg:flex">
          <Button className="w-fit align-middle">Login</Button>
          <Button variant={"outline"}>Signup</Button>
        </div>
        <Button
          size={"icon"}
          variant={"ghost"}
          className="rounded-full bg-white pr-5 focus:bg-white lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu />
        </Button>
      </div>
      <div
        className="absolute h-screen w-screen bg-accent px-5 pt-20 transition-all lg:hidden"
        style={{
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <Button
          size={"icon"}
          variant={"ghost"}
          className="absolute right-5 top-5 rounded-full bg-accent focus:bg-accent lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <X color="#fff" />
        </Button>
        <ul className="text-white">
          <li>
            <Link to="/">
              <Button className="flex w-full justify-start gap-3 bg-accent text-base">
                <Home className="h-5 w-5" />
                Home
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button className="flex w-full justify-start gap-3 bg-accent text-base">
                <BookText />
                Learn
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button className="flex w-full justify-start gap-3 bg-accent text-base">
                <Glasses />
                Resources
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button className="flex w-full justify-start gap-3 bg-accent text-base">
                <CalendarDays />
                Events
              </Button>
            </Link>
          </li>
        </ul>
        <Link to="/">
          <div className="absolute bottom-5 flex w-[90%] gap-5 rounded-lg border-2 border-white p-5 sm:w-[94%] md:w-[96%]">
            <div>
              <UserCircle color="#fff" />
            </div>
            <div className="grid h-full place-items-center font-semibold text-white">
              Login / Sign up
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavMenu;
