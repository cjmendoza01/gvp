import React, { useState } from "react";
import { connect } from "react-redux";
import { forget } from "../../actions/usersAction";
import M from "materialize-css/dist/js/materialize.min.js";

const Forget = props => {
  const [email, setEmail] = useState("");
  const { status, error } = props.users;
  if (error) {
    M.toast({ html: error });
    props.clearError();
  }

  const send = e => {
    e.preventDefault();
    props.forget(email);
  };
  if (status === "PasswordChange") {
    return (
      <div className="fade">
        <br />
        <br />
        Check your Email for password Recovery....
      </div>
    );
  }

  return (
    <div className="fade">
      <div className="container">
        <br />
        <br />
        <div className="" style={{ width: "300px" }}>
          <div className="card-panel center">
            <h4>
              {" "}
              <strong style={{ fontWeight: "900", color: "#33ccff" }}>
                GVPX
              </strong>{" "}
            </h4>
            <input
              type="email"
              name="code2"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            Email
            <br />
            <br />
            <button className="btn" type="submit" onClick={send} name="action">
              Submit
            </button>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  users: state.users
});
export default connect(mapStateToProps, { forget })(Forget);
