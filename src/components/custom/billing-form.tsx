import React, { useState, useEffect }from "react"
import Layout from "@/components/layouts/main"
import { Link } from "@tanstack/react-router"
import { PaymentElement, CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
// import { Form } from "@/components/ui/form"

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
      let data = expiryDate.split("/")
      let expirationMonth = data[0]
      let expirationYear = '20' + data[1]

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
      let data = expiryDate.split("/")
      let expirationMonth = data[0]

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
});

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
};

/* billing func */
const BillingForm: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [clientSecret, setClientSecret] = useState('')
  const stripe = useStripe()
  const [message, setMessage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  
  useEffect(() => {
    //   // Create PaymentIntent as soon as the page loads
    fetch('http://localhost:4242/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 250 }),
    })
    .then((res) => res.json())
    .then((data) => setClientSecret(data.clientSecret))
  })
  
  console.log(clientSecret)
  const elements = stripe?.elements({ clientSecret })
  const paymentElement = elements?.create('payment')
  paymentElement?.mount('#payment-element')

  const handlePayment = async (event: Event) => {
    console.log('IN PAYING!')
    event.preventDefault
    setLoading(true)
    
    // Create a token using the card details
    // const token = await stripe?.createToken({
    //   number: '4242424242424242',
    //   exp_month: '11',
    //   exp_year: '2024',
    //   cvc: '333',
    // })
    // const token = await stripe?.createToken({
    //   card: {
    //     number: '4242424242424242',
    //     exp_month: '11',
    //     exp_year: '2024',
    //     cvc: '333',
    //   }
    // })
    // console.log(token)
    // const token = await stripe?.createConfirmationToken({ name: cardNo })
    // form.getValues('cardNo')
    const handlePayment = await stripe?.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        // elements,
        billing_details: {
          name: 'Yusuff Faruq',
        },
        // return_url: '/'
      },
    })
    .then(function(result) {
      console.log(result.error, result.paymentIntent)
    })

    setLoading(false)
    if (paymentResult.error) {
      alert(paymentResult.error.message);
      console.log(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Success!")
        console.log(paymentResult)
      }
    }
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardHolderName: '',
      cardNo: '',
      expiryDate: '',
      cvv: ''
    },
  });

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