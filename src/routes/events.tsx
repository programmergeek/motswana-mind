import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/events')({
    component: Events,
});


function Events() {
  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Events</h2>
      {/* Display events information here */}
      <p>Events information goes here</p>
    </div>
  );
}

export default Events;