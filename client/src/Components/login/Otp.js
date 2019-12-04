import React, { useState } from "react";
import { connect } from "react-redux";
import { setOTP, setOtps } from "../../actions/usersAction";

import M from "materialize-css/dist/js/materialize.min.js";
const Otp = props => {
  const [code, setCode] = useState("");
  // { users: { otp, loading, user }, setOTP }
  const { otp, loading, user } = props.users;

  const check = () => {
    if (code === otp) {
      props.setOTP(user);
      props.setOtps();
      M.toast({ html: "Connected" });
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
            <h6>Verification Code sent to your email</h6>
            {/* <form onSubmit={onSubmit}> */}
            <input
              type="text"
              name="code"
              value={code}
              onChange={e => setCode(e.target.value)}
            />
            Enter Code
            <br />
            <br />
            <button className="btn" onClick={check} name="action">
              Submit
            </button>
            <br></br>
            {/* <a href="">change email</a> */}
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

export default connect(mapStateToProps, { setOTP, setOtps })(Otp);
