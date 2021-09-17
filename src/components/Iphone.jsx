import { useEffect, useState, useContext } from "react";
import { firestore } from "../firebase";
import "../css/iphone.css";
import bagContext from "../context/bag/bagContext";
import Navbar from "./Navbar";
import toast, { Toaster } from "react-hot-toast";

let Iphone = () => {
  const { addToBag } = useContext(bagContext);
  const notify = () => {
    toast.success("Product added to the Bag!");
  };
  let [data, setData] = useState([]);
  console.log("ipad");
  useEffect(async () => {
    let info = await firestore.collection("iPhone").get();
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
      <Toaster position="top-right" />

      <div class="banner__container">
        <h1 class="banner__title">iPhone 12</h1>
        <p class="banner__subtitle">Blast past fast.</p>
        <p class="banner__trade-in">From 69900 before trade-in</p>
        <a href="" class="banner__learn-more">
          Learn more
        </a>
        <a href="" class="banner__buy-now">
          Buy now
        </a>
        <img src="https://firebasestorage.googleapis.com/v0/b/apple-clone-3ac22.appspot.com/o/home%2Fbanner-img.jpg?alt=media&token=318b2457-da46-41bc-aa80-73c47b876e90" />
      </div>
      <div class="section__1">
        <h1 class="section1__title">iPhone 12 Pro</h1>
        <p class="section1__subtitle">It's a leap year</p>
        <p class="section1__trade-in">From 119900 before trade-in</p>
        <a href="" class="section1__learn-more">
          Learn more
        </a>
        <a href="" class="section1__buy-now">
          Buy now
        </a>
        <img src="https://firebasestorage.googleapis.com/v0/b/apple-clone-3ac22.appspot.com/o/home%2Fsection-1.jpg?alt=media&token=f53cf8ca-311c-4dae-84cd-7ab9c91ecaff" />
      </div>
      <section class="iphone__container__section2">
        <h1>Which iphone is right for you?</h1>

        <div class="iphone__container__section2__items">
          {data.map((e) => {
            return (
              <div class="iphone__container__section2__item">
                <img src={e.mainImg} class="main-image" />
                <h2>{e.name}</h2>
                <p>From {e.range}</p>
                <img src={e.colors} class="colors-image" />
                <span>{e.title}</span>
                <button
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
                <h2>{e.allScreen}</h2>
                <p>{e.allScreenInfo}</p>
                <br />
                <img src={e.chipIcon} class="chip-logo" />
                <p>{e.chipInfo}</p>
                <img src={e.lteIcon} class="network-cellular" />
                <p>{e.lteInfo}</p>
                <img src={e.cameraIcon} class="camera-icon" />
                <p>{e.cameraInfo}</p>
                <img src={e.scannerIcon} class="scanner-icon" />
                <p>{e.scannerInfo}</p>
                <img src={e.accIcon} class="acc-icon" />
                <p>{e.accInfo}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Iphone;
