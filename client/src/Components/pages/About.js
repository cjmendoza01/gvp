import React from "react";
import Footer from "../layout/Footer";
import smart from "./images/smart.jpg";
const About = () => {
  return (
    <div className="fade">
      <div className="container">
        <h1>About Us</h1>
        <div className="divider"></div>
        <div className="container">
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
            GVPXs.ph is regulated by the Bangko Sentral ng Pilipinas (BSP) and
            is the first ever blockchain-based company in Asia to hold both
            Virtual Currency and Electronic Money Issuer licenses from a central
            bank.
          </p>
        </div>
        <br />
        <br />

        <h4>People Behind</h4>
        <div className="container">
          <div className="divider"></div>
          <br />

          <div classname="card">
            <div className="row">
              <div className="col s12 m3">
                <div className="profile">
                  <img src={smart} alt="" className="aboutimg" />
                </div>
              </div>

              <div className="col s12 m9">
                <div className="pcontent">
                  <div className="blue-grey-text">
                    <h4>Cyrill Mendoza</h4>
                  </div>

                  <div className="divider"></div>
                  <br></br>
                  <div className="pDesc">
                    {" "}
                    <p className="abouttxt">
                      Founded in 2014 in the Philippines and serving over 5
                      million customers, GVPX.ph is one of the first
                      blockchain-backed platforms to reach significant
                      mainstream consumer adoption. The company’s mobile app
                      provides consumers with direct access to banking and
                      digital payment services, including local and
                      international remittances, mobile air-time, bill payments,
                      game credits, and online shopping. The company has also
                      built one of the country’s largest cash distribution
                      networks, operating through over 33,000 partner locations
                      domestically and over 500,000 locations worldwide. GVPX.ph
                      is regulated by the Bangko Sentral ng Pilipinas (BSP) and
                      is the first ever blockchain-based company in Asia to hold
                      both Virtual Currency and Electronic Money Issuer licenses
                      from a central bank.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="divider"></div>
          </div>
          <br />
          <div classname="card">
            <div className="row">
              <div className="col s12 m3">
                <div className="profile">
                  <img src={smart} alt="" className="aboutimg" />
                </div>
              </div>

              <div className="col s12 m9">
                <div className="pcontent">
                  <div className="blue-grey-text">
                    <h4>Cyrill Mendoza</h4>
                  </div>

                  <div className="divider"></div>
                  <br></br>
                  <div className="pDesc">
                    {" "}
                    <p className="abouttxt">
                      Founded in 2014 in the Philippines and serving over 5
                      million customers, GVPX.ph is one of the first
                      blockchain-backed platforms to reach significant
                      mainstream consumer adoption. The company’s mobile app
                      provides consumers with direct access to banking and
                      digital payment services, including local and
                      international remittances, mobile air-time, bill payments,
                      game credits, and online shopping. The company has also
                      built one of the country’s largest cash distribution
                      networks, operating through over 33,000 partner locations
                      domestically and over 500,000 locations worldwide. GVPX.ph
                      is regulated by the Bangko Sentral ng Pilipinas (BSP) and
                      is the first ever blockchain-based company in Asia to hold
                      both Virtual Currency and Electronic Money Issuer licenses
                      from a central bank.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default About;
