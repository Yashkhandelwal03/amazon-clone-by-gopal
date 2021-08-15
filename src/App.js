import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Component/Header";
import Checkout from "./Component/Checkout";
import "./App.css";
import Login from "./Component/Login";
import { auth } from "./Component/firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Component/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51JJKIcSCxs6bYw4zXBpYEytONOA39IBCImca6AvCjjjv6nPk2rAKTajCMHVhNH7hL4rItHvXfoUdon7UKfB0MoUl00juBnMQWg"
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The USER is >>>", authUser);

      if (authUser) {
        //The user has just logged in/The user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //The user has just logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
