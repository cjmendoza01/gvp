import React from "react";
import Footer from "../../layout/Footer";
import img1 from "../images/money.jpg";
const MoneyExchange = () => {
  return (
    <div className="fade">
      <div className="container">
        <br></br>
        <img src={img1} alt="" className="img2" />
        <br></br>

        <div>
          <h3>Exchange</h3>
          <div className="divider"> </div>
          <br />
          <br />
          <div className="center orange-text">
            <h4>With GVPX wallet send money anywhere</h4>
          </div>

          <p className="flow-text " style={{ textAlign: "center" }}>
            GVPX is a Southeast Asian fintech company that enables anyone,
            including those without a bank account, to easily access financial
            services directly from their phone.
          </p>
          <div className="container">
            <div classname="images2">
              <div className="row">
                <div className="col s12 m6 l6">
                  <img src="" alt="" />
                </div>
                <div className="col s12 m6 l6">
                  <img src="" alt="" />
                </div>
              </div>
            </div>
          </div>
          <p className="teal-text abouttxt">
            Founded in 2014 in the Philippines and serving over 5 million
            customers, GVPX.ph is one of the first blockchain-backed platforms
            to reach significant mainstream consumer adoption. The company’s
            mobile app provides consumers with direct access to banking and
            digital payment services, including local and international
            remittances, mobile air-time, bill payments, game credits, and
            online shopping. The company has also built one of the country’s
            largest cash distribution networks, operating through over 33,000
            partner locations domestically and over 500,000 locations worldwide.
            GVPX.ph is regulated by the Bangko Sentral ng Pilipinas (BSP) and is
            the first ever blockchain-based company in Asia to hold both Virtual
            Currency and Electronic Money Issuer licenses from a central bank.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default MoneyExchange;
