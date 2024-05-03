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
import { useState, useEffect } from "react";
import axios from "axios";
import keycloak from "@/keycloakConfig";

const NavMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  /*
  useEffect(() => {
    checkAuth();
    console.log("Is it authenticated? "+ authenticated);
  }, [authenticated]);
 
  const checkAuth = async () => {
    try{
      const response = await axios.get(`http://localhost:8888/api/auth/status`);
      const data = response.data;
      console.log("Response: " + data);
      setAuthenticated(data.authenticated);
      8/api/auth/status`);
      const data = response.data;
      console.log("Response: " + data);
      setAuthenticated(data.authenticated);
      
    }
    catch(error){
      console.error('Error fetching authentication status:', error);
    }
  };

    try{
      if (response){
        setAuthenticated(false)
      }
    } catch(error){
      console.error('Error logging out:', error)
    }
  }; */

  return (
    <>
      <div className="fixed top-0 z-20 hidden h-16 w-full grid-cols-2 bg-white shadow-md shadow-white md:grid lg:grid-cols-3">
        <div id="logo" className="relative h-16">
          <Link to="/">
            <img
              src="/motswanamind-logo.png"
              className="object-fit absolute left-5  h-auto w-32 pl-3"
            />
          </Link>
        </div>
        <div id="menu" className="grid w-full place-items-center pt-2">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-3 text-5xl font-bold">
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <p>Home</p>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/learn">
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <p>Learn</p>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/events">
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <p>Events</p>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/student_dashboard">
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <p>
                    Dashboard
                    </p>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/" className="text-black">
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <p>Resources</p>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div id="user" className="flex justify-end pt-4 lg:pr-20">
          <div className="hidden gap-3 font-della lg:flex">
            {authenticated ? (
              <>
                <Link to="/learn">
                  <Button className="w-fit align-middle">Logout</Button>
                </Link>
              </>
            ) : (
              <Link to="/login">
                <Button className="w-fit align-middle">Login</Button>
              </Link>
            )}
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
              <Link to="/learn">
                <Button className="flex w-full justify-start gap-3 bg-accent text-base">
                  <BookText />
                  Learn
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/resources">
                <Button className="flex w-full justify-start gap-3 bg-accent text-base">
                  <Glasses />
                  Resources
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/events">
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
              <Link to="/login">
                <div className="grid h-full place-items-center font-semibold text-white">
                  Login / Sign up
                </div>
              </Link>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
