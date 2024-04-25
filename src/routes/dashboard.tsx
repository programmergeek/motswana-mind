import { createFileRoute } from '@tanstack/react-router'

const Dashboard: React.FC = () => {
  return <div>Hello /dashboard!</div>;
};

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
});