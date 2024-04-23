import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
  } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";




const StartQuiz: React.FC = () => {
    return (
        <div className="bg-[url(/pattern.jpeg)]">
            {/* <section className="w-full bg-accent"> */}
                <div className="px-8 py-10 sm:px-16 xl:px-64 pt-5">
                    <div className="grid grid-rows-[auto_auto_auto] gap-y-5 sm:grid-rows-[auto_auto] sm:gap-x-5 md:grid-cols-3 md:grid-rows-1 bg-gray-200 p-10 rounded-3xl">
                        <div>
                            <p>Numbers and Operations</p>
                        </div>
                        <Card className="col-span-2 row-start-3 rounded-[30px] sm:col-span-1 sm:row-start-2 md:row-start-1">
                            
                            <CardContent>
                                <div className="flex justify-center items-center">
                                <img src="/icons/question.png" alt="question logo" className="size-24 pt-4" />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <p className="text-center text-3xl p-5">20 Questions</p>
                                </div>
                            </CardContent>
                           
                        </Card>
                        <Card className="col-span-2 row-start-2 rounded-[30px] sm:col-span-1 md:row-start-1">
                            
                            <CardContent className="px-10">
                            <div className="flex justify-center items-center">
                                <img src="/icons/clock.png" alt="question logo" className="size-24 pt-4" />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <p className="text-center text-3xl p-5">20 Minutes</p>
                                </div>
                            </CardContent>
                           
                        </Card>
                        <Card className="col-span-2 row-start-2 rounded-[30px] sm:col-span-1 md:row-start-1">
                            
                            <CardContent className="px-10">
                            <div className="flex justify-center items-center">
                                <img src="/icons/document.png" alt="question logo" className="size-24 pt-4" />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <p className="text-center text-3xl p-5">Test</p>
                                </div>
                            </CardContent>
                            
                        </Card>
                        <div className="flex  flex-col">
                        <Link to="/billing">
                            <Button className="w-full rounded-[15px] bg-[#1E88E5] text-base font-semibold float-right">
                                Start
                            </Button>
                        </Link>
                        </div>
                    </div>
                </div>
            {/* </section> */}
        </div>
    );
  }

  export default StartQuiz;