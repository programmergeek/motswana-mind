// /* import React, { useEffect, useState } from 'react'
// import Layout from '@/components/layouts/main'
// import { Link } from '@tanstack/react-router'
// import { PaymentElement, LinkAuthenticationElement, useElements, useStripe } from '@stripe/react-stripe-js'
// import { Button } from '@/components/ui/button'

/* billing-form component */
const BillingForm: React.FC = () => {
	const [loading, setLoading] = useState(false)
	const [message, setMessage] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const stripe = useStripe()
	const elements = useElements()
	const [total, setTotal] = useState(0)

	const [email, setEmail] = useState('')

	// const clientSecret = new URLSearchParams(window.location.search).get(
	//   'payment_intent_client_secret'
	// );

	// if (!clientSecret) {      // if client secret not found
	//   return
	// };

	// stripe?.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
	//   switch (paymentIntent?.status) {
	//     case "succeeded":
	//       setMessage("Payment succeeded!");
	//       break;
	//     case "processing":
	//       setMessage("Your payment is processing.");
	//       break;
	//     case "requires_payment_method":
	//       setMessage("Your payment was not successful, please try again.");
	//       break;
	//     default:
	//       setMessage("Something went wrong.");
	//       break;
	//   }
	// });

	const sendNotification = async (event: any) => {
		try {
			console.log('In sendNotification()')
			await fetch('http://localhost:4242/send-notification', {
				method: 'POST',
				mode: 'cors',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email: email }),
			})
				.then((res) => res.json())
		} catch (error) {
			console.error(error)
		}
	};

	const handlePayment = async (event: any) => {
		console.log('In handlePayment()')

		event.preventDefault()

		if (!stripe || !elements) {      // if Stripe.js hasn't yet loaded
			return
		};

		setIsLoading(true)
		const { error } = await stripe.confirmPayment({
			elements,
			confirmParams: {
				return_url: 'http://localhost:5173/receipt',      // payment completion page
			},
		});
 
		if (error.type === 'validation_error') {
			console.error(error)
			setMessage(error.message);
		} else {
			console.error(error)
			setMessage('An error occurred while processing your payment.');
		}

		setIsLoading(false)
	};

	const paymentElementOptions = {
		layout: 'auto'
	};

	// html
	return (
		<Layout>
			<main className='bg-[url(/pattern.jpeg)] bg-cover flex flex-col items-center h-screen'>

				<h1 className='m-5 text-3xl text-black-300 pt-10'>
					Subscribe to Motswana Mind Premium
				</h1>

				<section className='p-10 bg-slate-300 rounded-3xl w-1/3'>
					<h4 className='pb-5 text-center'>
						Enter your payment details
					</h4>
					<section className='flex justify-between'>


						{/* form */}
						<div>
							<form id="payment-form" onSubmit={handlePayment}>
								<LinkAuthenticationElement onChange={(event: any) => setEmail(event.value.email)} />

								{/* <div className='mb-3'>
                  <Label className='font-normal text-left'>Email</Label>
                  <Input type='email' placeholder='Email' />
                </div> */}

								<PaymentElement id="payment-element" options={paymentElementOptions} />

								{/* <button disabled={isLoading || !stripe || !elements} id="submit">
                  <span id="button-text">
                    {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
                  </span>
                </button> */}

								{/* Show any error or success messages */}
								{message && <div className='pt-4' id='payment-message'>{message}</div>}

								{/* buttons */}
								<div className="flex justify-around my-5">
									<Button type='button'>
										<Link to='/'>
											Cancel payment
										</Link>
									</Button>
									<Button type='submit' className='bg-purple-700' disabled={!stripe || loading || isLoading}>
										Pay
									</Button>
								</div>
							</form>
						</div>

					</section>
				</section>
			</main>
		</Layout>
	)
};

// // export default BillingForm */