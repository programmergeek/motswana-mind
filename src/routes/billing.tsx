/* imports */
import React from "react"
import { createFileRoute } from "@tanstack/react-router"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import BillingForm from "@/components/custom/billing-form"

const stripe = loadStripe(
	`pk_test_51P86kJLcImUaLYOSm5vW72Ac2Xv567Fw4gHzvm5heBi7SQ1mEozmNgkOYN3uwOMtuOk0MGFN96jEs02gOegJ2ggb00pKlkWM4M`
);

const Billing: React.FC = () => {
	return (
		<Elements stripe={ stripe }>
			<BillingForm />
		</Elements>
	)
};

export const Route = createFileRoute("/billing")({
	component: Billing,
});