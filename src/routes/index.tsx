import Layout from "@/components/layouts/main";
import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <Layout>
      <div className="flex flex-col gap-20 px-64">
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
        <section className="grid min-h-64 w-full grid-cols-2 gap-10 rounded-[50px] bg-gray-200 px-10 py-16 2xl:container md:px-36 lg:px-32 lg:py-24">
          <div>
            <p className="text-xl">
              <span className="font-bold">Chapter 1</span> Numbers & Operations
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
        </section>
      </div>
    </Layout>
  );
}
