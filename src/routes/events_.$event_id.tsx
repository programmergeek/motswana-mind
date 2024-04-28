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
        `http://10.0.19.248:3081/api/events/${event_id}`,
      );
      return data.data;
    },
  });

  return (
    <Layout>
      <div className="grid px-2 mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-[65%_auto] gap-5 bg-[url(/Backgroud.png)] xl:mt-10 xl:px-10 xl:pt-10 pb-10">
        {eventdata.data ? (
          <>
            <div className=" border border-black rounded-lg bg-white">
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
                <p className="py-3">{eventdata.data.description}</p>
              </div>
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
