import React, { useState } from "react";
import { connect } from "react-redux";
import { editUser } from "../../actions/usersAction";
const EditGeneral = props => {
  const [user, setUser] = useState({
    fname: props.users.user.fname,
    lname: props.users.user.lname,
    // email: props.users.user.email,
    number: props.users.user.number
  });
  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });
  const { fname, lname, number } = user;
  const onSubmit = e => {
    e.preventDefault();
    props.editUser(user);
  };
  return (
    <div>
      <div className="fade">
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="col s6">
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
            <div className="col s6">
              <input
                id="last_name"
                type="text"
                name="lname"
                value={lname}
                onChange={onChange}
                required
              />
              <label htmlFor="last_name">Last Name</label>
            </div>
          </div>
          {/* <div className="row">
            <div className="col s12">
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
          </div> */}
          <div className="row">
            <div className="col s12">
              <input
                id="number"
                type="text"
                name="number"
                value={number}
                onChange={onChange}
                required
              />
              <label htmlFor="number">Phone Number</label>
            </div>
          </div>
          <input
            className="btn"
            type="submit"
            value="submit"
            name="action"
          ></input>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.users
});
export default connect(mapStateToProps, { editUser })(EditGeneral);
