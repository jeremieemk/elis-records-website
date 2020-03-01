import { useRef } from "react";

function ProgressBar(props) {
  const progressBar = useRef();
  function scrub(e) {
    const scrubTime =
      (e.nativeEvent.offsetX / progressBar.current.offsetWidth) *
      props.audio.duration;
    props.audio.currentTime = scrubTime;
  }
  console.log(props.progression);

  return (
    <div>
      <div className="progress-bar" ref={progressBar} onClick={e => scrub(e)}>
        <div className="range" style={{ width: `${props.progression}%` }} />
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
    }
  `}</style>
);

export default ProgressBar;
