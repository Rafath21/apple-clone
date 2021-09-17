const functions = require("firebase-functions");
const express=require("express");
const cors=require("cors");
const stripe=require("stripe")("sk_test_51Ja1UGSFkqJZGOrfQAeMiJkLwg2AD4udqpiMcypnJUQjEdTYcyyVuP1zisl8kWGPUaSaW5us9miRRl7kBlgBBZmy00tDQxPGKU");
//API
//App config
const app=express();
//Middlewares
app.use(cors({origin:true}))
app.use(express.json());
//API routes
app.get('/',(req,res)=>{
    res.status(200).send("Hello world");
})
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request received for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//http://localhost:5001/apple-clone-3ac22/us-central1/api
//Listen command
exports.api=functions.https.onRequest(app)


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
