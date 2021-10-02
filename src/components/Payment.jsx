import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "../css/checkout.css";
import Navbar from "./Navbar";
import React, { useEffect, useState, useContext } from "react";
import axios from "../axios";
import bagContext from "../context/bag/bagContext";
import { AuthContext } from "../AuthProvider";
import { useHistory } from "react-router-dom";
import { auth, storage, firestore } from "../firebase";

let Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  let [noOfItems, setnoOfItems] = useState(0);
  let { bagItems, getBagTotal, dispatch, emptyBag } = useContext(bagContext);
  let value = useContext(AuthContext);
  let price = getBagTotal(bagItems);

  /*useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // url: `/payments/create?total=400`,
        url: `/payments/create?total=${price * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [bagItems]);*/

  useEffect(() => {
    let count = 0;
    bagItems.map((e) => {
      count++;
    });
    console.log(count);
    setnoOfItems(count);
  }, [bagItems]);

  console.log("The secret is", clientSecret);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    /*const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(async ({ paymentIntent }) => {*/
    setTimeout(() => {
      setSucceeded(true);
      setError(null);
      setProcessing(false);
    }, 4000);

    await firestore
      .collection("users")
      .doc(value.uid)
      .collection("orders")
      .add({
        orders: bagItems,
      });
    emptyBag();
    history.replace("/orders");
    //});
  };
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <>
      <Navbar />
      <div className="payment__section">
        <div className="payment__items">
          <h2>{noOfItems} item(s).</h2>
        </div>
        <div className="payment">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__price">${price}</div>
              <button disabled={processing || disabled || succeeded}>
                <span>{processing ? <p>Processing</p> : "Buy now"}</span>
              </button>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Payment;
