const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51JJKIcSCxs6bYw4zkKfOF2lnv7KFBYReAysT5D7DefeGrExjAH0s7POGjAQG2n9ITL0nXpsZRNJiQb40jhNNE5X0009ALRgBcO"
);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => {
  response.status(200).send("Hello");
});

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
  
    console.log("Payment recieved for amount",total);
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });
  
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
});


exports.api = functions.https.onRequest(app);

//Example endpoint
// http://localhost:5001/clone-14cce/us-central1/api