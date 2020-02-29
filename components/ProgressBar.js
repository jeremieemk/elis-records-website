import { useEffect } from "react";

function ProgressBar(props) {
  console.log(props.audioCurrentTime / props.songLength);

  let progression = (props.audioCurrentTime / props.songLength) * 100;
  return (
    <div>
      {props.audioCurrentTime}
      <div className="progress-bar">
        <div className="range" style={{ width: `${progression}%` }} />
      </div>

      {style}
    </div>
  );
}

const style = (
  <style jsx>{`
    .progress-bar {
      width: 350px;
      height: 35px;
      border-radius: 50px;
      border: 2px solid #666;
      margin-bottom: 40px;
    }
    .range {
      background: limegreen;
      height: 100%;
      border-radius: inherit;
      transition: width 0.3s ease-in;
    }
  `}</style>
);

export default ProgressBar;
