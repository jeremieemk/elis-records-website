import { useRef } from "react";

function ProgressBar(props) {
  let progression = (props.audioCurrentTime / props.songLength) * 100;
  const progressBar = useRef();
  function scrub(e) {
    console.log();
    console.log(progressBar.current.offsetWidth);
    console.log(props.audio.duration);
    const scrubTime =
      (e.nativeEvent.offsetX / progressBar.current.offsetWidth) *
      props.audio.duration;
    props.audio.currentTime = scrubTime;
  }

  return (
    <div>
      {props.audioCurrentTime}
      <div className="progress-bar" ref={progressBar} onClick={e => scrub(e)}>
        <div className="range" style={{ width: `${progression}%` }} />
      </div>

      {style}
    </div>
  );
}

const style = (
  <style jsx>{`
    .progress-bar {
      width: 80%;
      height: 35px;
      border: 2px solid #666;
    }
    .range {
      background: limegreen;
      height: 100%;
      transition: width 0.3s ease-in;
    }
  `}</style>
);

export default ProgressBar;
