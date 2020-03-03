import { useRef } from "react";

function ProgressBar(props) {
  const progressBar = useRef();
  function scrub(e) {
    if (props.audio) {
      const scrubTime =
        (e.nativeEvent.offsetX / progressBar.current.offsetWidth) *
        props.audio.duration;
      props.audio.currentTime = scrubTime;
    }
  }

  return (
    <div className="progress-bar" ref={progressBar} onClick={scrub}>
      <div className="range" style={{ width: `${props.progression}%` }} />
      <style jsx>{`
        .progress-bar {
          width: 100%;
          height: 100%;
          margin-left: 0.5rem;
          margin-right: 1rem;
          border: 1px solid black;
          transition: opacity 0.6s;
        }
        .progress-bar:hover {
          opacity: 0.8;
        }
        .range {
          background: black;
          height: 100%;
        }
      `}</style>
    </div>
  );
}

export default ProgressBar;
