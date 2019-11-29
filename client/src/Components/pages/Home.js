import React, { useEffect } from "react";
import "materialize-css/dist/js/materialize.min.js";
import M from "materialize-css/dist/js/materialize.min.js";
import img1 from "./images/background1.jpg";
import img2 from "./images/background4.jpg";
import img3 from "./images/background3.jpg";
import Footer from "../layout/Footer";

const Home = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <div className="fade">
      <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
          <div className="container">
            <br />
            <br />
            <h1
              className="header center teal-text text-lighten-2"
              style={{ color: "white" }}
            >
              Send <i style={{ color: "yellow" }}> Money</i> Fast
            </h1>
            <div className="row center">
              <h5 className="header col s12 light" style={{ color: "white" }}>
                All you need is a QR code and a wallet to transfer and receive
                money anywhere. Money will be transferred instantly anywhere.
              </h5>
            </div>
            <div className="row center">
              <a
                href=""
                className="btn-large waves-effect waves-light teal lighten-1"
              >
                Get Started
              </a>
            </div>
            <br />
            <br />
          </div>
        </div>
        <div className="parallax">
          <img src={img1} alt="Unsplashed background img 1" />
        </div>
      </div>

      <div className="section white">
        <div className="row container">
          <h2 className="header" style={{ color: "#259494" }}>
            Pay bills and shop anywhere
          </h2>
          <p className="grey-text text-darken-3 lighten-3">
            With GPX wallet you can pay your bills and shop online anytime or
            anywhere. You can even use your online bank acount to cash in
            anytime
          </p>
        </div>
      </div>

      <div className="parallax-container">
        <div className="parallax" style={{ height: "200px" }}>
          <img src={img2} alt="" />
        </div>
      </div>

      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center brown-text">
                  <i className="material-icons">flash_on</i>
                </h2>
                <h5 className="center">Shop anytime</h5>

                <p className="light">
                  With GPX enjoy cardless shopping online with our app where all
                  products are guaranteed genuine and authentic.
                </p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center brown-text">
                  <i className="material-icons">group</i>
                </h2>
                <h5 className="center">Start your own Bussiness</h5>

                <p className="light">
                  You can start your e-loading business at home or anywhere as
                  long as you have your mobile phone.
                </p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center brown-text">
                  <i className="material-icons">settings</i>
                </h2>
                <h5 className="center">Easy to work with crypto</h5>

                <p className="light">
                  Trading on crypto and other currencies are possible using our
                  app. Buy low and sell high is the key.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
          <div className="container">
            <br />
            <br />
            <h1 className="header center teal-text text-lighten-2">
              GVPX wallet
            </h1>
            <div className="row center">
              <h5 className="header col s12 light" style={{ color: "white" }}>
                Make the most of your money.
              </h5>
            </div>
            <div className="row center">
              <a
                href=""
                className="btn-large waves-effect waves-light teal lighten-1"
              >
                Get Started
              </a>
              <p className="light" style={{ color: "#ffffff" }}>
                We did most of the heavy lifting for you to provide a default
                stylings that incorporate our custom components. Additionally,
                we refined animations and transitions to provide a smoother
                experience for developers.
              </p>
            </div>
            <br />
            <br />
          </div>
        </div>
        <div className="parallax">
          <img src={img3} alt="Unsplashed background img 1" />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
