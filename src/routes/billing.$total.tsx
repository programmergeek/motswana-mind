/* imports */
import React, { useEffect, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import BillingForm from '@/components/custom/billing-form'

const stripe = loadStripe(
	`pk_test_51P86kJLcImUaLYOSm5vW72Ac2Xv567Fw4gHzvm5heBi7SQ1mEozmNgkOYN3uwOMtuOk0MGFN96jEs02gOegJ2ggb00pKlkWM4M`
);

const Billing: React.FC = () => {
	const [clientSecret, setClientSecret] = useState('')
	const {total} = Route.useParams()
	let conv = parseInt(total)      // converting parameter total to a number
	conv /= 70      // determine number of five dollars in pula

	const retrieveClientSecret = async () => {
		try {
			const response = await fetch('http://localhost:4242/create-payment-intent', {
				method: 'POST',
				mode: 'cors',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ amount: (500 * conv) }),
			})
				.then((res) => res.json())
				.then((data) => setClientSecret(data.clientSecret))
		} catch (error) {
			console.error('Error:', error)
		}
	};

	useEffect(() => {
		retrieveClientSecret()
	}, []);

	const options = {
		clientSecret,
	};

	return (
		<div>
			{clientSecret && (
				<Elements stripe={stripe} options={options}>
					<BillingForm />
				</Elements>
			)}
		</div>
	)
};

export const Route = createFileRoute('/billing/$total')({
	component: Billing,
});