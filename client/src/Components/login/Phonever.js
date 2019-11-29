import React, { useState } from "react";
import { connect } from "react-redux";
import { phonev, setStatus, savePhone } from "../../actions/usersAction";
import M from "materialize-css/dist/js/materialize.min.js";
const Phonever = ({
  users: { phonec, user },
  setStatus,
  phonev,
  savePhone
}) => {
  const [code, setCode] = useState("");
  const [phone, setPhone] = useState("");
  const { email } = user;
  const send = () => {
    // setStatus(code);
    //+639053724922
    const phonen = "+639" + phone;
    phonev(phonen);
  };

  const check = () => {
    if (phonec === code) {
      M.toast({ html: "Success" });
      const data = {
        emailad: email,
        phonen: "+639" + phone
      };
      savePhone(data);
    } else {
      M.toast({ html: "Incorrect" });
    }
  };
  return (
    <div>
      <div className="container">
        <div className="" style={{ width: "300px" }}>
          <div className="card-panel center">
            <h4>
              {" "}
              <strong style={{ fontWeight: "900", color: "#33ccff" }}>
                GVPX
              </strong>{" "}
            </h4>
            <h6>Enter Phone Number</h6>
            +639
            <div className="input-field inline">
              <input
                type="number"
                name="phone"
                maxlength="9"
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
            </div>
            <br></br>
            <a href="/login">Skip for now</a>
            {/* <input
              type="text"
              name="phone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            /> */}
            <br />
            <br />
            {phonec ? (
              <div>
                <button className="btn" onClick={send} name="action">
                  reSend
                </button>
                <br></br>
                <h6>Verification Code sent to your phone</h6>
                <input
                  type="text"
                  name="code"
                  value={code}
                  onChange={e => setCode(e.target.value)}
                />
                Enter code
                <br />
                <br />
                <button className="btn" onClick={check} name="action">
                  Submit
                </button>
              </div>
            ) : (
              <div>
                <button className="btn" onClick={send} name="action">
                  Submit
                </button>
                <br></br>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.users
});
export default connect(mapStateToProps, { phonev, setStatus, savePhone })(
  Phonever
);
