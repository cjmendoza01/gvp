import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadUser, setLoading } from "../../actions/usersAction";

const Dashboard = props => {
  useEffect(() => {
    props.loadUser();
  }, []);
  const { user } = props.users;
  let fname = "";
  if (user) {
    fname = user.fname;
  }
  return (
    <div className="fade">
      <div className="container">
        <div className="row">
          <h6>Hi {fname},</h6>
          <div className="card col s12 m6 l4">
            <div className="center">
              <h4>
                <strong style={{ fontWeight: "900", color: "#33ccff" }}>
                  GVPX
                </strong>
                Wallet
              </h4>
              <input
                disabled
                value=""
                id="disabled"
                type="text"
                className="validate"
              />
              Account Balance
              <br />
              <div className="card-action"></div>
            </div>
          </div>

          <div className="card col s12 m6 l6">
            <div className="card-tabs  ">
              <ul className="tabs tabs-fixed-width " style={{}}>
                <li className="tab">
                  <a className="active" href="#test4">
                    Transactions
                  </a>
                </li>
                <li className="tab">
                  <a href="#test5">Requests</a>
                </li>
              </ul>
            </div>
            <div className="card-content grey lighten-4">
              <div id="test4">No Transactions Yet</div>

              <div id="test5">
                No Requests yet<br></br>
                <button className="btn waves-effect grey lighten-1">
                  Make Pament Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  users: state.users
});
export default connect(mapStateToProps, { loadUser, setLoading })(Dashboard);
