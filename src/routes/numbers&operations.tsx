import { createFileRoute } from '@tanstack/react-router'
import Layout from "@/components/layouts/main";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute('/numbers&operations')({
  component: Numop,
})

function Numop() {
    return(
        <Layout>
            <div className="flex flex-col bg bg-[url('/chalkboard.jpeg')] bg-no-repeat bg-cover text-white ml-12 mt-12 mb-14 p-16 rounded-lg shadow-2xl h-[350px] w-[1250px]">
                <p className="text-2xl font-playfair pb-5">
                    Chapter 1
                </p>
                <p className="text-4xl font-playfair font-semibold pb-20">
                    Numbers & operations
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
                numbers in their different forms and how to use those numbers in operations 
                such as addition, subtraction, multiplication and division.
                </p>
                <p className="text-xl pb-20">
                At the end of the chapter you will have an understanding of numbers, directed numbers,
                use operations proficiently, apply the operations on fractions and decimals, show an
                understanding of percentages, rates and ratios as well as apply money in real life scenarios. 
                </p>
            </div>

            <div className="flex justify-center items-center pb-16">
            <div className="outline h-[300px] w-[1000px] rounded-3xl shadow-2xl">
                <div className="bg-[#FF56C2] rounded-t-3xl p-4 border-b-black">
                    <p className="text-lg ml-3">
                        1.1 Whole numbers
                    </p>
                </div>
                <div className="mt-10 ml-12">
                    <p>Quiz</p>
                </div>
            </div>
            </div>

            <div className="flex justify-center items-center pb-16">
            <div className="outline h-[300px] w-[1000px] rounded-3xl shadow-2xl">
                <div className="bg-[#FF56C2] rounded-t-3xl p-4 border-b-black">
                    <p className="text-lg ml-3">
                        1.2 Directed numbers
                    </p>
                </div>
                <div className="mt-10 ml-12">
                    <p>Quiz</p>
                </div>
            </div>
            </div>

            <div className="flex justify-center items-center pb-16">
            <div className="outline h-[300px] w-[1000px] rounded-3xl  shadow-2xl">
                <div className="bg-[#FF56C2] rounded-t-3xl p-4 border-b-black">
                    <p className="text-lg ml-3">
                        1.3 Number operations
                    </p>
                </div>
                <div className="mt-10 ml-12">
                    <p>Quiz</p>
                </div>
            </div>
            </div>

            <div className="flex justify-center items-center pb-16">
            <div className="outline h-[300px] w-[1000px] rounded-3xl shadow-2xl">
                <div className="bg-[#FF56C2] rounded-t-3xl p-4 border-b-black">
                    <p className="text-lg ml-3">
                        1.4 Fractions
                    </p>
                </div>
                <div className="mt-10 ml-12">
                    <p>Quiz</p>
                </div>
            </div>
            </div>

            <div className="flex justify-center items-center pb-16">
            <div className="outline h-[300px] w-[1000px] rounded-3xl shadow-2xl">
                <div className="bg-[#FF56C2] rounded-t-3xl p-4 border-b-black">
                    <p className="text-lg ml-3">
                        1.5 Decimals
                    </p>
                </div>
                <div className="mt-10 ml-12">
                    <p>Quiz</p>
                </div>
            </div>
            </div>

            <div className="flex justify-center items-center pb-16">
            <div className="outline h-[300px] w-[1000px] rounded-3xl shadow-2xl">
                <div className="bg-[#FF56C2] rounded-t-3xl p-4 border-b-black">
                    <p className="text-lg ml-3">
                        1.6 Percentages
                    </p>
                </div>
                <div className="mt-10 ml-12">
                    <p>Quiz</p>
                </div>
            </div>
            </div>

            <div className="flex justify-center items-center pb-16">
            <div className="outline h-[300px] w-[1000px] rounded-3xl shadow-2xl">
                <div className="bg-[#FF56C2] rounded-t-3xl p-4 border-b-black">
                    <p className="text-lg ml-3">
                        1.7 Rates and Ratios
                    </p>
                </div>
                <div className="mt-10 ml-12">
                    <p>Quiz</p>
                </div>
            </div>
            </div>

            <div className="flex justify-center items-center pb-16">
            <div className="outline h-[300px] w-[1000px] rounded-3xl shadow-2xl">
                <div className="bg-[#FF56C2] rounded-t-3xl p-4 border-b-black">
                    <p className="text-lg ml-3">
                        1.8 Money
                    </p>
                </div>
                <div className="mt-10 ml-12">
                    <p>Quiz</p>
                </div>
            </div>
            </div>
            
            <div>
                <p className="text-2xl font-playfair pt-10 pb-14 font-semibold text-center mx-96">
                    Ready to test out your newly acquired knowledge on numbers and operations?
                </p>
                <p className="text-xl pb-5 text-center">
                    Take this 20 minute test to assess your skill on numbers and operations.
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