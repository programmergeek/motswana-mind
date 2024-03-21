import Layout from "@/components/layouts/main";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<Layout>
			<p className="text-4xl text-green-500">Home page</p>
		</Layout>
	);
}
