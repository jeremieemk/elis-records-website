import { useState } from "react";
import AudioPlayer from "./AudioPlayer";

function TracklistAndPlayer(props) {
  const [selectedTrack, setSelectedTrack] = useState(0);
  const [launchPlay, setLaunchPlay] = useState(false);
  const [playingStatus, setPlayingStatus] = useState(true);
  function stopMusic() {
    setPlayingStatus(false);
    props.setPlayerDisplayId(null);
  }
  function startTrack(event) {
    setSelectedTrack(event.target.getAttribute("data-tag"));
    setLaunchPlay(true);
  }
  function handlePlayButtonClick() {
    setPlayingStatus(!playingStatus);
  }
  console.log(selectedTrack);

  return (
    <div className="audio-player-container">
      <img
        className="cross"
        src="/img/cross.png"
        alt="cross"
        onClick={stopMusic}
      />
      <div className="tracklist-container">
        {props.tracklist.map((track, index) => (
          <div
            className="tracklist-item"
            data-tag={index}
            onClick={startTrack}
            style={{
              opacity: parseInt(selectedTrack) === index && 1
            }}
          >
            {track.name.slice(0, -4)}
          </div>
        ))}
      </div>
      <AudioPlayer
        track={props.tracklist[selectedTrack]}
        launchPlay={launchPlay}
        handlePlayButtonClick={handlePlayButtonClick}
        playingStatus={playingStatus}
        setPlayingStatus={setPlayingStatus}
      />
      <style jsx>{`
        .audio-player-container {
          cursor: pointer;
          position: fixed;
          bottom: 0;
          left: 0;
          background: white;
          width: 100%;
          z-index: 2;
          padding-bottom: 1rem;
          padding-top: 1rem;
        }
        .cross {
          width: 0.7rem;
          position: absolute;
          right: 0.3rem;
          top: 0.3rem;
          transition: transform 0.3s;
        }
        .cross:hover {
          transform: scale(1.2);
          opacity: 0.7;
        }
        .tracklist-container {
          padding-bottom: 0.5rem;
          padding-left: 1rem;
          padding-right: 1rem;
        }
        .tracklist-item {
          padding-bottom: 0.5rem;
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
}

export default TracklistAndPlayer;
