import { useState, useRef, useEffect } from "react";
import PlayButton from "./PlayButton";
import ProgressBar from "./ProgressBar";
import VolumeSlider from "./VolumeSlider";

function AudioPlayer(props) {
  const [progression, setProgression] = useState(0);
  const audio = useRef();
  const updateProgress = () =>
    setProgression((audio.current.currentTime / audio.current.duration) * 100);
  useEffect(() => {
    props.playingStatus ? audio.current.play() : audio.current.pause();
  }, [props.playingStatus]);

  // allows launching track when clicking on the tracklist
  useEffect(() => {
    props.setPlayingStatus(true);
    audio.current.currentTime = 0;
    audio.current.play();
  }, [props.launchPlay, props.track]);

  return (
    <div>
      <div className="audio-player-container">
        <PlayButton
          handlePlayButtonClick={props.handlePlayButtonClick}
          playingStatus={props.playingStatus}
        />
        <ProgressBar audio={audio.current} progression={progression} />

        <audio
          ref={audio}
          onTimeUpdate={updateProgress}
          src={props.track.url}
        />
      </div>
      <VolumeSlider audio={audio.current} />
      <style jsx>{`
        .audio-player-container {
          z-index: 5;
          position: relative;
          display: flex;
          width: 100%;
          height: 2rem;
          animation: fadeIn 1s;
              animation-fill-mode: forwards;
            }
            @keyframes fadeIn {
              from {
                opacity: 0;
              }

              to {
                opacity: 1;
              }
            }
        }
      `}</style>
    </div>
  );
}

export default AudioPlayer;
