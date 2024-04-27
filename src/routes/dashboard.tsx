import { Link, createFileRoute } from '@tanstack/react-router'
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardContent, CardFooter, Card } from "@/components/ui/card"
import Layout from "@/components/layouts/main";

/* type DashboardProps = {
  token: boolean | null;
}; */


const Dashboard: React.FC = () => {
  return StartDash();
};

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
});

/* 
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0LGDmPxveHk
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

  /**
 * v0 by Vercel.
 * @see https://v0.dev/t/nVjyytDZZYs
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
//bg-[url(/pattern.jpeg)]
  
  export default function StartDash() {
    return (
      <Layout>
        <div className="flex flex-col w-full min-h-screen">
          <Link className="flex items-center gap-2 text-lg font-semibold md:text-base" href="#">
            <span className="sr-only">Motswana Mind</span>
          </Link>
        <main className="flex flex-col flex-1 min-h-[calc(100vh_-_theme(spacing.16))] gap-4 p-4 md:gap-8 md:p-10">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <Card className="flex flex-col justify-between">
              <CardContent className="flex flex-col justify-between">
                <div className="flex flex-col gap-1">
                  <CardTitle className="text-base font-semibold">Current Course</CardTitle>
                  <CardDescription className="text-sm">Introduction to Computer Science</CardDescription>
                </div>
                <div className="flex flex-col gap-1">
                  <CardTitle className="text-base font-semibold">Teacher</CardTitle>
                  <CardDescription className="text-sm">Mr. Johnson</CardDescription>
                </div>
                <div className="flex flex-col gap-1">
                  <CardTitle className="text-base font-semibold">Classroom</CardTitle>
                  <CardDescription className="text-sm">Room 203</CardDescription>
                </div>
                <div className="flex flex-col gap-1">
                  <CardTitle className="text-base font-semibold">Schedule</CardTitle>
                  <CardDescription className="text-sm">MWF 10:00 - 11:00</CardDescription>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline">View Course</Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col justify-between">
              <CardContent className="flex flex-col gap-1">
                <CardTitle className="text-base font-semibold">Upcoming Assignment</CardTitle>
                <CardDescription className="text-sm">Essay on Shakespeare's Hamlet due in 3 days</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline">View Assignment</Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col justify-between">
              <CardContent className="flex flex-col gap-1">
                <CardTitle className="text-base font-semibold">Recent Grade</CardTitle>
                <CardDescription className="text-sm">Mathematics Test: 95%</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline">View Grades</Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col justify-between">
              <CardContent className="flex flex-col gap-1">
                <CardTitle className="text-base font-semibold">Announcement</CardTitle>
                <CardDescription className="text-sm">School trip to the museum next week!</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline">View Announcement</Button>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
      </Layout>
    )
  }
