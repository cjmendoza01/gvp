import React from "react";

import Ps1 from "../images/PaymentS1.jpg";
// import Ps2 from "../images/PaymentS2.jpg";
import dfa from "../images/dfa.jpg";
import maynilad from "../images/maynilad.jpg";
import Globe from "../images/Globe.png";
import meralco from "../images/meralco.png";
import pldt from "../images/pldt.png";
// import sss from "../images/sss.png";
import sun from "../images/sun.png";

const PaymentServices = () => {
  return (
    <div className="fade">
      <br></br>

      <div className="container">
        {" "}
        <div>
          <img src={Ps1} alt="" className="img2" />
        </div>
        <h1 className="flow-text center">Payment Services</h1>
        <div className="divider"></div>
        <br />
        <div className="row">
          <div className="col s6 m4 l3">
            <div className="card">
              <div></div>
              <div className="card2">
                <img src={dfa} alt="" className="img1" />
              </div>
              <div></div>
            </div>
          </div>

          <div className="col s6 m4 l3">
            <div className="card">
              <img src={meralco} alt="" className="img1" />
            </div>
          </div>

          <div className="col s6 m4 l3">
            <div className="card">
              <img
                src={maynilad}
                alt=""
                className="img1"
                // style={{ height: "auto", width:"100%"}}
              />
            </div>
          </div>

          <div className="col s6 m4 l3">
            <div className="card">
              <img src={Globe} alt="" className="img1" />
            </div>
          </div>

          <div className="col s6 m4 l3">
            <div className="card">
              <img src={pldt} alt="" className="img1" />
            </div>
          </div>

          <div className="col s6 m4 l3">
            <div className="card">
              <img src={sun} alt="" className="img1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PaymentServices;
