import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Navbar";
import Products from "../storeProducts";
import { carousel1 } from "../storeCarousel.js";
import { carousel2 } from "../storeCarousel.js";
import { Link } from "react-router-dom";
import "../css/store.css";
import toast, { Toaster } from "react-hot-toast";
import { useContext } from "react";
import bagContext from "../context/bag/bagContext";
let Store = () => {
  const { addToBag, bagItems } = useContext(bagContext);
  console.log(bagItems);

  const notify = () => {
    toast.success("Product added to the Bag!");
  };
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplay: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          // slidesToScroll: 2,
          infinite: true,
          dots: true,
          cssEase: "linear",
        },
      },
    ],
  };
  let settings1 = { ...settings };
  settings1.dots = false;
  settings1.slidesToShow = 3;
  settings1.autoplay = false;
  settings1.responsive[0].settings.slidesToShow = 1;
  let settings3 = {
    ...settings,
  };
  settings3.autoplay = false;
  settings3.dots = false;
  settings3.slidesToShow = 3;
  return (
    <>
      <Navbar />

      <div className="store__container">
        <Toaster position="top-right" />

        <div className="store__container__heading">
          <h1>
            <b>Store.</b>
          </h1>
          <p>
            The best way to buy the
            <br />
            products you love.
          </p>
        </div>

        <div className="store__container__carousel1">
          <div className="store__container__carousel1__cards">
            <Slider {...settings}>
              {carousel1.map((e) => {
                return (
                  <div
                    className="store__container__carousel1__card"
                    onClick={() => {
                      window.location.replace("/store/#section3");
                    }}
                  >
                    <img src={e.img} />
                    <h5>{e.name}</h5>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        <div className="store__container__carousel2">
          <div className="store__container__caraousel2__cards">
            <Slider {...settings1}>
              {carousel2.map((e) => {
                return (
                  <div className="store__container__carousel2__card">
                    <p className="specail-font">{e.p1}</p>
                    <h3>{e.h3}</h3>
                    <p>{e.p2}</p>
                    <img src={e.img} />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        <div className="store__container__section3">
          <h1> Help is here.</h1>
          <p> Whenever and however you need it.</p>
          <div className="store__container__section3__inner">
            <div className="store__container__section3__inner1">
              <p>Shop one on one with a specialist online.</p>
              <img src="https://firebasestorage.googleapis.com/v0/b/apple-clone-3ac22.appspot.com/o/store%2Fstoresection3%2Fstore-card-50-specialist-202108.jpg?alt=media&token=d7b92834-2ff6-428f-b5a0-cf35bbd649a1" />
            </div>
            <div className="store__container__section3__inner2">
              <div className="store__container__section3__inner2a">
                <p>Get to know your new device with a free Personal Session</p>
                <img src="https://firebasestorage.googleapis.com/v0/b/apple-clone-3ac22.appspot.com/o/store%2Fstoresection3%2Fstore-card-25-genius-202108.jpg?alt=media&token=8364715d-e889-4a7e-86f8-71baafc72713" />
              </div>
              <div className="store__container__section3__inner2b">
                <p>Get Genius Support from Apple experts.</p>
                <img src="https://firebasestorage.googleapis.com/v0/b/apple-clone-3ac22.appspot.com/o/store%2Fstoresection3%2Fstore-card-25-apps-202108.jpg?alt=media&token=66a90503-b2eb-425e-857a-28d285c62d53" />
              </div>
            </div>
          </div>
        </div>
        <div className="store__container__products">
          <div className="store__container__products__items" id="section3">
            <Slider {...settings3}>
              {Products.map((e) => {
                return (
                  <div className="store__container__products__item">
                    <img src={e.img} />
                    <h3>{e.name}</h3>
                    <h4>{e.price}</h4>
                    <button
                      onClick={() => {
                        let product = {
                          id: e.id,
                          name: e.name,
                          price: e.price,
                          img: e.img,
                        };
                        addToBag(product);
                        notify();
                      }}
                    >
                      Add to Bag
                    </button>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};
export default Store;
