import "../css/Home.css";
import AppleIcon from "@material-ui/icons/Apple";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import MenuIcon from "@material-ui/icons/Menu";
import { AuthContext } from "../AuthProvider";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../firebase";
import { useState } from "react";
import { useEffect } from "react";
import bagContext from "../context/bag/bagContext";
import ClearIcon from "@material-ui/icons/Clear";
let Navbar = () => {
  let value = useContext(AuthContext);
  let { bagItems, emptyBag } = useContext(bagContext);
  let [open, setOpen] = useState(false);
  let [count, setCount] = useState(0);
  useEffect(() => {
    let lcount = 0;
    bagItems.map((e) => {
      lcount++;
    });
    setCount(lcount);
  }, [bagItems]);
  return (
    <>
      <div class="navbar__container">
        <NavLink
          to="/"
          activeStyle={{ color: "#ffffffc8" }}
          style={{ textDecoration: "none" }}
          className="text-link"
        >
          <div class="nav__logo">
            <AppleIcon />
          </div>
        </NavLink>
        <div className={open ? "nav-links active" : "nav-links"}>
          <NavLink
            to="/store"
            activeStyle={{ color: "#ffffffc8" }}
            style={{ textDecoration: "none" }}
            className="text-link"
          >
            <div class="nav__store">Store</div>
          </NavLink>
          <NavLink
            to="/mac"
            activeStyle={{ color: "#ffffffc8" }}
            className="text-link"
            style={{ textDecoration: "none" }}
          >
            <div class="nav__mac">Mac</div>
          </NavLink>
          <NavLink
            activeStyle={{ color: "#ffffffc8" }}
            to="/ipad"
            style={{ textDecoration: "none" }}
            className="text-link"
          >
            <div class="nav__ipad">iPad</div>
          </NavLink>
          <NavLink
            activeStyle={{ color: "#ffffffc8" }}
            to="/iphone"
            style={{ textDecoration: "none" }}
            className="text-link"
          >
            <div class="nav__iPhone">iPhone</div>
          </NavLink>
          <NavLink
            activeStyle={{ color: "#ffffffc8" }}
            to="/appletv"
            style={{ textDecoration: "none" }}
            className="text-link"
          >
            <div class="nav__appleTv">Apple TV</div>
          </NavLink>
          <NavLink
            activeStyle={{ color: "#ffffffc8" }}
            to="/orders"
            style={{ textDecoration: "none" }}
            className="text-link"
          >
            <div class="nav__orders">Orders</div>
          </NavLink>
          <div>
            {value ? <p className="email">{value.email}</p> : ""}
            <div>
              {value ? (
                <button
                  className="signout-btn"
                  onClick={() => {
                    auth.signOut();
                    emptyBag();
                  }}
                >
                  Sign Out
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <NavLink
          activeStyle={{ color: "#ffffffc8" }}
          to="/bag"
          style={{ textDecoration: "none" }}
          className="text-link"
        >
          <div class="nav__bag">
            <LocalMallIcon />
            <span>{count}</span>
          </div>
        </NavLink>
        <div
          className="hamburger"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? <ClearIcon /> : <MenuIcon />}
        </div>
      </div>
    </>
  );
};
export default Navbar;
