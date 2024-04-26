import { createFileRoute } from '@tanstack/react-router'
import Layout from "@/components/layouts/main";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute('/numbers&operations')({
  component: Numop,
})

function Numop() {
    return(
        <Layout>
            <div className="flex flex-col bg bg-[url('/chalkboard.PNG')] bg-no-repeat bg-cover text-white ml-12 mt-12 mb-14 p-16 rounded-lg shadow-2xl h-[350px] w-[1250px]">
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
                <p className="text-xl pb-10">
                At the end of the chapter you will have an understanding of numbers, directed numbers,
                use operations proficiently, apply the operations on fractions and decimals, show an
                understanding of percentages, rates and ratios as well as apply money in real life scenarios. 
                </p>
            </div>
        </Layout>
    )
}