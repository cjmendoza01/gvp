import React, { useState } from "react";
import { connect } from "react-redux";
import { setOTP, authenticate } from "../../actions/usersAction";

import M from "materialize-css/dist/js/materialize.min.js";
const Otp = props => {
  const { otp2, token, isAuthenticated } = props.users;

  const [code2, setCode2] = useState("");
  if (isAuthenticated) {
    console.log("yes");
  }
  const check = () => {
    // const otp={
    //   otp:code2,
    //   token:otp2
    // }

    // props.check(otp)
    if (code2 === otp2) {
      localStorage.setItem("token", token);
      props.authenticate();
      M.toast({ html: "Connected" });
    } else {
      M.toast({ html: "Incorrect" });
    }
  };

  return (
    <div className="fade">
      <div className="container">
        <div className="" style={{ width: "300px" }}>
          {/* <div> */}
          <div className="card-panel center">
            <h4>
              {" "}
              <strong style={{ fontWeight: "900", color: "#33ccff" }}>
                GVPX
              </strong>{" "}
            </h4>
            <h6>Verification Code sent to your phone</h6>
            {/* <form onSubmit={onSubmit}> */}
            <input
              type="text"
              name="code2"
              value={code2}
              onChange={e => setCode2(e.target.value)}
            />
            Enter Code
            <br />
            <br />
            <button className="btn" onClick={check} name="action">
              Submit
            </button>
            <br></br>
            <a>Through email</a>
            {/* </form> */}
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps, { setOTP, authenticate })(Otp);
