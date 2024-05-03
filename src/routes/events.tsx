import Layout from "@/components/layouts/main";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Link, createFileRoute } from "@tanstack/react-router";
import axios from "axios";
import { format } from "date-fns";
import { Calendar } from "lucide-react";
import Math from "../../public/math thumbnail.png";
import Masonry from "react-responsive-masonry";
import { Event } from "@/types/event.api.types";

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
      <div className=" bg-[url(/Backgroud.png)] px-5">
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
    <Masonry columnsCount={3} gutter="16px">
      {props.events.map((event) => {
        return <EventCard key={event.id} {...event} />;
      })}
    </Masonry>
  );
};

const EventCard: React.FC<Event> = ({ ...props }) => {
  return (
    <div className="">
      <img
        src={props.thumbnail ? props.thumbnail : Math}
        alt="event thumbnail"
        className="rounded-t-2xl"
      />
      <div className="space-y-3 rounded-b-lg bg-[#57C28D] px-4 py-5 text-white shadow-lg">
        <p className="text-center font-inter text-2xl font-semibold">
          {" "}
          {props.title}{" "}
        </p>
        <div className="space-y-2 pb-5">
          <p className="text-center font-semibold">{props.location}</p>{" "}
          <p className="flex justify-center gap-2 font-semibold text-[#C0FCF9]">
            <span>
              <Calendar />
            </span>
            <span>{format(new Date(props.startTime), "dd MMMM, HH:mm")}</span>
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            to={`/events/$event_id`}
            params={{ event_id: String(props.id) }}
          >
            <Button className="bg-black">View Event</Button>
          </Link>
          <Link to="/billing/$total" params={{total: String(props.price)}} className="w-full">
            <Button className="w-full rounded-lg bg-[#029390] font-inter font-semibold hover:bg-[#029390]/90">
              Buy Ticket
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const Route = createFileRoute("/events")({
  component: EventsPage,
});

export default EventsPage;