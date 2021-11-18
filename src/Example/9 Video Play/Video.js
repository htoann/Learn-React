import Nice from "./videos/Nice.mp4";
import { forwardRef, useImperativeHandle, useRef } from "react";

function Video(props, ref) {
  const videoRef = useRef();

  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();
    },
    pause() {
      videoRef.current.pause();
    },
  }));

  return <video ref={videoRef} src={Nice} width={400} />;
}

export default forwardRef(Video);
