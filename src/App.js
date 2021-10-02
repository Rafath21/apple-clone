import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Ipad from './components/Ipad';
import Iphone from "./components/Iphone";
import Mac from "./components/Mac";
import Store from "./components/Store";
import Appletv from "./components/Appletv";
import Bag from "./components/Bag";
import Register from "./components/Register";
import Orders from "./components/Orders";
import Login from "./components/Login";
import AuthProvider from "./AuthProvider";
import Checkout from "./components/Checkout"
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Payment from "./components/Payment";
const promise=loadStripe("pk_test_51Ja1UGSFkqJZGOrfsOxNfWt7p6hlf0Ugfp50OLXBWRRcnJUimj4S7vWpc8laOqPeEs0pi4XZFvDnjsAD1PIx2D9d00r5KO6AV8");

function App() {
  return (
    <>
 
      <Router>
    <AuthProvider>

          <Switch>
           <Route path="/ipad">
            <Ipad/>
          </Route>
          <Route path="/iphone">
            <Iphone/>
          </Route>
         <Route path="/mac">
            <Mac/>
          </Route>
          <Route path="/store">
            <Store/>
          </Route>
          <Route path="/appletv">
            <Appletv/>
          </Route>
          <Route path="/bag">
            <Bag/>
          </Route>
           <Route path="/login">
            <Login/>
          </Route>
          <Route path="/orders">
            <Orders/>
          </Route>
           <Route path="/register">
            <Register/>
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
           <Payment/>
            </Elements>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
 </AuthProvider>

 </Router>
    </>
  );
}

export default App;
