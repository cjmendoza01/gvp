import React, { Fragment, useEffect } from "react";
import { setLoadingF } from "../../../actions/usersAction";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoadAmount from "./LoadAmount";
const BuyLoad = props => {
  useEffect(() => {
    setLoadingF();
  }, []);
  const { path } = props.match;

  return (
    <Fragment>
      <div className="fade">
        <div className="container">
          <h4>Buy Load</h4>
          <center>
            <input type="text" name="email" />
            Phone Number
            <br />
            <br />
            <div className="card-action">
              <input
                className="btn"
                type="submit"
                value="submit"
                // onClick={onSubmit}
                name="action"
              ></input>
              {/* <Link to={`${path}/loadAmount`}>load</Link> */}
            </div>
          </center>
        </div>
        <Switch>
          <Route path={`${path}/loadAmount`} component={LoadAmount} />
        </Switch>
      </div>
    </Fragment>
  );
};
export default connect(null, { setLoadingF })(BuyLoad);
