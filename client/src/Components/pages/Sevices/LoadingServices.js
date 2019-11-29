import React from "react";
import Footer from "../../layout/Footer";

import Ps1 from "../images/PaymentS3.jpg";
import Globe from "../images/Globe.png";

import sun from "../images/sun.png";
import smart from "../images/smart.jpg";
import tm from "../images/tm.png";
import tnt from "../images/tnt.png";

const LoadingServices = () => {
  return (
    <div className="fade">
      <br />

      <div className="container">
        <div>
          <img src={Ps1} alt="" className="img2" />
          {/* <div class="centered">Centered</div> */}
        </div>
        {/* <div>
        <img src={load} className="img1" style={{ height: "5%" }} />
      </div> */}
        <h1 className="flow-text center">Loading Services </h1>
        <div className="divider"></div>
        <br />
        <div className="row">
          <div className="col s12 m4 l3">
            <div className="card">
              <img src={Globe} alt="" className="img1" />
            </div>
          </div>
          {/* 
          <div className="col s12 m4 l3">
            <div className="card">
              <img src={pldt} className="img1" />
            </div>
          </div> */}

          <div className="col s12 m4 l3">
            <div className="card">
              <img src={sun} alt="" className="img1" />
            </div>
          </div>

          <div className="col s12 m4 l3">
            <div className="card">
              <img src={tm} alt="" className="img1" />
            </div>
          </div>

          <div className="col s12 m4 l3">
            <div className="card">
              <img src={tnt} alt="" className="img1" />
            </div>
          </div>
          <div className="col s12 m4 l3">
            <div className="card">
              <img src={smart} alt="" className="img1" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default LoadingServices;
