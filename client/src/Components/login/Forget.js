import React from "react";

const Forget = () => {
  return (
    <div className="fade">
      <div className="container">
        <div className="" style={{ width: "300px" }}>
          <div className="card-panel center">
            <h4>
              {" "}
              <strong style={{ fontWeight: "900", color: "#33ccff" }}>
                GVPX
              </strong>{" "}
            </h4>
            <input
              type="text"
              name="code2"
              //   value={code2}
              //   onChange={e => setCode2(e.target.value)}
            />
            Email
            <br />
            <br />
            <button
              className="btn"
              // onClick={check}
              name="action"
            >
              Submit
            </button>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Forget;
