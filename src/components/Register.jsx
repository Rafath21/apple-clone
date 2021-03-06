import "../css/App.css";
import { signInWithGoogle, signUpWithUsername, auth } from "../firebase";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

let Register = () => {
  let value = useContext(AuthContext);
  let [currUserEmail, setCurrUserEmail] = useState("");
  let [currUserPswd, setCurrUserPswd] = useState("");
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return (
    <div>
      <Navbar />
      {value ? <Redirect to="/bag" /> : ""}
      <div className="register-form-container">
        <div class="form-container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label for="email">
            <b>Email</b>
          </label>
          <input
            onChange={(e) => {
              setCurrUserEmail(e.currentTarget.value);
            }}
            class="email-input"
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            required
          />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            onChange={(e) => {
              setCurrUserPswd(e.currentTarget.value);
            }}
            class="password-input"
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="psw"
            required
          />
          <hr />

          <button
            onClick={(e) => {
              e.preventDefault();

              if (!currUserEmail.match(validRegex)) {
                alert("Invalid email address!");
                return;
              }
              if (currUserPswd.length < 6) {
                alert("Password must have at least 6 characters");
                return;
              }
              auth
                .createUserWithEmailAndPassword(currUserEmail, currUserPswd)
                .then((res) => {
                  // console.log(res);
                })
                .catch((err) => {
                  alert(err.message);
                });
            }}
            type="submit"
            class="registerbtn"
          >
            Register
          </button>
        </div>
        <div class="container-signin">
          <button onClick={signInWithGoogle} className="login-with-google">
            SignUp with Google
          </button>
        </div>
        <div class="container-signin">
          <p>
            Already have an account?
            <Link className="sign-in-link" to="/login">
              Sign in
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};
export var currUserName;

export default Register;
