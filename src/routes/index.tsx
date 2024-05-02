import Layout from "@/components/layouts/main";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { TypeAnimation } from 'react-type-animation';
import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { Check, X, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const Route = createFileRoute("/")({
  component: Index,
});

export default function Index() {
  return (
    <Layout>
      <div>
        <div className="px-0">
          <section
            id="hero"
            className="h-[605px] bg-[url('/wavyy-background.png')] bg-no-repeat bg-cover 2xl:h-[475px]"
          >
            
            <div className="grid grid-cols-2 py-16 2xl:container md:px-36 md:pl-16 lg:pl-10 lg:pt-14 lg:pr-20">
              <div className="">
                <img 
                  src="/schoolboy.png"
                  className="h-[550px] w-2500px p-0"
                />
              </div>
              <div className="">
                <h1 className="font-playfair text-4xl text-black 2xl:text-7xl pt-40 pb-5">
                  Making the Motswana Dream Possible through Education
                </h1>
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Academic success is a lesson away Motswana child',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Academic success is a quiz away Motswana child',
                    1000,
                    'Academic success is a test away Motswana child',
                    1000,
                    'Join Motswana Mind and experience academic excellence today',
                    1000
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: '20px', display: 'inline-block' }}
                  repeat={Infinity}
                />
                
                <div className="flex gap-5 pt-5">
                <Link to="/signup">
                  <Button className="">Sign up</Button>
                </Link>
                <Link to="/learn">
                  <Button  className="text-white bg-accent gap-1">
                    Learn more
                  <ArrowRight />
                  </Button>
                </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="pt-0 xl:px-10">
          <div className=" min-h-64 w-full rounded-[50px] bg-[#020617] px-10 py-16 2xl:container  md:px-36 lg:px-32 lg:py-24 ">
            <div className="px-24">
              <h1
             className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl"
            >Discover what Motswana mind has for you!!!</h1>
            </div>
            <div className="flex flex-row gap-3 pt-10 justify-center">
                <Button className="rounded-full">Numbers & Operations</Button>
                <Button className="rounded-full">Geometry</Button>
                <Button className="rounded-full">Measures</Button>
              </div>
              <div className="flex flex-row gap-3 pt-1 justify-center">
                <Button className="rounded-full">Statistics</Button>
                <Button className="rounded-full">Algebra</Button>
              </div>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center pt-20">
          <img 
          src="/what-we-offer.PNG"
          className="h-[140px] w-[500px]"/>
          <span className="text-2xl mb-16">
            A world of resources catered to the Motswana child
          </span>

          <div className="flex flex-row gap-5 mx-5">
            <div className="flex gap-3 bg-[#f1f1f1] rounded-3xl p-7 ">
              <img 
                src="./online-lesson.png"
                className="size-20"
              />
              <p className="text-2xl py-5 pr-10">Lessons</p>
            </div>
            <div className="flex gap-3 bg-[#f1f1f1] rounded-3xl p-7">
              <img 
                src="./quiz.png"
                className="size-20"
              />
              <p className="text-2xl py-5 pr-10">Quizzes</p>
            </div>
            <div className="flex gap-3 bg-[#f1f1f1] rounded-3xl p-7">
              <img 
                  src="./workshop.png"
                  className="size-20"
                />
              <p className="text-2xl py-5">Educational events</p>
            </div>
            <div className="flex gap-3 bg-[#f1f1f1] rounded-3xl p-7">
              <img 
                  src="./documents.png"
                  className="size-20"
                />
              <p className="text-2xl py-5">Past papers</p>
            </div>
            <div className="flex gap-3 bg-[#f1f1f1] rounded-3xl p-7">
              <img 
                  src="./bulb.png"
                  className="size-20"
                />
              <p className="text-2xl py-5">Exam tips & Study guides</p>
            </div>
          </div>
          
        </section>

        <section className="h-[550px] bg-[url('/gradient-bg.png')] bg-no-repeat bg-cover rounded-[50px] shadow-2xl mx-28 mt-32 mb-20">
          <div className="flex flex-col justify-center items-center text-white pt-44">
          <p className="font-playfair text-5xl font-semibold">
            Upcoming Events!!!
          </p>
          <p className="px-12 py-10 mx-60 font-della text-lg text-center lg:text-xl">
            Motswana Mind hosts educational events that you would not
            want to miss out. Skip the FOMO and join us at one these
            exciting events.
          </p>
          <Button className="w-fit font-della bg-accent">View all</Button>
          </div>
        </section>

        <section className="h-[450px] bg-[#D9D9D9] mt-32">
          <div className="flex flex-col justify-center items-center py-10">
          <div className="text-center">
            <p className="mt-10 pb-7 font-playfair text-5xl font-semibold">
              Pricing
            </p>
            <p className="text-2xl pb-5">
              Get full access with our affordable payment plans
            </p>
          </div>
          
          <div className="flex flex-row gap-5 pt-10 justify-center">
              <Card className="rounded-[30px] p-5 shadow-2xl">
                <CardHeader>
                  <div className="flex flex-col gap-3">
                    <p className="text-center text-gray-600 pt-5  font-bold">Basic</p>
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
                  <Link className="w-full rounded-[15px] bg-[#1E88E5] text-center text-base font-semibold">
                    <Button className="bg-[#1E88E5] rounded-[15px] w-full">
                      Sign up
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="rounded-[30px] bg-accent p-10 shadow-2xl">
                <CardHeader>
                  <div className="flex flex-col gap-3">
                    <p className="text-center text-white font-bold">Premium</p>
                    <p className="text-center text-3xl text-white">P70/pm</p>
                  </div>
                </CardHeader>
                <CardContent className="text-white">
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
                      <X /> Workshops and events
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link to="/billing" className="w-full rounded-[15px] bg-[#1E88E5] text-center text-base font-semibold">
                    <Button className="bg-[#1E88E5] rounded-[15px] w-full">
                      Sign up
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
          </div>
          </div>
        </section>

        <div className="bg-opacity-10 backdrop-blur-md rounded-lg p-4 bg-white mt-72 pt-28 pb-28">
          <div className="flex flex-col justify-center items-center">
          <p className="pb-16 font-playfair text-5xl font-semibold">Explore subjects offered</p>
          <p className="text-2xl text-center pb-16 mx-44">From squares and circles, to adding and multipying, rounding off, calculating the mean 
            of a data set, to learning how to draw a pie chart, being able tell what time it is 
            telling what the probability of an event happening to calculating what the percentage increase
            or decrease is. An adveture waiting to be undertaken.
          </p>
          </div>
        <Accordion type="single" collapsible className="w-full px-72">
      <AccordionItem value="item-1">
        <AccordionTrigger>
        <div className="flex gap-3">
              <img src="/icons/numbers.png" alt="Numbers" className="h-10" />
              
                <p className="text-xl">
                  <span className="font-bold">Chapter 1</span> Numbers &
                  Operations
                </p>
              
        </div>
        </AccordionTrigger>
        <AccordionContent>
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
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
        <div className="flex gap-3">
              <img src="/icons/geometry.png" alt="Geometry" className="h-10" />
              
                <p className="text-xl">
                  <span className="font-bold">Chapter 2</span> Geometry
                </p>
        </div>
        </AccordionTrigger>
        <AccordionContent>
                <ul className="mt-5 flex flex-col gap-2 pl-5 font-medium">
                  <li>2.1 Angles</li>
                  <li>2.2 Polygons</li>
                  <li>2.3 Transformations</li>
                  <li>2.4 Coordinate Geometry</li>
                </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
        <div className="flex gap-3">
              <img
                src="/icons/measuring-tape.png"
                alt="measuring tape"
                className="h-10"
              />
             
                <p className="text-xl">
                  <span className="font-bold">Chapter 3</span> Measures
                </p>
        </div>
        </AccordionTrigger>
        <AccordionContent>
                <ul className="mt-5 flex flex-col gap-2 pl-5 font-medium">
                  <li>3.1 Length</li>
                  <li>3.2 Area</li>
                  <li>3.3 Mass</li>
                  <li>3.4 Volume</li>
                  <li>3.5 Time</li>
                </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
        <div className="flex gap-3">
              <img
                src="/icons/analytics.png"
                alt="Analytics"
                className="h-10"
              />
              
                <p className="text-xl">
                  <span className="font-bold">Chapter 4</span> Statistics
                </p>
        </div>
        </AccordionTrigger>
        <AccordionContent>
                <ul className="mt-5 flex flex-col gap-2 pl-5 font-medium">
                  <li>4.1 Graph</li>
                  <li>4.2 Measures of central tendency</li>
                  <li>4.3 Data collection and manipulation</li>
                  <li>4.4 Probability</li>
                </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>
        <div className="flex gap-3">
              <img src="/icons/graph.png" alt="Graph" className="h-10" />
              
                <p className="text-xl">
                  <span className="font-bold">Chapter 5</span> Algebra
                </p>
          </div>
        </AccordionTrigger>
        <AccordionContent>
                <ul className="mt-5 flex flex-col gap-2 pl-5 font-medium">
                  <li>5.1 Algebra</li>
                </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    
        </div>
      </div>
    </Layout>
  );
}
