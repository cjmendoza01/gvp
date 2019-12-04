import React from "react";
import Webcam from "react-webcam";
const MoneyTransfer = () => {
  const videoConstraints = {
    facingMode: "user"
  };
  return (
    <div className="container">
      Money Transfer
      <div>
        <Webcam videoConstraints={videoConstraints} />
      </div>
    </div>
  );
};
export default MoneyTransfer;
