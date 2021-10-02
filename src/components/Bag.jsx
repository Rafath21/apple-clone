import "../css/bag.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { AuthContext } from "../AuthProvider";
import { Redirect } from "react-router-dom";
import { auth, storage, firestore } from "../firebase";
import { useContext, useEffect, useState } from "react";
import bagContext from "../context/bag/bagContext";
import toast, { Toaster } from "react-hot-toast";

let Bag = () => {
  let value = useContext(AuthContext);
  let [totalAmt, settotalAmt] = useState(0);
  let { bagItems, removeItem, getBagTotal } = useContext(bagContext);
  const notify = () => {
    toast.error("Product removed from the Bag!");
  };
  useEffect(() => {
    settotalAmt(getBagTotal(bagItems));
  }, [bagItems]);
  return (
    <>
      <Navbar />
      {value ? "" : <Redirect to="/register" />}
      <div className="bag__container">
        <Toaster position="top-right" />

        <div className="bag__items__container">
          <div className="bag__items">
            {bagItems.map((e) => {
              return (
                <>
                  <div className="bag__item">
                    <img src={e.img} />
                    <h3>{e.name}</h3>
                    <h2>{e.price}</h2>
                    <button
                      className="bag-item-btn"
                      onClick={() => {
                        removeItem(e.id);
                        notify();
                      }}
                    >
                      Remove from Bag
                    </button>
                  </div>
                  <hr></hr>
                </>
              );
            })}
          </div>
        </div>
        <span className="bag__total">
          <h2>Total amount:</h2>
          <p>${totalAmt}</p>
        </span>
        <Link
          to={{
            pathname: "/payment",
          }}
          style={{ textDecoration: "none" }}
        >
          <button className="ptc">Proceed to Checkout</button>
        </Link>
        <button
          className="ptc"
          onClick={() => {
            auth.signOut();
          }}
        >
          Sign Out
        </button>
      </div>
    </>
  );
};
export default Bag;
