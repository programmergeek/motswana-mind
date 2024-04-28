import { createFileRoute } from '@tanstack/react-router'
import Layout from "@/components/layouts/main";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute('/geometry')({
  component: Geometry,
})

function Geometry() {
    return(
        <Layout>
            <div className="flex flex-col bg bg-[url('/chalkboard.jpeg')] bg-no-repeat bg-cover text-white ml-12 mt-12 mb-14 p-16 rounded-lg shadow-2xl h-[350px] w-[1250px]">
                <p className="text-2xl font-playfair pb-5">
                    Chapter 2
                </p>
                <p className="text-4xl font-playfair font-semibold pb-20">
                    Geometry
                </p>
                <div>
                <Button className="px-12 text-base bg-accent">Start</Button>
                </div>
            </div>

            <div className="mx-24">
                <p className="text-2xl font-playfair pb-5 font-semibold">
                    Topic description
                </p>
                <p className="text-xl pb-5">
                A comprehensive chapter that introduces the student to the world of 
                geometry that deals shapes, sizes, angles and dimensions of objects.
                </p>
                <p className="text-xl pb-20">
                At the end of the chapter you will demonstrate skills on angles in 
                2-dimensional shapes, have an understanding of 3-dimensional shapes 
                and their properties as well as key concepts in transformational geometry 
                and the coordinates of the cartesian plane.  
                </p>
            </div>

            <div className="flex justify-center items-center pb-16">
            <div className="outline h-[300px] w-[1000px] rounded-3xl shadow-2xl">
                <div className="bg-[#FFC924] rounded-t-3xl p-4 border-b-black">
                    <p className="text-lg ml-3">
                        2.1 Angles
                    </p>
                </div>
                <div className="mt-10 ml-12">
                    <p>Quiz</p>
                </div>
            </div>
            </div>

            <div className="flex justify-center items-center pb-16">
            <div className="outline h-[300px] w-[1000px] rounded-3xl shadow-2xl">
                <div className="bg-[#FFC924] rounded-t-3xl p-4 border-b-black">
                    <p className="text-lg ml-3">
                        2.2 Polygons
                    </p>
                </div>
                <div className="mt-10 ml-12">
                    <p>Quiz</p>
                </div>
            </div>
            </div>

            <div className="flex justify-center items-center pb-16">
            <div className="outline h-[300px] w-[1000px] rounded-3xl shadow-2xl">
                <div className="bg-[#FFC924] rounded-t-3xl p-4 border-b-black">
                    <p className="text-lg ml-3">
                        2.3 Transformations
                    </p>
                </div>
                <div className="mt-10 ml-12">
                    <p>Quiz</p>
                </div>
            </div>
            </div>

            <div className="flex justify-center items-center pb-16">
            <div className="outline h-[300px] w-[1000px] rounded-3xl shadow-2xl">
                <div className="bg-[#FFC924] rounded-t-3xl p-4 border-b-black">
                    <p className="text-lg ml-3">
                        2.4 Coordinate geometry
                    </p>
                </div>
                <div className="mt-10 ml-12">
                    <p>Quiz</p>
                </div>
            </div>
            </div>

            <div>
                <p className="text-2xl font-playfair pt-10 pb-14 font-semibold text-center mx-96">
                    Ready to test out your newly acquired knowledge on geometry?
                </p>
                <p className="text-xl pb-5 text-center">
                    Take this 20 minute test to assess your skill on geometry.
                </p>

                <div className="flex justify-center items-center pt-5 pb-10">
                    <div className="bg-[#f1f1f1] flex rounded-3xl shadow-2xl w-[800px] p-16">
                    <div>
                        <div className="flex flex-col">
                            <p className="text-2xl pb-5 font-semibold"> 
                                Test
                            </p>
                            <div className="flex gap-3 pb-5">
                                <img
                                    src="/stopwatch.png"
                                    className="size-10"
                                />
                                <p className="text-[19px] pt-2">20 minutes</p>
                            </div>
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