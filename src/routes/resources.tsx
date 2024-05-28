import { createFileRoute } from '@tanstack/react-router'
import Layout from "@/components/layouts/main";
import Autoplay from "embla-carousel-autoplay"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import React from 'react';

export const Route = createFileRoute('/resources')({
  component: Resources,
})

function Resources() {
    return(
        <Layout>
            <div className="mt-24 flex flex-col justify-center items-center">
                <img
                    src="/past papers.png"
                    className="h-[470px] w-[1000px] rounded-3xl shadow-2xl"
                />
                <p className='text-2xl text-center mt-20 mb-20 mx-56'>
                    Motswana mind brings you access to past papers in different subjects 
                    to aid you with revision and your learning experience.  
                </p>
            </div>
            <div>
            <Accordion type="single" collapsible className="w-full px-72">
      <AccordionItem value="item-1">
        <AccordionTrigger>
        <div className="flex gap-3">
              <img src="/icons/numbers.png" alt="Numbers" className="h-10" />
              
                <p className="text-xl">
                  <span className="font-bold"></span> Mathematics
                </p>
              
        </div>
        </AccordionTrigger>
        <AccordionContent>
               <ul className="mt-5 flex flex-col gap-5 pl-16 text-base font-medium">
                  <a href="/pastpapers"><li>Mathematics - PSLE - 2010</li></a>
                  <a href="/pastpapers"><li>Mathematics - PSLE - 2011</li></a>
                  <a href="/pastpapers"><li>Mathematics - PSLE - 2012</li></a>
                  <a href="/pastpapers"><li>Mathematics - PSLE - 2013</li></a>
                  <a href="/pastpapers"><li>Mathematics - PSLE - 2014</li></a>
                  <a href="/pastpapers"><li>Mathematics - PSLE - 2015</li></a>
                </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
        <div className="flex gap-3">
              <img src="/eng.png" alt="Geometry" className="h-10" />
              
                <p className="text-xl">
                  <span className="font-bold"></span>English Language
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
                src="/medical-laboratory.png"
                alt="measuring tape"
                className="h-10"
              />
             
                <p className="text-xl">
                  <span className="font-bold"></span>Science
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
                src="/seedling.png"
                alt="Analytics"
                className="h-10"
              />
              
                <p className="text-xl">
                  <span className="font-bold"></span>  Agriculture
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
                  <span className="font-bold"></span>Religious & Moral Education
                </p>
          </div>
        </AccordionTrigger>
        <AccordionContent>
                <ul className="mt-5 flex flex-col gap-2 pl-5 font-medium">
                  <li>5.1 Algebra</li>
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
                  <span className="font-bold"></span>Social Studies
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
      <AccordionItem value="item-4">
        <AccordionTrigger>
        <div className="flex gap-3">
              <img
                src="/icons/analytics.png"
                alt="Analytics"
                className="h-10"
              />
              
                <p className="text-xl">
                  <span className="font-bold"></span>Setswana
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
    </Accordion> 
            </div>
                <p className='text-2xl text-center font-bold mt-20 mx-56'>
                    Want to know what it takes to ace those exams and come out on top?  
                </p>
                <p className='text-2xl mt-10 mx-56'>
                    Don’t worry we got you. Scroll through the articles and videos of <span className="text-[#E061FF]">exam tips</span> & <span className="text-[#9450FF]">study guides</span>.   
                </p>

                
            <div className="w-10/12 mx-40 my-20">
            <Carousel>
            <CarouselContent>
                <CarouselItem className="basis-1/3">
                <iframe
                    width="350px"
                    height="200x"
                    src={`https://www.youtube.com/embed/hFubXXE0-bc`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                </CarouselItem>
                <CarouselItem className="basis-1/3"> 
            <iframe
                width="350px"
                height="200x"
                src={`https://www.youtube.com/embed/hFubXXE0-bc`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe></CarouselItem>
                <CarouselItem className="basis-1/3">
                
            <iframe
                width="350px"
                height="200x"
                src={`https://www.youtube.com/embed/hFubXXE0-bc`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>
            
            </div>


            
        </Layout>
    )
}