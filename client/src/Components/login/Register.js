import React, { useState, useEffect } from "react";
// import axios from "axios";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import {
  addUser,
  getUser,
  setLoading,
  clearError
} from "../../actions/usersAction";
import Otp from "./Otp";
import Phonever from "./Phonever";
const Register = props => {
  // { users: { error, otp, otpS,status }, addUser }
  useEffect(() => {
    props.setLoading();
    props.getUser();
  }, []);

  const { error, otp, otpS, status } = props.users;

  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    rpassword: ""
  });

  if (error) {
    M.toast({ html: error });
    props.clearError();
  }
  if (status === "Verified") {
    props.history.push("/login");
  }
  if (otpS) {
    return <Phonever />;
  }
  const { fname, lname, email, password, rpassword } = user;
  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });
  const checkPassword = str => {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return re.test(str);
  };

  const onSubmit = async e => {
    e.preventDefault();
    if (user.email && user.fname && user.lname) {
      if (user.password.length >= 6) {
        if (user.password === user.rpassword) {
          props.addUser(user);
        } else {
          M.toast({ html: "Passwords did not match" });
        }
      } else {
        M.toast({ html: "Passwords should be greater than 8 characters" });
      }
    } else {
      M.toast({ html: "Fill out all Fields" });
    }
  };

  return (
    <div className="fade">
      {!otp && (
        <div className="container">
          <form onSubmit={onSubmit}>
            <h3>Register</h3>
            <div className="row">
              <div className="row">
                <div className="input-field col s6">
                  <input
                    id="first_name"
                    type="text"
                    name="fname"
                    value={fname}
                    onChange={onChange}
                    required
                  />{" "}
                  <label htmlFor="first_name">First Name</label>
                </div>
                <div className="input-field col s6">
                  <input
                    id="last_name"
                    type="text"
                    name="lname"
                    value={lname}
                    onChange={onChange}
                    required
                  />{" "}
                  <label htmlFor="last_name">Last Name</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    required
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <input
                    // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                    id="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    required
                  />
                  <label htmlFor="password">Password</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="rpassword"
                    type="password"
                    name="rpassword"
                    value={rpassword}
                    onChange={onChange}
                    required
                  />{" "}
                  <label htmlFor="rpassword">retype-Password</label>
                </div>{" "}
                <br />
                <input
                  className="btn"
                  type="submit"
                  value="submit"
                  // onClick={onSubmit}
                  name="action"
                ></input>
              </div>
            </div>
          </form>
        </div>
      )}
      {otp && (
        <div className="fade">
          <Otp />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.users
});
export default connect(mapStateToProps, {
  getUser,
  addUser,
  setLoading,
  clearError
})(Register);
