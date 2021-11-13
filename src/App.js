import React, { useRef } from "react";
import Video from "./Video";
import Button from "./Button/Button";

function App() {
  const videoRef = useRef();

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <div className="App" style={{ margin: 100 }}>
      <Video ref={videoRef} />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
      <Button primary />
    </div>
  );
}

export default App;
