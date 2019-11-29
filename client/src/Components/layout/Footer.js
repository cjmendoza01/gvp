import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer " style={{ backgroundColor: "#262626" }}>
      {/* style={{ color: "#262626" }} */}
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Company Bio</h5>
            <p className="grey-text text-lighten-4">
              We are a team of college students working on this project like
              it's our full time job. Any amount would help support and continue
              development on this project and is greatly appreciated.
            </p>
          </div>
          <div className="col l3 s5">
            {/* <h5 className="white-text">Settings</h5> */}
            <ul>
              <h5> About Us</h5>
              <li>
                <a className="white-text" href="#!">
                  Profile
                </a>
              </li>
              <li>
                <a className="white-text" href="#!">
                  People Behind
                </a>
              </li>
              <li>
                <a className="white-text" href="#!">
                  History
                </a>
              </li>
              <li>
                <a className="white-text" href="#!">
                  Foundation
                </a>
              </li>
            </ul>
          </div>
          <div className="col l3 s3">
            {/* <h5 className="white-text">Connect</h5> */}
            <ul>
              <h5> Services</h5>
              <li>
                <a className="white-text" href="#!">
                  Payment Services
                </a>
              </li>
              <li>
                <a className="white-text" href="#!">
                  Loading Services
                </a>
              </li>
              <li>
                <a className="white-text" href="#!">
                  Padala Express
                </a>
              </li>
              <li>
                <a className="white-text" href="#!">
                  Exchange
                </a>
              </li>
              <li>
                <a className="white-text" href="#!">
                  Wallet Transfer
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">GVPX making life easier</div>
      </div>
    </footer>
  );
};
export default Footer;
