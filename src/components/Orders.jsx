import { AuthContext } from "../AuthProvider";
import { firestore } from "../firebase";
import { useEffect, useState, useContext } from "react";
import "../css/Orders.css";
import Navbar from "./Navbar";

let Orders = () => {
  let [orders, setOrders] = useState([]);
  let value = useContext(AuthContext);
  useEffect(async () => {
    if (value) {
      let arr = [];
      let querySnapshot = await firestore
        .collection("users")
        .doc(value.uid)
        .collection("orders")
        .get();
      querySnapshot.docs.map((doc) => {
        arr.push(doc.data());
      });
      setOrders(arr);
    } else {
      setOrders([]);
    }
  }, []);
  return (
    <>
      <Navbar />
      <div className="orders__container">
        <h1>Your Orders</h1>
        {orders.map((e) => {
          return e["orders"].map((element) => {
            return (
              <>
                <div className="order__item">
                  <img src={element.img} />
                  <h2>{element.name}</h2>
                  <h3>{element.price}</h3>
                </div>
                <hr />
              </>
            );
          });
        })}
      </div>
    </>
  );
};
export default Orders;
