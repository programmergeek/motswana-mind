/**
 * @author: Junior Moremong, 202001442
 * This file contains the Dashboard component which displays the user's dashboard.
 * The Dashboard component is a functional component that renders the StartDash component.
 * The StartDash component is the main content of the dashboard and includes cards with information and buttons.
 */

import { Link, createFileRoute } from '@tanstack/react-router'
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardContent, CardFooter, Card } from "@/components/ui/card"
import Layout from "@/components/layouts/main";

/**
 * The Dashboard component is a functional component that renders the StartDash component.
 * @returns The StartDash component.
 */
const Dashboard: React.FC = () => {
  return StartDash();
};

/**
 * The Route component is a file route for the Dashboard component.
 * @returns The Dashboard component.
 */
export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
});

/**
 * The StartDash component is the main content of the dashboard and includes cards with information and buttons.
 * @returns The JSX elements representing the dashboard.
 */
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
                  <CardTitle className="text-base font-semibold">Current Subject</CardTitle>
                  <CardDescription className="text-sm">Mathematics</CardDescription>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline">View Subject</Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col justify-between">
              <CardContent className="flex flex-col gap-1">
                <CardTitle className="text-base font-semibold">Upcoming Assessments</CardTitle>
                <CardDescription className="text-sm">Numbers & Operations Test</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline">View Assessment</Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col justify-between">
              <CardContent className="flex flex-col gap-1">
                <CardTitle className="text-base font-semibold">Recent Grade</CardTitle>
                <CardDescription className="text-sm">Whole Numbers Quiz: 95%</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline">View Grades</Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col justify-between">
              <CardContent className="flex flex-col gap-1">
                <CardTitle className="text-base font-semibold">Settings</CardTitle>
                <CardDescription className="text-sm">Make changes to your profile!</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Open Settings</Button>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </Layout>
  )
}
