import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadUser, setLoading, changePass } from "../../actions/usersAction";
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
  const passi = e => {
    e.preventDefault();
    setpass(!pass);
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
            <br></br>
            <div className="col s12 ">
              <strong>Name:</strong> {fname} {lname}
            </div>
            {/* <div className="col s6 push-s5 ">
              <a href="">edit</a>
            </div> */}
            <div className="col s11 ">
              <strong>Email:</strong> {email}
            </div>
            <div className="col s1  ">
              <a href="">edit</a>
            </div>
            <div className="col s11 ">
              <strong>Phone:</strong> {phone}
            </div>
            <div className="col s1   ">
              <a href="">edit</a>
            </div>
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
                <input type="checkbox" />
                <span className="blacktxt">
                  There are recommended actions for my account
                </span>
              </label>{" "}
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
                <Fragment>
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
                </Fragment>
              )}
            </div>
            <form>
              <label className="col s12 ">
                <input type="checkbox" checked="checked" />
                <span className="blacktxt">Send OTP on login </span>
              </label>
            </form>
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
