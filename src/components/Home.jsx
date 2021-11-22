import Navbar from "./Navbar";
import "../css/Home.css";
import { Link } from "react-router-dom";

let Home = () => {
  return (
    <>
      <Navbar />
      <div class="banner__container">
        <h1 class="banner__title">iPhone 12</h1>
        <p class="banner__subtitle">Blast past fast.</p>
        <p class="banner__trade-in">From 69900 before trade-in</p>
        <Link
          to="/iphone"
          class="banner__learn-more"
          style={{ textDecoration: "none" }}
          id="link-tag"
        >
          Learn more
        </Link>
        <Link
          to="/iphone"
          class="banner__buy-now"
          style={{ textDecoration: "none" }}
          id="link-tag"
        >
          Buy now
        </Link>
        <img
          className="imgClass"
          src="https://firebasestorage.googleapis.com/v0/b/apple-clone-3ac22.appspot.com/o/home%2Fbanner-img.jpg?alt=media&token=318b2457-da46-41bc-aa80-73c47b876e90"
        />
      </div>
      <div class="section__1">
        <h1 class="section1__title">iPhone 12 Pro</h1>
        <p class="section1__subtitle">It's a leap year</p>
        <p class="section1__trade-in">From 119900 before trade-in</p>
        <Link
          to="/iphone"
          class="section1__learn-more"
          style={{ textDecoration: "none" }}
          id="link-tag"
        >
          Learn more
        </Link>
        <Link
          to="/store"
          class="section1__buy-now"
          style={{ textDecoration: "none" }}
          id="link-tag"
        >
          Buy now
        </Link>
        <img
          className="imgClass"
          src="https://firebasestorage.googleapis.com/v0/b/apple-clone-3ac22.appspot.com/o/home%2Fsection-1.jpg?alt=media&token=f53cf8ca-311c-4dae-84cd-7ab9c91ecaff"
        />
      </div>
      <div class="section__2">
        <h1 class="section2__title">iPhone 12 Pro</h1>
        <p class="section2__subtitle">It's a leap year</p>
        <Link
          to="/store"
          class="section2__learn-more"
          style={{ textDecoration: "none" }}
          id="link-tag"
        >
          Learn more
        </Link>
        <Link
          to="/store"
          class="section2__buy-now"
          style={{ textDecoration: "none" }}
          id="link-tag"
        >
          Buy now
        </Link>
        <img
          className="imgClass"
          src="https://firebasestorage.googleapis.com/v0/b/apple-clone-3ac22.appspot.com/o/home%2Fsection-2.jpg?alt=media&token=3f2b6046-be3e-420a-a17a-16ab405fab10"
        />
      </div>
      <div class="section__3">
        <div class="section__3a">
          <h1 class="section__3a__title">
            Buy a Max or iPad for university.
            <br />
            Get AirPods.
          </h1>
          <p class="section__3a__link">Save with education pricing </p>
          <img
            className="imgClass"
            src="https://firebasestorage.googleapis.com/v0/b/apple-clone-3ac22.appspot.com/o/home%2Fsection3a.jpg?alt=media&token=749738f0-9e2f-43b9-9593-247d234e9a62"
          />
        </div>
        <div class="section__3b">
          <h1 class="section__3b__title">W A T C H</h1>
          <p class="section__3b__series">S E R I E S 6</p>
          <br />
          <p class="section__3b__line">
            The future of health is on your wrist.
          </p>
          <br />
          <Link
            to="/store"
            class="section__3b__learn-more"
            style={{ textDecoration: "none" }}
            id="link-tag"
          >
            Learn more
          </Link>
          <Link
            to="/store"
            class="section__3b__buy"
            style={{ textDecoration: "none" }}
            id="link-tag"
          >
            Buy
          </Link>

          <img
            className="imgClass"
            src="https://firebasestorage.googleapis.com/v0/b/apple-clone-3ac22.appspot.com/o/home%2Fsection3b.jpg?alt=media&token=8bcb812a-acdd-44da-97da-60ed17f6d391"
          />
        </div>
      </div>
      <div class="section__4">
        <div class="section__4a">
          <h1 class="section__4a__title">iMac</h1>
          <p class="section__4a__subtitle">Say hello.</p>
          <Link
            to="/mac"
            class="section__4a__learn-more"
            style={{ textDecoration: "none" }}
            id="link-tag"
          >
            Learn more
          </Link>
          <Link
            to="/store"
            class="section__4a__buy"
            style={{ textDecoration: "none" }}
            id="link-tag"
          >
            Buy
          </Link>
          <img
            className="imgClass"
            src="https://firebasestorage.googleapis.com/v0/b/apple-clone-3ac22.appspot.com/o/home%2Fsection4a.jpg?alt=media&token=1b2e5bfb-538d-412f-93fd-9101adb2e3a2"
          />
        </div>
        <div class="section__4b">
          <h1 class="section__4b__title">AirTag</h1>
          <p class="section__4b__subtitle">
            Lose your knack for losing things.
          </p>
          <Link
            to="/store"
            class="section__4b__learn-more"
            style={{ textDecoration: "none" }}
            id="link-tag"
          >
            Learn more
          </Link>
          <Link
            to="/store"
            class="section__4b__buy"
            style={{ textDecoration: "none" }}
            id="link-tag"
          >
            Buy
          </Link>
          <img
            className="imgClass"
            src="https://firebasestorage.googleapis.com/v0/b/apple-clone-3ac22.appspot.com/o/home%2Fsection4b.jpg?alt=media&token=2a25763f-a5b3-40ed-9861-4b11d35970c5"
          />
        </div>
      </div>
      <div class="section__5">
        <div class="section__5a">
          <h1 class="section__5a__title">Music</h1>
          <p class="section__5a__subtitle">Introducing Spatial Audio</p>
          <Link
            to="/store"
            class="section__5a__listen-now"
            style={{ textDecoration: "none" }}
            id="link-tag"
          >
            Listen now
          </Link>
          <img
            className="imgClass"
            src="https://firebasestorage.googleapis.com/v0/b/apple-clone-3ac22.appspot.com/o/home%2Fsection5a.jpg?alt=media&token=4e427f25-560d-4c34-8aff-fa67fe9a0d3e"
          />
        </div>
        <div class="section__5b">
          <h1 class="section__5b__title">Apple Event</h1>
          <p class="section__5b__subtitle">
            Watch on 14 September at 10:30 PM IST
          </p>
          <Link
            to="/store"
            class="section__5b__learn-now"
            style={{ textDecoration: "none" }}
            id="link-tag"
          >
            Learn more
          </Link>
          <img
            className="imgClass"
            src="https://firebasestorage.googleapis.com/v0/b/apple-clone-3ac22.appspot.com/o/home%2Fsection5b.jpg?alt=media&token=0916405f-e259-4c8b-b026-3c0a5da10a03"
          />
        </div>
      </div>
    </>
  );
};
export default Home;
