import { useState, useEffect, useContext } from "react";
import { firestore } from "../firebase";
import "../css/mac.css";
import Navbar from "./Navbar";
import toast, { Toaster } from "react-hot-toast";

import bagContext from "../context/bag/bagContext";
let Mac = () => {
  let [data, setData] = useState([]);
  const { addToBag, bagItems } = useContext(bagContext);
  const notify = () => {
    toast.success("Product added to the Bag!");
  };
  useEffect(async () => {
    let info = await firestore.collection("mac").get();
    let arr = [];
    info.forEach((doc) => {
      arr.push(doc.data());
      console.log(doc.data());
    });
    setData(arr);
  }, []);
  console.log(data);

  return (
    <>
      <Navbar />
      <main class="mac__container">
        <Toaster position="top-right" />

        <section class="mac__section1">
          <img
            class="small-banner"
            src="https://firebasestorage.googleapis.com/v0/b/apple-clone-3ac22.appspot.com/o/mac%2Fmac-banner-small.jpg?alt=media&token=55561345-4480-4e7b-9fbc-cf4481b8d10b"
          />
          <img
            class="large-banner"
            src="https://firebasestorage.googleapis.com/v0/b/apple-clone-3ac22.appspot.com/o/mac%2Fmac-banner.jpg?alt=media&token=8a2dbaec-109f-4ed1-9f7e-0aa87f0c6da6"
          />
        </section>
        <section class="mac__section2">
          <h1>Which Mac is right for you?</h1>
          <a>Compare all Mac models </a>
          <h2>Notebook</h2>
          <div class="mac__section2__items">
            {data.map((e) => {
              return (
                <div class="mac__section2__item">
                  <img src={e.mainImg} />
                  <h2>{e.name}</h2>
                  <p>From {e.range}</p>
                  <img src={e.colors} />
                  <button
                    className="mac__addtobag"
                    onClick={() => {
                      let product = {
                        id: e.id,
                        name: e.name,
                        price: e.range,
                        img: e.mainImg,
                      };
                      addToBag(product);
                      notify();
                    }}
                  >
                    Add to Bag
                  </button>
                  <h2>{e.retinaDisplay}</h2>
                  <p>Retina display</p>
                  <img src={e.chip} />
                  <p>{e.chipType}</p>
                  <img src={e.uniMem} />
                  <h3>{e.unifMeminfo}</h3>
                  <p>For increased performance and power efficency</p>
                  <h2>{e.storage}</h2>
                  <p>{e.storageInfo}</p>
                  <img src={e.batteryImg} />
                  <p>{e.batteryLife}</p>
                  <img src={e.videoCam} />
                  <p>{e.hdcam}</p>
                  <h2>{e.weight}</h2>
                  <p>Weight</p>
                  <img src={e.fingerprint} />
                  <p>{e.touchType}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section class="mac__section3">
          <img src="https://firebasestorage.googleapis.com/v0/b/apple-clone-3ac22.appspot.com/o/mac%2Fsection3.png?alt=media&token=44bdf121-bf82-4e07-825e-41ed3c6f5dd5" />
          <div class="mac__section3__content">
            <p>Buy a Mac for college. Get AirPods.◊</p>
            <a>See with education pricing </a>
          </div>
        </section>
        <section class="mac__section4">
          <div class="mac__section4__content">
            <h1>Get 3% Daily Cash back with Apple Card.</h1>
            <p>
              And pay for your new Mac over 12 months, interest‑free when you
              choose to check out with Apple Card Monthly Installments.
            </p>
            <a>Learn more </a>
          </div>
          <img src="https://firebasestorage.googleapis.com/v0/b/apple-clone-3ac22.appspot.com/o/mac%2Fsection4.jpg?alt=media&token=48d6da66-63d9-431a-b70e-50737e5428d2" />
        </section>
        <section class="mac__section5">
          <div class="mac__section__5a">
            <h4>Accessories</h4>
            <p>Explore Mac accessories.</p>
            <button>Shop</button>
            <img src="https://firebasestorage.googleapis.com/v0/b/apple-clone-3ac22.appspot.com/o/mac%2Fsection5a.jpg?alt=media&token=5eef817d-e8e5-41e3-a09a-7913bf3a1760" />
          </div>
          <div class="mac__section__5b">
            <h4>Apple Trade-In</h4>
            <p>Get credit toward a new Mac.</p>
            <span>
              Just trade in your eligible computere credit or recycle it for
              free. It's good for you and the planet
            </span>
            <a>Find your trade-in value</a>
            <img src="https://firebasestorage.googleapis.com/v0/b/apple-clone-3ac22.appspot.com/o/mac%2Fsection5b.jpg?alt=media&token=a50ad300-3a9d-498c-bb97-a140aae92c00" />
          </div>
        </section>
        <section class="mac__section6"></section>
      </main>
    </>
  );
};
export default Mac;
