import React, { Fragment, useEffect } from "react";
import { setLoadingF } from "../../../actions/usersAction";
import { connect } from "react-redux";

const LoadAmount = () => {
  useEffect(() => {
    setLoadingF();
  }, []);
  return (
    <Fragment>
      <div className="fade">
        <div className="container">
          <div className="card-panel center">
            <h4> Load</h4>
            <center>
              <input type="text" name="email" />
              Phone Number
            </center>
            <br />
            <div className="card-action">
              <input
                className="btn"
                type="submit"
                value="submit"
                // onClick={onSubmit}
                name="action"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default connect(null, { setLoadingF })(LoadAmount);
