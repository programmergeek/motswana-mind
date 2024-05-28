import { createFileRoute, Link } from '@tanstack/react-router'

import Layout from "@/components/layouts/main";
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay" 
import React, { useState } from 'react';
import Subjects from './my_subjects';
import ProgressPage from './progress_page.$user_id';
import Events from './events';


export const Route = createFileRoute('/student_dashboard')({
  component: Studentdashboard,
})

function Studentdashboard() {
    
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
      )

      const [activeView, setActiveView] = useState('subjects'); 

  

  const handleButtonClick = (view: React.SetStateAction<string>) => { 

    setActiveView(view); 

  }; 
  
    return(
        <Layout>
            <div className="divide-y divide-black">
            <div className="flex mt-10 p-14">
                <div className="flex flex-col ml-6 mt-5">
                    <p className="text-2xl">Welcome Thomas!</p>
                    <Avatar className="size-28 ml-12 my-5">
                        <AvatarImage src="" />
                        <AvatarFallback>
                            <img
                                src="/profile-user.png"
                                className="size-28"
                            />
                        </AvatarFallback>
                    </Avatar>
                    <a href="" className="text-[#289CFF] ml-12">view my profile</a>
                    <Link to="/logout">
                    <Button>Logout</Button>
                    </Link>
                </div>
                <div className="h-60 w-96">
                <Carousel  
                    plugins={[plugin.current]}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset} 
                    className="ml-[560px] mt-1 h-60 w-96"
                >
                <CarouselContent className="">
                    <CarouselItem className="size-full">
                        <img
                            src="/mathq.jpg"
                            className="object-cover h-60 w-96 rounded-3xl"
                        />
                    </CarouselItem>
                    <CarouselItem className="size-full">
                        <img
                            src="/mathq2.jpg"
                            className="h-60 w-96 rounded-3xl"
                        />
                    </CarouselItem>
                    <CarouselItem className="size-full">
                        <img
                            src="/mathq3.jpeg"
                            className="object-cover h-60 w-96 rounded-3xl"
                        />
                    </CarouselItem>
                    <CarouselItem className="size-full">
                        <img
                            src="/quote.png"
                            className="object-cover h-60 w-96 rounded-3xl"
                        />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
                </Carousel>
                </div>
            </div>


            <div className="flex h-screen divide-x divide-black mb-32 mx-20">
                <div className='flex flex-col px-20 pt-5'>
                    <button 

                        className={`${ 

                        activeView === 'subjects' ? 'bg-blue-500 text-white' : 'bg-white text-black' 

                        } py-5 px-20 rounded text-2xl `} 

                        onClick={() => handleButtonClick('subjects')} 

                    > 

                        Subjects 

                    </button> 

                    <button 

                        className={`${ 

                        activeView === 'progress' ? 'bg-blue-500 text-white' : 'bg-white text-black' 

                        } py-5 px-20 rounded text-2xl`} 

                        onClick={() => handleButtonClick('progress')} 

                    > 

                        Progress 

                    </button> 

                    <button 

                        className={`${ 

                        activeView === 'events' ? 'bg-blue-500 text-white' : 'bg-white text-black' 

                        } py-5 px-20 rounded text-2xl`} 

                        onClick={() => handleButtonClick('events')} 

                    > 

                        Events 

                    </button> 
                </div>
                <div className='w-full h-screen'>
                    {activeView === 'subjects' && <Subjects />} 

                    {activeView === 'progress' && <Link to="/progress_page/$user_id" params={{user_id : "1"}} ><Button className="mt-4 ml-4 h-12 w-22">Go to Progress Page</Button></Link>} 

                    {activeView === 'events' && <Events />} 

                </div>
            </div>
    
        </div>
        </Layout>
    )
}