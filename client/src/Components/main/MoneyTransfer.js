import React from "react";
import Webcam from "react-webcam";
const MoneyTransfer = () => {
  const videoConstraints = {
    facingMode: "user"
  };
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
  }, [webcamRef]);

  return (
    <div className="container">
      Money Transfer
      <div>
        <Webcam
          audio={false}
          height={720}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={1280}
          videoConstraints={videoConstraints}
        />
        <button onClick={capture}>Capture photo</button>
      </div>
    </div>
  );
};
export default MoneyTransfer;
