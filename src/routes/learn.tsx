import Layout from "@/components/layouts/main";
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
  } from "@/components/ui/card";

export const Route = createFileRoute("/learn")({
    component: Learn,
  });

function Learn() {
    return (
        <Layout>
            <div className="bg-[#f1f1f1]">
            <div className="h-[500px] bg-[#020617] mt-8 mb-20 text-center rounded-b-3xl mx-24">
                <div className="pt-36">
                <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl">Learning at its finest</h1>
                <p className="text-white mt-14 px-64 text-lg ">Nothing as exciting as learning and having less of the 
                    not so nice head scratching moments. Explore the subjects 
                    Motswana Mind has for you and start learning today!!! </p>
                </div>

                <div className="flex justify-center items-center pt-24">
                    <a href="#subjects"><img 
                        src="/down-arrow.png"
                        className="size-14 animate-bounce"
                    /></a>
                </div>
    
            </div>
            <div className="flex flex-row gap-5 justify-center items-center mb-10" id="subjects" >
            <Card className="rounded-[30px] shadow-2xl">
                <CardHeader>
                  <img
                    src="/math thumbnail.png"
                    className="size-44 rounded-t-[30px]"
                  />
                </CardHeader>
                <CardContent className="">
                  <p>Mathematics</p>
                </CardContent>
                <CardFooter>
                    <Link to="/mathematics">
                        <Button>View</Button>
                    </Link>
                </CardFooter>
              </Card>
              <Card className="rounded-[30px] shadow-2xl">
                <CardHeader>
                  <img
                    src="/english thumbnail.png"
                    className="size-44 rounded-t-[30px]"
                  />
                </CardHeader>
                <CardContent className="">
                    <p>English Language</p>
                </CardContent>
                <CardFooter>
                    <Button>View</Button>
                </CardFooter>
              </Card>
              <Card className="rounded-[30px] shadow-2xl">
                <CardHeader>
                  <img
                    src="/science thumbnail.png"
                    className="size-44 rounded-t-[30px]"
                  />
                </CardHeader>
                <CardContent className="">
                  <p>Science</p>
                </CardContent>
                <CardFooter>
                  <Button>View</Button>
                </CardFooter>
              </Card>
              <Card className="rounded-[30px] shadow-2xl">
                <CardHeader>
                  <img
                    src="/agric thumbnail.png"
                    className="size-44 rounded-t-[30px]"
                  />
                </CardHeader>
                <CardContent className="">
                  <p>Agriculture</p>
                </CardContent>
                <CardFooter>
                  <Button>View</Button>
                </CardFooter>
              </Card>
            </div>

            <div className="flex flex-row gap-5 justify-center items-center mb-20" >
            <Card className="rounded-[30px] shadow-2xl">
                <CardHeader className="">
                  <img
                    src="/re thumbnail.png "
                    className="h-[176px] w-[205px] rounded-t-[30px]"
                  />
                </CardHeader>
                <CardContent className="">
                  <p>Religious & Moral Education</p>
                </CardContent>
                <CardFooter>
                  <Button>View</Button>
                </CardFooter>
              </Card>
              <Card className="rounded-[30px] shadow-2xl">
                <CardHeader>
                  <img
                    src="/social thumbnail.png"
                    className="size-44 rounded-t-[30px]"
                  />
                </CardHeader>
                <CardContent className="">
                    <p>Social Studies</p>
                </CardContent>
                <CardFooter>
                    <Button>View</Button>
                </CardFooter>
              </Card>
              <Card className="rounded-[30px] shadow-2xl">
                <CardHeader>
                  <img
                    src="/setswana thumbnail.png"
                    className="size-44 rounded-t-[30px]"
                  />
                </CardHeader>
                <CardContent className="">
                  <p>Setswana</p>
                </CardContent>
                <CardFooter>
                  <Button>View</Button>
                </CardFooter>
              </Card>
            </div>
            </div>
        </Layout>
    )
}
