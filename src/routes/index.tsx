import Layout from "@/components/layouts/main";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";
import { Check, X } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <Layout>
      <div>
        <div className="px-0 xl:px-64">
          <section
            id="hero"
            className="h-[400px] rounded-b-[50px] bg-accent 2xl:h-[475px] 2xl:rounded-b-[75px]"
          >
            <div className="flex flex-col gap-5 px-10 py-16 2xl:container md:px-36 lg:px-32 lg:py-24 ">
              <h1 className="font-playfair text-4xl text-white 2xl:text-7xl">
                Making the Motswana Dream Possible through Education
              </h1>
              <p className="text-white">
                Academic success is a quiz away Motswana child
              </p>
              <div className="flex gap-5">
                <Button className="">Sign up</Button>
                <Button variant={"secondary"} className="text-accent">
                  Learn more
                </Button>
              </div>
            </div>
          </section>
        </div>
        <section className="p-5 xl:px-64">
          <div className="grid min-h-64 w-full grid-cols-1 gap-10 rounded-[50px] bg-gray-200 px-10 py-16 2xl:container md:px-36 lg:grid-cols-2 lg:px-32 lg:py-24">
            <div>
              <p className="text-xl">
                <span className="font-bold">Chapter 1</span> Numbers &
                Operations
              </p>
              <ul className="mt-5 flex flex-col gap-2 pl-5 font-medium">
                <li>1.1 Whole Numbers</li>
                <li>1.2 Directed Numbers</li>
                <li>1.3 Number Operations</li>
                <li>1.4 Fractions</li>
                <li>1.5 Decimals</li>
                <li>1.6 Percentages</li>
                <li>1.7 Rates and Ratios</li>
                <li>1.8 Money</li>
              </ul>
            </div>
            <div className="">
              <p className="text-xl">
                <span className="font-bold">Chapter 2</span> Geometry
              </p>
              <ul className="mt-5 flex flex-col gap-2 pl-5 font-medium">
                <li>
                  2.1{" "}
                  <div>
                    <p className="text-xl">Quick Links</p>
                    <div className="mt-5 flex flex-col gap-3">
                      <p>Home</p>
                      <p>Learn</p>
                      <p>Resources</p>
                      <p>Events</p>
                    </div>
                  </div>
                  Angles
                </li>
                <li>2.2 Polygons</li>
                <li>2.3 Transformations</li>
                <li>2.4 Coordinate Geometry</li>
              </ul>
            </div>
            <div>
              <p className="text-xl">
                <span className="font-bold">Chapter 3</span> Measures
              </p>
              <ul className="mt-5 flex flex-col gap-2 pl-5 font-medium">
                <li>3.1 Length</li>
                <li>3.2 Area</li>
                <li>3.3 Mass</li>
                <li>3.4 Volume</li>
                <li>3.5 Time</li>
              </ul>
            </div>
            <div className="">
              <p className="text-xl">
                <span className="font-bold">Chapter 4</span> Statistics
              </p>
              <ul className="mt-5 flex flex-col gap-2 pl-5 font-medium">
                <li>4.1 Graph</li>
                <li>4.2 Measures of central tendency</li>
                <li>4.3 Data collection and manipulation</li>
                <li>4.4 Probability</li>
              </ul>
            </div>
            <div>
              <p className="text-xl">
                <span className="font-bold">Chapter 5</span> Algebra
              </p>
              <ul className="mt-5 flex flex-col gap-2 pl-5 font-medium">
                <li>5.1 Algebra</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="w-full bg-accent">
          <div className="px-8 py-10 sm:px-16 xl:px-64">
            <div className="grid grid-rows-[auto_auto_auto] gap-y-5 sm:grid-rows-[auto_auto] sm:gap-x-5 md:grid-cols-3 md:grid-rows-1">
              <Card className="col-span-2 row-start-3 rounded-[30px] sm:col-span-1 sm:row-start-2 md:row-start-1">
                <CardHeader>
                  <div className="flex flex-col gap-3">
                    <p className="text-center text-gray-600">Premium</p>
                    <p className="text-center text-3xl">P50/pm</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-2">
                    <p className="flex gap-3">
                      <Check /> Introductory content
                    </p>
                    <p className="flex gap-3">
                      <Check /> Full access to courses
                    </p>
                    <p className="flex gap-3">
                      <Check /> Past papers
                    </p>
                    <p className="flex gap-3">
                      <Check /> Workshops and events
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full rounded-[15px] bg-[#1E88E5] text-base font-semibold">
                    Sign up
                  </Button>
                </CardFooter>
              </Card>
              <Card className="col-span-2 row-start-2 rounded-[30px] sm:col-span-1 md:row-start-1">
                <CardHeader>
                  <div className="flex flex-col gap-3">
                    <p className="text-center text-gray-600">Basic</p>
                    <p className="text-center text-3xl">Free</p>
                  </div>
                </CardHeader>
                <CardContent className="px-10">
                  <div className="flex flex-col gap-2">
                    <p className="flex gap-3">
                      <Check /> Introductory content
                    </p>
                    <p className="flex gap-3">
                      <X /> Full access to courses
                    </p>
                    <p className="flex gap-3">
                      <Check /> Past papers
                    </p>
                    <p className="flex gap-3">
                      <X /> Workshops and events
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full rounded-[15px] bg-[#1E88E5] text-base font-semibold">
                    Sign up
                  </Button>
                </CardFooter>
              </Card>
              <div className="col-span-2 row-start-1 text-center font-playfair text-4xl font-semibold text-white md:text-end">
                Get full access with our affordable payment plans
              </div>
            </div>
          </div>
        </section>
        <section className="w-fit">
          <div className="flex flex-col-reverse md:grid md:h-[600px] md:grid-cols-2">
            <div className="">
              <div className="grid h-full place-content-center gap-5 bg-[#BDE283] py-10">
                <p className="font-playfair text-4xl font-semibold">
                  Upcomming Events!!!
                </p>
                <Button className="w-fit font-della">View all</Button>
              </div>
            </div>
            <div className="grid lg:grid-rows-2">
              <div className="relative hidden overflow-hidden lg:block">
                <img
                  src="/pattern.jpeg"
                  className="absolute -z-10 object-fill object-center"
                />
              </div>
              <div className="grid place-content-center bg-[url(/pattern.jpeg)]  bg-cover bg-center lg:bg-none">
                <p className="px-10 py-10 font-della text-lg  lg:text-xl">
                  Motswana child hosts educational events that you would not
                  want to miss out. Skip the FOMO and join us at one these
                  exciting events.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
