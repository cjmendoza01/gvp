import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "materialize-css/dist/js/materialize.min.js";
import "../../App.css";
import { connect } from "react-redux";

const Navbar = ({ users: { isAuthenticated } }) => {
  const logout = () => {
    localStorage.clear("token");
  };
  const token = localStorage.getItem("token");
  return (
    <div>
      <nav className="black">
        <div
          className="nav-wrapper"
          style={{
            // position: "fixed",
            fontSize: "25px",
            alignItems: "center",
            paddingLeft: "25px"
          }}
        >
          <div className="container">
            <Link to="/" style={{ fontWeight: "700", fontStyle: "Italic" }}>
              <strong style={{ fontWeight: "900", color: "#33ccff" }}>
                GVPX
              </strong>
              .PH
            </Link>

            <a href="" data-target="mobile-menu" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>

            {/* <div style={{ position: "relative" }}> */}
            <ul
              className="right hide-on-med-and-down"
              style={{ paddingRight: "20px" }}
            >
              <li>
                <a href="/">Home</a>
              </li>

              <li>
                {/* <a> */}
                <Link to="/about">About Us </Link>
                {/* </a> */}
              </li>

              <li>
                <a href="" className="dropdown-trigger" data-target="dropdown2">
                  Services
                </a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              {!token ? (
                <Fragment>
                  <li>
                    <a href="/login">Login</a>
                  </li>
                  <li>
                    <a href="/register">Register</a>
                  </li>
                </Fragment>
              ) : (
                <Fragment>
                  <li>
                    {" "}
                    <a href="/Wallet">Wallet</a>
                  </li>
                  <li>
                    {" "}
                    <a href="" onClick={logout}>
                      Logout
                    </a>
                  </li>
                </Fragment>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* dropdown */}
      {/* <ul
        id="dropdown1"
        className="dropdown-content"
        // style={{ paddingTop: "50px" }}
      >
        <li>
          <a href="">Profile</a>
        </li>
        <li>
          <a href="">People Behind</a>
        </li>
        <li>
          <a>History</a>
        </li>
        <li>
          <a>Foundation</a>
        </li>
      </ul>
 */}
      <ul
        id="dropdown2"
        className="dropdown-content"
        // style={{ paddingTop: "50px" }}
      >
        {" "}
        <li>
          <Link to="/PaymentServices">Payment Services </Link>
        </li>
        <li>
          <Link to="LoadingServices">Loading Services</Link>
        </li>
        <li>
          <Link to="Padala">Padala Express</Link>
        </li>
        <li>
          <Link to="OnlineMall">Online Mall</Link>
        </li>
        <li>
          <Link to="Exchange">Exchange</Link>
        </li>
        <li>
          <Link to="WalletTransfer">Wallet Transfer</Link>
        </li>
      </ul>

      {/* sidenav */}

      <ul className="sidenav" id="mobile-menu">
        <div style={{ height: "100px" }}></div>
        <li>
          <ul className="collapsible">
            <li>
              <div className="collapsible-header">
                <a href="/" style={{ color: "black" }}>
                  Home
                </a>
              </div>
            </li>
            <li>
              <div className="collapsible-header">
                <Link to="/about" style={{ color: "black" }}>
                  About Us
                </Link>
              </div>
            </li>
            <li>
              <div className="collapsible-header">Services</div>
              <div className="collapsible-body">
                <ul>
                  <li>
                    <Link to="/PaymentServices">Payment Services </Link>
                  </li>
                  <li>
                    <Link to="LoadingServices">Loading Services</Link>
                  </li>

                  <li>
                    <Link to="/Padala">Padala Express </Link>
                  </li>
                  <li>
                    <Link to="/OnlineMall">Online Mall</Link>
                  </li>

                  <li>
                    <Link to="/Exchange">Exchange </Link>
                  </li>

                  <li>
                    <a>Wallet Transfer</a>
                  </li>
                </ul>{" "}
              </div>
            </li>
            {!token ? (
              <Fragment>
                <li>
                  <div className="collapsible-header">
                    <a href="/login" style={{ color: "black" }}>
                      Login
                    </a>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header">
                    <Link to="/register" style={{ color: "black" }}>
                      Register
                    </Link>
                  </div>
                </li>
              </Fragment>
            ) : (
              <Fragment>
                <li>
                  {" "}
                  <div className="collapsible-header">
                    {" "}
                    <a href="/Wallet" style={{ color: "black" }}>
                      Wallet
                    </a>
                  </div>
                </li>
                <li>
                  {" "}
                  <div className="collapsible-header">
                    {" "}
                    <a href="" onClick={logout} style={{ color: "black" }}>
                      Logout
                    </a>
                  </div>
                </li>
              </Fragment>
            )}
          </ul>
        </li>
      </ul>
    </div>
  );
};
const mapStateToProps = state => ({
  users: state.users
});
export default connect(mapStateToProps, null)(Navbar);
