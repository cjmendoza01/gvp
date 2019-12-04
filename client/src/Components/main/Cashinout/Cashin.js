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
        <div className="cashinimg col s6">
          <div className="container">
            <center>
              <div className="cashhead">
                <img src={Palawan} className="img_cashin" />
              </div>
              <div className="desc_cashin"> Palawan Express </div>
            </center>
          </div>
        </div>

        <div className="cashinimg col s6">
          <div className="container">
            <center>
              <div className="cashhead">
                <img src={Bayad} className="img_cashin" />
              </div>
              Bayad Center
            </center>
          </div>
        </div>
        <div className="cashinimg col s6">
          <div className="container">
            <center>
              {" "}
              <div className="cashhead">
                <img src={Cebuana} className="img_cashin" />
              </div>
              Cebuana
            </center>
          </div>
        </div>
        <div className="cashinimg col s6">
          <div className="container">
            <center>
              {" "}
              <div className="cashhead">
                <img src={cliqq} className="img_cashin" />
              </div>
              Palawan Express
            </center>
          </div>
        </div>
        <div className="cashinimg col s6">
          <div className="container">
            <center>
              {" "}
              <div className="cashhead">
                <img src={lbc} className="img_cashin" />
              </div>
              LBC
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cashin;
