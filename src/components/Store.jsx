import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Navbar";
import Products from "../storeProducts";
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

  let carousel1 = [
    {
      img: "https://firebasestorage.googleapis.com/v0/b/apple-clone-3ac22.appspot.com/o/store%2Fstorecor1%2Fcor1.png?alt=media&token=7d25f214-f2bc-4e9b-a5fa-7b8afb0585aa",
      name: "Mac",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/apple-clone-3ac22.appspot.com/o/store%2Fstorecor1%2Fcor12.png?alt=media&token=63858979-1d7f-4677-9067-58149bf9a979",
      name: "iPhone",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/apple-clone-3ac22.appspot.com/o/store%2Fstorecor1%2Fcor13.png?alt=media&token=4e88ad80-405c-42a6-82fb-d532ec9d1198",
      name: "iPad",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/apple-clone-3ac22.appspot.com/o/store%2Fstorecor1%2Fcor14.png?alt=media&token=cd2acb98-4d56-4e7d-b9fb-2a8b84db5eab",
      name: "Apple Watch",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/apple-clone-3ac22.appspot.com/o/store%2Fstorecor1%2Fcor15.png?alt=media&token=3bac0ecd-f945-4f88-b879-3a6559ea032f",
      name: "AirPods",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/apple-clone-3ac22.appspot.com/o/store%2Fstorecor1%2Fcor16.png?alt=media&token=5c468ed5-4cf3-43fb-af88-95eea0f2cb87",
      name: "AirTag",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/apple-clone-3ac22.appspot.com/o/store%2Fstorecor1%2Fcor17.png?alt=media&token=4a1050f6-5446-4a6b-ae37-352913b35627",
      name: "Apple TV",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/apple-clone-3ac22.appspot.com/o/store%2Fstorecor1%2Fcor18.png?alt=media&token=7e5de4b5-c9cf-41f8-8232-eab6d29dba2d",
      name: "HomePod mini",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/apple-clone-3ac22.appspot.com/o/store%2Fstorecor1%2Fcor19.png?alt=media&token=3278467d-c56c-454c-a5ac-a442db13b49d",
      name: "Accessories",
    },
  ];
  let carousel2 = [
    {
      p1: "BACK TO UNIVERSITY",
      h3: "Buy a Mac or iPad for university. Get AirPods.",
      p2: "Save with education pricing.",
      img: "https://firebasestorage.googleapis.com/v0/b/apple-clone-3ac22.appspot.com/o/store%2Fstorecor2%2Fstore-card-40-bts-202108.jpg?alt=media&token=b63a79af-51d5-43b5-a90f-5c222d4f0014",
    },
    {
      p1: "HOT SUMMER ACCESSORIES",
      h3: "Stick out.",
      p2: "Snap on a MagSafe case, wallet or wireless charger",
      img: "https://firebasestorage.googleapis.com/v0/b/apple-clone-3ac22.appspot.com/o/store%2Fstorecor2%2Fstore-card-40-imac-202108.jpg?alt=media&token=13e3832a-6801-4444-b33c-885dd0f2af50",
    },
    {
      p1: "IPHONE 12 AND IPHONE 12 MINI",
      h3: "Blast past fast",
      p2: "From $950.98",
      img: "https://firebasestorage.googleapis.com/v0/b/apple-clone-3ac22.appspot.com/o/store%2Fstorecor2%2Fstore-card-40-ipad-202108.jpg?alt=media&token=d7c6ab23-2457-4b7e-82b1-d28056485153",
    },
    {
      p1: "24-INCH IMAC",
      h3: "Customise your memory, storage, even colour.",
      p2: "$1,631.20",
      img: "https://firebasestorage.googleapis.com/v0/b/apple-clone-3ac22.appspot.com/o/store%2Fstorecor2%2Fstore-card-40-iphone-202108_GEO_EMEA.jpg?alt=media&token=746a79b0-7bca-4de4-965e-50943718a5ab",
    },
    {
      p1: "",
      h3: "The ultimate iPad experience.",
      p2: "iPad Pro. Apple Pencil. Magic keyboard. Buy them all together?",
      img: "https://firebasestorage.googleapis.com/v0/b/apple-clone-3ac22.appspot.com/o/store%2Fstorecor2%2Fstore-card-40-iphone-accessories-202108.jpg?alt=media&token=2c37a429-4b07-4434-9265-173024c09508",
    },
    {
      p1: "INTERNATIONAL COLLECTION",
      h3: "Worldwide style.",
      p2: "Show your stripes with a limited-edition Sport Loop.",
      img: "https://firebasestorage.googleapis.com/v0/b/apple-clone-3ac22.appspot.com/o/store%2Fstorecor2%2Fwatch-card-40-spring-202108.jpg?alt=media&token=4c4bb018-53c8-492d-9e05-ea2277f026d9",
    },
  ];
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
          slidesToScroll: 2,
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
                  <div className="store__container__carousel1__card">
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
          <div className="store__container__products__items">
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
