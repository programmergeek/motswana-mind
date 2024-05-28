const express = require('express')
const app = express()
const cors = require('cors')

const stripe = require('stripe')(      // test secret API key
  `sk_test_51P86kJLcImUaLYOS5HDVTY7rwS7QaJenvtsVecCYvAYsNAy3GUH3XSZidM8SfyatdWo1xJKhpjZP6WutvrtHtWXi00QyRONg8T`
)     

app.use(express.static('public'))
app.use(express.json())
app.use(cors())

app.post('/create-payment-intent', async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({      // create a PaymentIntent with the amount and currency 
      amount: req.body.amount,      // amount in cents
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.send({ clientSecret: paymentIntent.client_secret })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
});

app.get('/success', async (req, res) => {
  res.send('Payment succesful.')
  console.log()
});

app.post('/send-notification', (req, res) => {
  try {
    notificationapi.init(
      '6rs91tu4hhqtgp5a537u9i3ob8',      // clientId
      '11o707qve59km52smtjmqd8v1f1hrkp5t2r71b1k4nrj42svudbm'      // clientSecret
    )
    
    notificationapi.send({
      notificationId: 'new_comment',
      user: {
        id: '202006269@ub.ac.bw',
        email: req.body.email,
        number: "+15005550006" // Replace with your phone number
      },
      mergeTags: {
        'comment': 'You have succesfully subscribed to MotswanaMind Premium!',
        'commentI': 'commentId-1234-abcd-wxyz'
      }
    })
  } catch (error) {
    res.json({ error: error.message })
  }
});

app.listen(4242, () => console.log("Node server listening on port 4242!"))
