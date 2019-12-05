import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import {
  login,
  clearError,
  setLoading,
  setLoadingF
} from "../../actions/usersAction";
import Otp2 from "./Otp2";
import Spinner from "../layout/Spinner";
// { users: { error }, login }
const Login = props => {
  useEffect(() => {
    props.setLoadingF();
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const { error, otp2, isAuthenticated, loading, token } = props.users;
  const onSubmit = async () => {
    // props.history.push("/");
    const User = {
      email,
      password
    };
    try {
      props.setLoading();
      props.login(User);
    } catch (err) {
      console.log(err);
    }
  };

  if (isAuthenticated) {
    localStorage.setItem("token", token);
    props.history.push("/Wallet");
  }
  if (loading === true) {
    return <Spinner />;
  }
  if (otp2) {
    return <Otp2 />;
  }

  if (error) {
    M.toast({ html: error });
    props.clearError();
  }
  return (
    <div className="fade">
      <br />
      <br />
      <div className="container">
        <div className="" style={{ width: "300px" }}>
          {/* <div> */}
          <div className="card-panel center">
            <h4>
              {" "}
              <strong style={{ fontWeight: "900", color: "#33ccff" }}>
                GVPX
              </strong>{" "}
              Login
            </h4>
            {/* <form onSubmit={onSubmit}> */}
            <input
              type="text"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            Email
            <input
              type="password"
              name="password"
              value={password}
              onChange={e => setPass(e.target.value)}
            />
            Password<a href="/ForgetPassword"> Forget Password!</a>
            <br />
            <br />
            <button className="btn" onClick={onSubmit} name="action">
              Submit
            </button>
            <br></br>
            <div className="card-action">
              <p>
                need an account? <Link to="/register">Sign up now!</Link>
              </p>
            </div>
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
export default connect(mapStateToProps, {
  login,
  clearError,
  setLoading,
  setLoadingF
})(Login);
