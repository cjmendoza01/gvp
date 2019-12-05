import React, { useEffect, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import Home from "./Components/pages/Home";
import Navbar from "./Components/layout/Navbar";
import Contact from "./Components/pages/Contact";
import About from "./Components/pages/About";
import Login from "./Components/login/Login";
import Forget from "./Components/login/Forget";
import Phonever from "./Components/login/Phonever";
import Register from "./Components/login/Register";
import PaymentServices from "./Components/pages/Sevices/PaymentServices";
import LoadingServices from "./Components/pages/Sevices/LoadingServices";
import PadalaExpress from "./Components/pages/Sevices/PadalaExpress";
import MoneyExchange from "./Components/pages/Sevices/MoneyExchange";
import Recovery from "./Components/login/Recovery";
import Wallet from "./Components/main/Wallet";
import { Provider } from "react-redux";
import store from "./store";
const App = () => {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <Fragment>
        <Router>
          <Navbar />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/ForgetPassword" component={Forget} />
              <Route path="/Recovery/:id" component={Recovery} />
              <Route exact path="/about" component={About} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/phone" component={Phonever} />
              <Route
                exact
                path="/PaymentServices"
                component={PaymentServices}
              />
              <Route
                exact
                path="/LoadingServices"
                component={LoadingServices}
              />
              <Route exact path="/Padala" component={PadalaExpress} />
              <Route exact path="/Exchange" component={MoneyExchange} />
              <Route path="/Wallet" component={Wallet} />
            </Switch>
          </div>
        </Router>
      </Fragment>
    </Provider>
  );
};

export default App;
