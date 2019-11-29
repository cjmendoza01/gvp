import React from "react";
import Bayad from "../images/BayadC.jpg";
import Cebuana from "../images/Cebuana.jpg";
import cliqq from "../images/cliqq.jpg";
import lbc from "../images/lbc.jpg";
import Palawan from "../images/palawan.jpg";
import Paymaya from "../images/paymaya.jpg";
import ubp from "../images/UBP.jpg";

const Cashin = () => {
  return (
    <div className="container">
      You can cash In/out through GVPX machines or through: Cash In
      <div>
        <div className="cashinimg">
          <div className="container">
            <center>
              <img src={Palawan} className="img_cashin" />
              <div className="desc_cashin"> Palawan Express </div>
            </center>
          </div>
        </div>
        <br></br>
        <div className="cashinimg">
          <div className="container">
            <center>
              <img src={Bayad} className="img_cashin" />
              Bayad Center
            </center>
          </div>
        </div>
        <div className="cashinimg">
          <div className="container">
            <center>
              <img src={Cebuana} className="img_cashin" />
              Cebuana
            </center>
          </div>
        </div>
        <div className="cashinimg">
          <div className="container">
            <center>
              <img src={cliqq} className="img_cashin" />
              Palawan Express
            </center>
          </div>
        </div>
        <div className="cashinimg">
          <div className="container">
            <center>
              <img src={lbc} className="img_cashin" />
              LBC
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cashin;
