import Layout from "@/components/layouts/main";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Link, createFileRoute } from "@tanstack/react-router";
import axios from "axios";
import { format } from "date-fns";
import { Calendar } from "lucide-react";
import Math from "../../public/math thumbnail.png";

const EventsPage: React.FC<{ children: React.ReactNode }> = ({ ...props }) => {
  const events = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const data = await axios.get<Event[]>(`http://10.0.19.248:3081/api/events`);
      console.log(data.data);
      return data.data;
    },
  });

  return (
    <Layout>
      <div className="min-h-screen bg-[url(/Backgroud.png)]">
        {!(events.isFetching || events.isPending) ? (
          <div className="py-10">
            <Events events={events.data as Event[]} />
          </div>
        ) : (
          "Loading"
        )}
      </div>
    </Layout>
  );
};

const Events: React.FC<{ events: Event[] }> = ({ ...props }) => {
  return (
    <div className="container grid grid-cols-3">
      {props.events.map((event) => {
        return <EventCard key={event.id} {...event} />;
      })}
    </div>
  );
};

const EventCard: React.FC<Event> = ({ ...props }) => {
  return (
    <div className="">
      {props.thumbnail ? (
        <img
          src={props.thumbnail ? props.thumbnail : Math}
          alt="event thumbnail"
          className="rounded-t-2xl"
        />
      ) : (
        ""
      )}
      <div className="space-y-3 border bg-black px-8 py-8 text-white">
        <p className="text-center font-inter text-2xl font-semibold">
          {" "}
          {props.title}{" "}
        </p>
        <div className="space-y-2 pb-5">
          <p className="text-center">{props.location}</p>{" "}
          <p className="flex justify-center gap-2 text-[#1E88E5]">
            <span>
              <Calendar />
            </span>
            <span>{format(new Date(props.startTime), "dd MMMM, HH:mm")}</span>
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            to={`/events/$event_id`}
            params={{ event_id: props.id as unknown as string }}
          >
            <Button className="bg-black">View Event</Button>
          </Link>
          <Link to="/billing">
            <Button className="w-full rounded-lg bg-[#029390] font-inter font-semibold hover:bg-[#029390]/90">
              Buy Ticket
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

interface Event {
  capacity: number;
  description: string;
  startTime: string;
  endTime: string;
  location: string;
  title: string;
  id: number;
  thumbnail?: string;
}

export const Route = createFileRoute("/events")({
  component: EventsPage,
});
