import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadUser, setLoading, changePass } from "../../actions/usersAction";
import EditGeneral from "./EditGeneral";
import M from "materialize-css/dist/js/materialize.min.js";
const Settings = ({ users: { user }, loadUser, setLoading, changePass }) => {
  useEffect(() => {
    loadUser();
  }, []);
  let fname,
    lname,
    phone,
    email = "";
  if (user) {
    fname = user.fname;
    email = user.email;
    lname = user.lname;
    phone = user.number;
  }

  const [passw, setpassw] = useState("");
  const [passn, setpassn] = useState("");
  const [pass, setpass] = useState(false);
  const [editd, setedit] = useState(false);
  const [emailch, setemailc] = useState(false);
  const emailc = () => {
    setemailc(true);
  };
  const passi = e => {
    e.preventDefault();
    setpass(!pass);
  };
  const edit = e => {
    e.preventDefault();
    setedit(true);
  };
  const changep = e => {
    e.preventDefault();
    const user2 = {
      email: email,
      password: passw,
      newpass: passn
    };
    changePass(user2);
    // M.toast({ html: "Password Changed" });
  };
  const checkbox = () => {};
  return (
    <div className="container fade">
      <div className="settings">
        <div className="setheader">
          <center>
            <h4> Account Settings</h4>
          </center>
        </div>
        <div className="setcontent">
          <div className="container">
            <h5>General</h5>
            <div className="divider"></div>
            <div className="col s12 offset-s11">
              <a href="" onClick={edit}>
                edit
              </a>
            </div>
            {editd ? (
              <EditGeneral />
            ) : (
              <Fragment>
                {" "}
                <div className="col s12 ">
                  <strong>Name:</strong> {fname} {lname}
                </div>
                <div className="col s11 ">
                  <strong>Email:</strong> {email}
                </div>
                <div className="col s11 ">
                  <strong>Phone:</strong> {phone}
                </div>
              </Fragment>
            )}
            <br />
            <br />
            <br />
            <br />
            <br />
            <h5>Email Notifications</h5>
            <div className="divider"></div>
            <br></br>
            <div className="col s12 ">Send Notifications when:</div>
            <br />
            <form>
              <label className="col s12 ">
                <input type="checkbox" />
                <span className="blacktxt">I transact using my wallet </span>
              </label>
              <br></br>
              <label className="col s12 ">
                <input type="checkbox" onChange={emailc} />
                <span className="blacktxt">
                  There are recommended actions for my account
                </span>
              </label>
              {emailch && (
                <Fragment>
                  <button className="btn">Save</button>
                </Fragment>
              )}{" "}
            </form>
            <br />
            <br />
            <h5>Security Settings</h5>
            <div className="divider"></div>
            <br></br>
            <div className="col s12 ">
              <a href="" onClick={passi}>
                Change Password
              </a>
              {pass && (
                <div>
                  <form className="fade">
                    <input
                      type="password"
                      name="passw"
                      value={passw}
                      onChange={e => setpassw(e.target.value)}
                    />
                    <label htmlFor="passw"> Current Password</label>
                    <input
                      type="password"
                      name="passn"
                      value={passn}
                      onChange={e => setpassn(e.target.value)}
                    />
                    <label htmlFor="passn"> New Password</label>
                    <br></br>

                    <button className="btn" type="submit" onClick={changep}>
                      submit
                    </button>
                  </form>
                  <br />
                  <br />
                </div>
              )}
            </div>
            {/* <form> */}
            {/* <label className="col s12 ">
                <input
                  type="checkbox"
                  className="filled-in"
                  onClick={checkbox}
                />
                <span className="blacktxt">Send OTP on login </span>
              </label>
            </form> */}
            <br />
            <h5>Privacy Settings</h5>
            <div className="divider"></div>
            <br></br>
            <br></br>
            <br /> <br />
            <br></br>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.users
});
export default connect(mapStateToProps, { loadUser, setLoading, changePass })(
  Settings
);
