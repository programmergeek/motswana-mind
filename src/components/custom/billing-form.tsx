import React, { useEffect, useState } from 'react'
import Layout from '@/components/layouts/main'
import { Link } from '@tanstack/react-router'
import { PaymentElement, CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js'
import { Button } from "@/components/ui/button"
import { StripeElements } from '@stripe/stripe-js'

/* billing-form component */
const BillingForm: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [clientSecret, setClientSecret] = useState('')

  const stripe = useStripe()
  var elements = useElements()

  const handlePayment = async (event: Event) => {
  //   console.log('IN PAYING!')
  //   event.preventDefault
  //   setLoading(true)
    

  //   const paymentResult = await stripe?.confirmCardPayment(clientSecret, {
  //     payment_method: {
  //       card: elements.getElement(CardElement),
  //       // elements,
  //       billing_details: {
  //         name: 'Yusuff Faruq',
  //       },
  //       // return_url: '/'
  //     },
  //   })
  //   .then(function(result) {
  //     console.log(result.error, result.paymentIntent)
  //   })

  //   setLoading(false)
  //   if (paymentResult.error) {
  //     alert(paymentResult.error.message)
  //     console.log(paymentResult.error.message)
  //   } else {
  //     if (paymentResult.paymentIntent.status === "succeeded") {
  //       alert("Success!")
  //       console.log(paymentResult)
  //     }
  //   }
  };

  const paymentElementOptions = {
    layout: "tabs"
  }

  return (
    <Layout>
      <main className="bg-[url(/pattern.jpeg)] bg-cover flex flex-col items-center h-screen">

        <h1 className="m-5 text-xl text-black-300 pt-10">
          Subscribe to Motswana Mind Premium
        </h1>

        <section className="p-10 bg-slate-300 rounded-3xl w-1/3">
          <h5 className="pb-5 text-center">
            Enter your payment details
          </h5>
        </section>

        <form id="payment-form" onSubmit={handlePayment}>
          <PaymentElement id="payment-element" options={paymentElementOptions} />
          <button disabled={isLoading || !stripe || !elements} id="submit">
            <span id="button-text">
              {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
            </span>
          </button>

          {/* Show any error or success messages */}
          {message && <div id="payment-message">{message}</div>}

          <CardElement
              className="card"
              options={{
                style: {
                  base: {
                    backgroundColor: "white"
                  } 
                },
              }}
            />

          <div className="flex justify-around">
            <Link to="/">
              <Button type="submit">Cancel payment</Button>
            </Link>
            {/* <Link to=""> */}
            <Button type="submit" className="bg-purple-700" disabled={!stripe || loading}>Subscribe now</Button>
            {/* </Link> */}
          </div>
        </form>
      </main>
    </Layout>
  )
};

export default BillingForm