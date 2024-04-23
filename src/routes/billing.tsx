/* imports */
import { Link, createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/layouts/main";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState, useEffect } from "react";


/* shadcn */
"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

// const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);

/* input validation */
const formSchema = z.object({
	// card holder name
	cardHolderName: z.string().refine((cardHolderName) => {
		return cardHolderName.length != 0
	}, {
		message: "Required"
	}).refine((cardHolderName) => {
		return /^[A-Za-z ]*$/.test(cardHolderName)
	}, {
		message: "Card holder name must contain only letters.",
	}),

	// card number
	cardNo: z.string().refine((cardNo) => {
		return cardNo.length != 0
	}, {
		message: "Required"
	}).refine((cardNo) => {
		return /^\d{16}$/.test(cardNo)
	}, {
		message: "Card number must be 16 digits.",
	}),

	// expiry date 
	expiryDate: z.string().refine((expiryDate) => {
		return expiryDate.length != 0
	}, {
		message: "Required"
	}).refine((expiryDate) => {
		return /^[0-9]{2}\/[0-9]{2}$/.test(expiryDate)
	}, {
		message: "Enter date of format MM/YY."
	}).refine((expiryDate) => {
		let rgx = /^[0-9]{2}\/[0-9]{2}$/
		
		if (rgx.test(expiryDate)) {
			let data = expiryDate.split("/");
			let expirationMonth = data[0];
			let expirationYear = '20' + data[1];
			
			if (validateExpirationDate(expirationMonth, expirationYear)) {
				return true
			} else {
				return false
			}
		}
	}, {
		message: "Card expired."
	}).refine((expiryDate) => {		// checking if month is valid
		let rgx = /^[0-9]{2}\/[0-9]{2}$/
		
		if (rgx.test(expiryDate)) {
			let data = expiryDate.split("/");
			let expirationMonth = data[0];
			
			if (parseInt(expirationMonth) > 12) {
				return false
			} else {
				return true
			}
		}
	}, {
		message: "Invalid month"
	}),

	// cvv
	cvv: z.string().refine((cvv) => {  
		return cvv.length != 0
	}, {
		message: "Required"
	}).refine((cvv) => {
		return /^\d{3}$/.test(cvv) 
	}, {
		message: "CVV must be exactly 3 digits."
	})
})

const validateExpirationDate = (expirationMonth: string, expirationYear: string) => {
	const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;		// January is 0

	let expMonth = parseInt(expirationMonth)
	let expYear = parseInt(expirationYear)

    if (expYear > currentYear) {
        return true;
    } else if (expYear === currentYear && expMonth >= currentMonth) {
        return true;
    } else {
		return false;
	}
}

/* billing func */
const Billing: React.FC = () => {
	const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:4242/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({  }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);
	
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			cardHolderName: "",
			cardNo: "",
			expiryDate: "",
			cvv: ""
		},
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		alert(values.cardHolderName + "\n" + values.cardHolderName + "\n" + values.expiryDate + "\n" + values.cvv);
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

						<form onSubmit={ form.handleSubmit(onSubmit) } className="space-y-8">

							<FormField control={ form.control } name="cardHolderName"
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

							<FormField control={ form.control } name="cardNo"

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
								<FormField control={ form.control } name="expiryDate"

									render={({ field }) => (
										<FormItem>
											<FormLabel>Expiry date</FormLabel>
											<FormControl>
												<Input placeholder="MM/YY" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField control={ form.control } name="cvv"

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
								<Link to="/">
									<Button type="submit">Cancel payment</Button>
								</Link>
								{/* <Link to=""> */}
									<Button type="submit" className="bg-purple-700">Subscribe now</Button>
								{/* </Link> */}
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