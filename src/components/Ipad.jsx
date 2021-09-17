import { useEffect, useState } from "react";
import { firestore } from "../firebase";
import "../css/ipad.css";
import Navbar from "./Navbar";
import { useContext } from "react";
import bagContext from "../context/bag/bagContext";
import toast, { Toaster } from "react-hot-toast";

let Ipad = () => {
  const { addToBag } = useContext(bagContext);
  const notify = () => {
    toast.success("Product added to the Bag!");
  };
  let [data, setData] = useState([]);
  console.log("ipad");
  useEffect(async () => {
    let info = await firestore.collection("iPad").get();
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
      <main class="ipad__container">
        <Toaster position="top-right" />

        <section class="ipad__container__section">
          <div class="ipad__container__section__content">
            <h1>iPad Pro</h1>
            <p>
              The ultimate iPad
              <br />
              experience
            </p>
            <span>From $799</span>
            <br />
            <a>Learn more </a>
          </div>
          <img src="https://firebasestorage.googleapis.com/v0/b/apple-clone-3ac22.appspot.com/o/Ipad%2Fsection1.jpg?alt=media&token=7a0a20c3-ef2a-476c-be27-ba0073482914" />
        </section>
        <section class="ipad__container__section2">
          <h1>Which iPad is right for you?</h1>

          <div class="ipad__container__section2__items">
            {data.map((e) => {
              return (
                <div class="ipad__container__section2__item">
                  <img src={e.mainImg} class="main-image" />
                  <h2 class="title">{e.name}</h2>
                  <p>From {e.range}</p>
                  <img src={e.colors} class="colors-image" />
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
                  <hr />
                  <h2>{e.retinaInfo}</h2>
                  <br />
                  <img src={e.chipIcon} class="chip-logo" />
                  <p>{e.chipInfo}</p>
                  <img src={e.usbIcon} class="connector-logo" />
                  <p>{e.usbInfo}</p>
                  <img src={e.lteIcon} class="network-cellular" />
                  <p>{e.lteInfo}</p>
                  <img src={e.applePencilIcon} class="apple-pencil" />
                  <p>{e.applePencilInfo}</p>
                  <img src={e.magicKbimage} class="magic-keyboard" />
                  <p>{e.magicKbinfo}</p>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};
export default Ipad;
