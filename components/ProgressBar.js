import { useRef } from "react";

function ProgressBar(props) {
  const progressBar = useRef();
  function scrub(e) {
    const scrubTime =
      (e.nativeEvent.offsetX / progressBar.current.offsetWidth) *
      props.audio.duration;
    props.audio.currentTime = scrubTime;
  }

  return (
    <div className="progress-bar" ref={progressBar} onClick={scrub}>
      <div className="range" style={{ width: `${props.progression}%` }} />
      {style}
    </div>
  );
}

const style = (
  <style jsx>{`
    .progress-bar {
      width: 100%;
      height: 100%;
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      border: 1px solid black;
    }
    .range {
      background: black;
      height: 100%;
    }
  `}</style>
);

export default ProgressBar;
