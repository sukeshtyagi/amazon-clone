const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51OjCk5SJjrgblpJJF8wieozizPoimD6zDN4LaFPxsqIdBeu5L2O38NAm0O2CdfBGqHtPAqvy33luozcEomX9oPpZ000x4AxQQW"
);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payment/create", async (request, response) => {
  console.log(response);
  const total = request.query.total;
  console.log("payment request received", total);

  const paymentIntent = await stripe.paymentIntent.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

//api: http://127.0.0.1:5001/clone-65449/us-central1/api/
