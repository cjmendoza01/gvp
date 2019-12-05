import React from "react";
import Webcam from "react-webcam";
const MoneyTransfer = () => {
  const videoConstraints = {
    facingMode: "user"
  };
  const webcamRef = React.useRef(null);
  let imageSrc;
  const capture = React.useCallback(() => {
    imageSrc = webcamRef.current.getScreenshot();
  }, [webcamRef]);

  return (
    <div className="container">
      Money Transfer
      {imageSrc && <div>{imageSrc}</div>}
      <div className="container">
        <Webcam
          audio={false}
          height={200}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={100}
          videoConstraints={videoConstraints}
        />
        <button onClick={capture}>Capture photo</button>
      </div>
    </div>
  );
};
export default MoneyTransfer;
