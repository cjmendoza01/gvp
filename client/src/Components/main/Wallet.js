import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setLoading, clearError } from "../../actions/usersAction";
import { Route, Link, Switch } from "react-router-dom";
import Spinner from "../layout/Spinner";
import BuyLoad from "./BuyLoad/BuyLoad";
import LoadAmount from "./BuyLoad/LoadAmount";
import Dashboard from "./Dashboard";
import Settings from "./Settings";
import MoneyTransfer from "./MoneyTransfer";
import M from "materialize-css/dist/js/materialize.min.js";
const Wallet = props => {
  useEffect(() => {
    // props.setLoading();
  }, []);
  const { path } = props.match;

  const { user, loading, error, status } = props.users;
  const token = localStorage.getItem("token");
  if (!token) {
    props.history.push("/login");
  }
  if (loading) {
    return <Spinner />;
  }
  if (error) {
    M.toast({ html: error });
    props.clearError();
  }
  if (status === "NewPassword") {
    props.history.push("/");
    M.toast({ html: "Password Changed" });
  }

  return (
    <div className="fade ">
      <div className="nav-bar hide-on-med-and-down">
        <ul id="nav-ul">
          <li className="li">
            <i className="small material-icons">account_circle</i>Account
          </li>{" "}
          <li className="li">
            <i className="small material-icons">dashboard</i>
            <a href="/Wallet/"> Dashboard</a>
          </li>
          <li className="li">
            <div>
              <i className="small material-icons">stay_current_portrait</i>
              <Link to="/Wallet/BuyLoad">Buy Load</Link>
            </div>
          </li>
          <li>
            <div>
              <i className="small material-icons">monetization_on</i>
              <Link to="/Wallet/Transfer">Transfer Money</Link>
            </div>
          </li>
          <li>
            <div>
              <i className="small material-icons">settings </i>
              <Link to="/Wallet/Settings">Settings</Link>
            </div>
          </li>
        </ul>
      </div>
      <div className="walletop grey lighten-5 show-on-medium-and-down hide-on-large-only">
        <div className="row">
          <div className="col s12">
            <div className="container">
              <div className="container col s4 center ">
                <div className="col s12 ">
                  <i className="small material-icons">account_circle</i>
                </div>
                <div className="col s12">Account</div>
              </div>
              <div className="col s4 center">
                <a href={`${path}/`}>
                  <div className="col s12">
                    <i className="small material-icons">dashboard</i>
                  </div>
                  <div className="col s12">Dashboard</div>
                </a>
              </div>
              <div className="col s4 center">
                <Link to={`${path}/BuyLoad`}>
                  <div className="col s12">
                    <i className="small material-icons">
                      stay_current_portrait
                    </i>
                  </div>
                  <div className="col s12">Buy Load</div>
                </Link>
              </div>
              <div className="col s4 center">
                <Link to={`${path}/Transfer`}>
                  <div className="col s12">
                    <i className="small material-icons">monetization_on</i>
                  </div>
                  <div className="col s12">Transfer Money</div>
                </Link>
              </div>
              <div className="col s4 center">
                <Link to={`${path}/Settings`}>
                  <div className="col s12">
                    <i className="small material-icons">settings </i>
                  </div>
                  <div className="col s12">Settings</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div style={{ width: "20%" }}></div> */}
      <div className="row">
        <div className="col s12 m12 l1"></div>
        <div className="col s12 m12 l11">
          <Switch>
            <Route path={`${path}/LoadAmount`} component={LoadAmount} />
            <Route path={`${path}/Settings`} component={Settings} />
            <Route path={`${path}/Transfer`} component={MoneyTransfer} />
            <Route path={`${path}/BuyLoad`} component={BuyLoad} />
            <Route path={`${path}/`} component={Dashboard} />
          </Switch>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps, { setLoading, clearError })(Wallet);
