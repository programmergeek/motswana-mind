import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Event } from "../types/event.api.types";
import axios from "axios";
import Math from "../../public/math.png";
import Layout from "@/components/layouts/main";
import { Calendar } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

const EventPage: React.FC = () => {
  const { event_id } = Route.useParams();

  const eventdata = useQuery({
    queryKey: ["event", event_id],
    queryFn: async () => {
      const data = await axios.get<Event>(
        `http://0.0.0.0:3081/api/events/${event_id}`,
      );
      return data.data;
    },
  });

  return (
    <Layout>
      <div className="mt-10 grid grid-cols-1 gap-5 bg-[url(/Backgroud.png)] px-2 pb-10 md:grid-cols-2 lg:grid-cols-[65%_auto] xl:mt-10 xl:px-10 xl:pt-10">
        {eventdata.data ? (
          <>
            <div className=" rounded-lg border border-black bg-white">
              <img
                src={eventdata.data?.thumbnail ?? Math}
                alt="event thumbnail"
                className="rounded-lg"
              />
              <div className="px-5">
                <p className="py-3 text-4xl font-bold">
                  {eventdata.data?.title}
                </p>
                <p className="flex gap-2 text-[#1E88E5]">
                  <span>
                    <Calendar />
                  </span>
                  <span>
                    {format(
                      new Date(eventdata.data.startTime),
                      "dd MMMM, HH:mm",
                    )}
                  </span>
                </p>
                <div className="py-3">
                  {JSON.stringify(eventdata.data.description)
                    .split("\\n")
                    .map((line, index) => (
                      <p key={index} className="pb-1">
                        {`${line.replace(/(\\"|")/g, "")}`}
                      </p>
                    ))}
                </div>
              </div>
              {eventdata.data.Instructors &&
              eventdata.data.Instructors.FirstName ? (
                <div className="p-5">
                  <p className="py-2 text-2xl font-semibold">
                    Instructor Profile
                  </p>
                  <p className="py-2 text-lg font-semibold">
                    {" "}
                    {eventdata.data.Instructors.FirstName}{" "}
                    {eventdata.data.Instructors.LastName}{" "}
                  </p>
                  {JSON.stringify(
                    eventdata.data.Instructors.InstructorDescription,
                  )
                    .split("\\n")
                    .map((line, index) => (
                      <p key={index} className="pb-1">
                        {`${line.replace(/(\\"|")/g, "")}`}
                      </p>
                    ))}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="relative">
              <div className="sticky top-52 min-w-36 rounded-lg bg-white p-5 shadow-lg">
                <p className="py-10 text-center text-2xl font-bold">
                  {eventdata.data.price == 0
                    ? "Free"
                    : `P ${eventdata.data.price}`}
                </p>
                <Link to="/billing">
                  <Button className="w-full rounded-lg bg-[#029390] font-inter font-semibold hover:bg-[#029390]/90">
                    Buy Ticket
                  </Button>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="grid min-h-screen place-items-center">
              <p className="text-4xl font-bold">
                Whoops! Looks like something went wrong.
              </p>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export const Route = createFileRoute("/events/$event_id")({
  component: EventPage,
});
