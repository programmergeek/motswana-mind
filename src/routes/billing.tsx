/* imports */
import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/layouts/main";

/* shadcn */
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
	username: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
	cvv: z.number().max(3, {
		message: "CVV must be 3 digits"
	})
})

/* billing func */
const Billing: React.FC = () => {

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
			cvv: 0
		},
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values)
	}

	return (
		<Layout>
			<main className="bg-[url(/pattern.jpeg)] bg-cover flex flex-col items-center h-screen">

				<h1 className="m-5 text-xl text-black-300 pt-10">
					Subscribe to Motswana Mind Premium
				</h1>

				<Form {...form} >
					
					<section className="p-10 bg-slate-300 rounded-3xl w-1/3">

						<h5 className="pb-5 text-center">
							Enter your payment details
						</h5>

						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

							<FormField
								control={form.control}
								name="username"

								render={({ field }) => (
									<FormItem>
										<FormLabel>Card holder name</FormLabel>
										<FormControl>
											<Input placeholder="Card holder name" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="username"

								render={({ field }) => (
									<FormItem>
										<FormLabel>Card number</FormLabel>
										<FormControl>
											<Input placeholder="Card number" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<div className="flex justify-between">
								<FormField
									control={form.control}
									name="username"

									render={({ field }) => (
										<FormItem>
											<FormLabel>Expiry date</FormLabel>
											<FormControl>
												<Input placeholder="Expiry date" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="cvv"

									render={({ field }) => (
										<FormItem>
											<FormLabel>CVV</FormLabel>
											<FormControl>
												<Input placeholder="CVV" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							
							<div className="flex justify-around">
								<Button type="submit">Cancel payment</Button>
								<Button type="submit">Subscribe now</Button>
							</div>
						</form>

					</section>
				</Form>
			</main>
		</Layout>
	)
}

export const Route = createFileRoute("/billing")({
	component: Billing,
});