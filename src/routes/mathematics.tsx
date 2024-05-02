import { createFileRoute } from '@tanstack/react-router'
import Layout from "@/components/layouts/main";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute('/mathematics')({
  component: Mathematics,
})

function Mathematics() {
  return (
    <Layout>
        <div className="mt-24 ml-32">
          <img
            src="/math.png"
            className="h-[450px] w-[1100px] rounded-3xl shadow-2xl"
          />
        </div>

        <div className="flex flex-col justify-center items-center pl-40 pr-52 pt-24 pb-16">
          <p className="text-5xl font-semibold">
            Explore the mathematics curriculum carefully curated for you
          </p>
          <p className='text-2xl mt-10'>
            A fun world of Numbers & Operarions, Geometry, Measures, Statistics and Algebra. With an introductory
            document that sets you off on your learning journey to videos that ignite your visual senses and quizes that
            challenge your aquired knowledge. Dive head first into all this fun and learn.
          </p>
        </div>

      <div className="flex justify-center items-center pb-16">
        <div className="bg-[#FF56C2] p-16 rounded-3xl shadow-2xl w-[1000px]">
            <div className="flex gap-3">
              <div>
                <img src="/icons/numbers.png" alt="Numbers" className="h-10" />
              </div>
              <div>
                <p className="text-xl">
                  <span className="font-bold text-white">Chapter 1</span> Numbers &
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
                <div className="ml-72">
                  <Link to="/numbers&operations">
                    <Button className="px-10">Start</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        
        
        <div className="flex justify-center items-center pb-16">
          <div className="bg-[#FFC924] p-16 rounded-3xl shadow-2xl w-[1000px]">
            <div className="flex gap-3">
              <div>
              <img src="/icons/geometry.png" alt="Geometry" className="h-10" />
              </div>
              <div className="">
                <p className="text-xl">
                  <span className="font-bold">Chapter 2</span> Geometry
                </p>
                <ul className="mt-5 flex flex-col gap-2 pl-5 font-medium">
                  <li>2.1 Angles</li>
                  <li>2.2 Polygons</li>
                  <li>2.3 Transformations</li>
                  <li>2.4 Coordinate Geometry</li>
                </ul>
                </div>
                <div className="ml-[386px]">
                  <Link to="/geometry">
                    <Button className="px-10">Start</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        <div className="flex justify-center items-center pb-16">
          <div className="bg-[#BDE283] p-16 rounded-3xl shadow-2xl w-[1000px]">
          <div className="flex gap-3">
            <div>
              <img
                src="/icons/measuring-tape.png"
                alt="measuring tape"
                className="h-10"
              />
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
                <div className="ml-[405px]">
                  <Link to="/measures">
                    <Button className="px-10">Start</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        <div className="flex justify-center items-center pb-16">
          <div className="bg-[#9450FF] p-16 rounded-3xl shadow-2xl w-[1000px]">
          <div className="flex gap-3">
              <div>
              <img
                src="/icons/analytics.png"
                alt="Analytics"
                className="h-10"
              />
              </div>
              <div>
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
              <div className="ml-[300px]">
                  <Link to="/statistics">
                    <Button className="px-10">Start</Button>
                  </Link>
                </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center pb-16">
          <div className="bg-[#289CFF] p-16 rounded-3xl shadow-2xl w-[1000px]">
          <div className="flex gap-3">
            <div>
              <img src="/icons/graph.png" alt="Graph" className="h-10" />
            </div>
              <div>
                <p className="text-xl">
                  <span className="font-bold">Chapter 5</span> Algebra
                </p>
                <ul className="mt-5 flex flex-col gap-2 pl-5 font-medium">
                  <li>5.1 Algebra</li>
                </ul>
              </div>
              <div className="ml-[429px]">
                  <Link to="/algebra">
                    <Button className="px-10">Start</Button>
                  </Link>
                </div>
            </div>
          </div>
        </div>

        <div className="pt-10">
                <div className="flex justify-center items-center pb-4">
                <img
                  src="/exam_time.png"
                  className="h-[100px] w-[300px]"
                />
                </div>
                <p className="text-xl pb-5 text-center mx-60">
                  Take this exam to assess your skill on the various concepts from 
                  the mathematics curriculum. Covering everything you learnt from the chapters.
                </p>

                <div className="flex justify-center items-center pt-5 pb-20">
                    <div className="bg-[#f1f1f1] flex rounded-3xl shadow-2xl w-[800px] p-16">
                    <div>
                        <div className="flex flex-col">
                            <p className="text-2xl pb-5 font-semibold"> 
                                Exam
                            </p>
                            <p className="text-[19px] pb-5">Multiple choice</p>
                            <Button className="bg-accent">Start</Button>
                        </div>
                    </div>
                    <div className="ml-96">
                        <img 
                            src="/test.png"
                            className="size-32"
                        />
                    </div>
                </div>
            </div>
            </div>
    </Layout>
  )
}