import { createFileRoute } from "@tanstack/react-router";

const EventPage: React.FC = () => {
  const { event_id } = Route.useParams();

  return <div> event id: {event_id} </div>;
};

export const Route = createFileRoute("/events/$event_id")({
  component: EventPage,
});
