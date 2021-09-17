import Navbar from "./Navbar";
import "../css/appletv.css";
import { useContext } from "react";
import bagContext from "../context/bag/bagContext";
import toast, { Toaster } from "react-hot-toast";

let Appletv = () => {
  const { addToBag } = useContext(bagContext);
  const notify = () => {
    toast.success("Product added to the Bag!");
  };
  return (
    <>
      <Navbar />
      <div className="appletv__container">
        <Toaster position="top-right" />

        <div className="appletv__section1">
          <video controls autoplay="true" loop="true">
            <source
              src="https://firebasestorage.googleapis.com/v0/b/apple-clone-3ac22.appspot.com/o/AppleTv%2Flarge.mp4?alt=media&token=51559d2d-1712-4859-85e8-8a1ff086957f"
              type="video/mp4"
            ></source>
          </video>
          <div className="appletv__section1__overlay">
            <embed src="https://firebasestorage.googleapis.com/v0/b/apple-clone-3ac22.appspot.com/o/AppleTv%2Fapple_tv_plus_dark__fntbqaxjuouy_large.svg?alt=media&token=b853c52f-5984-48f3-b50d-b1196e9b0268" />
            <h2>More original than ever.</h2>
            <p>
              New Apple Original series and movies <br />
              coming this year.
            </p>
          </div>
        </div>
        <div className="appletv__section2">
          <img src="https://firebasestorage.googleapis.com/v0/b/apple-clone-3ac22.appspot.com/o/AppleTv%2Fapple_tv_4k_logo__ezeq152chmaa_large.png?alt=media&token=f781e93a-b13a-4d7e-8293-6edf4b3b165e" />
          <p>A higher definition of TV.</p>
          <button
            onClick={() => {
              let product = {
                id: "appletv",
                name: "Apple TV",
                price: "$179.99",
                img: "https://firebasestorage.googleapis.com/v0/b/apple-clone-3ac22.appspot.com/o/AppleTv%2Fapple_tv_4k_remote__nuhoyzf08qaq_large.jpg?alt=media&token=df7db68a-4062-429a-bb96-148384f0e965",
              };
              addToBag(product);
              notify();
            }}
          >
            Add to Bag
          </button>
          <img src="https://firebasestorage.googleapis.com/v0/b/apple-clone-3ac22.appspot.com/o/AppleTv%2Fapple_tv_4k_remote__nuhoyzf08qaq_large.jpg?alt=media&token=df7db68a-4062-429a-bb96-148384f0e965" />
          <span>
            Get 3 months of Apple TV+ free when you buy an Apple TV 4K.1
          </span>
        </div>
      </div>
    </>
  );
};
export default Appletv;
