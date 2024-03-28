import { createFileRoute } from "@tanstack/react-router";

const Billing: React.FC = () => {
  return <div className="text-xl text-green-300">This is the billing page</div>;
};

export const Route = createFileRoute("/billing")({
  component: Billing,
});
