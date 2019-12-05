import React, { useState } from "react";
import { connect } from "react-redux";
import { changePass2 } from "../../actions/usersAction";
import M from "materialize-css/dist/js/materialize.min.js";
const Recovery = props => {
  const { status } = props.users;
  const {
    match: { params }
  } = props;

  const [user, setUser] = useState({
    password: "",
    rpassword: ""
  });
  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    if (user.password === user.rpassword) {
      const data = {
        token: params.id,
        password: user.password
      };
      props.changePass2(data);
    } else {
      M.toast({ html: "Passwords did not match" });
    }
  };
  if (status === "PasswordSuccessfullyUpdated") {
    return (
      <div>
        <br />
        <br />
        Password Successfully Changed .... return to <a href="/login">Login</a>
      </div>
    );
  }
  return (
    <div>
      <div className="row">
        <div className="input-field col s12">
          <input
            // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            id="password"
            type="password"
            name="password"
            value={user.password}
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
            value={user.rpassword}
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
          onClick={onSubmit}
          name="action"
        ></input>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.users
});
export default connect(mapStateToProps, { changePass2 })(Recovery);
