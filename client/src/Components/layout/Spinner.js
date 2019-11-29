import React from "react";
import spiner from "./Spin.gif";
const Spinner = () => {
  return (
    <div className="fade">
      <img
        src={spiner}
        alt="Loading"
        style={{
          width: "30%",
          left: "25%",
          position: "fixed",
          top: "300px"
        }}
      />
    </div>
  );
};
export default Spinner;
