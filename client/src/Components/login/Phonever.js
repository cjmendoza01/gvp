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
    phonev(phone);
  };

  const check = () => {
    if (phonec === code) {
      M.toast({ html: "Success" });
      const data = {
        emailad: email,
        phone: phone
      };
      savePhone(data);
    }
  };
  return (
    <div>
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
            <h6>Enter Phone Number</h6>
            {/* <form onSubmit={onSubmit}> */}
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
            {}
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
export default connect(mapStateToProps, { phonev, setStatus, savePhone })(
  Phonever
);
