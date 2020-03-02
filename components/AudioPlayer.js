import { useState, useRef, useEffect } from "react";
import PlayButton from "./PlayButton";
import ProgressBar from "./ProgressBar";
import VolumeSlider from "./VolumeSlider";

function AudioPlayer(props) {
  const [progression, setProgression] = useState(0);
  const [playingStatus, setPlayingStatus] = useState(true);
  const audio = useRef();
  const updateProgress = () => {
    setProgression((audio.current.currentTime / audio.current.duration) * 100);
  };
  const handlePlayButtonClick = () => {
    setPlayingStatus(!playingStatus);
  };

  useEffect(() => {
    if (playingStatus) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
  }, [playingStatus]);

  // allows changing track or rewinding when clicking on the tracklist
  useEffect(() => {
    setPlayingStatus(true);
    audio.current.currentTime = 0;
    audio.current.play();
    // !props.launchPlay && audio.current.pause();
  }, [props.launchPlay, props.track]);
  return (
    <div>
      <div className="audio-player-container">
        <PlayButton
          handlePlayButtonClick={handlePlayButtonClick}
          playingStatus={playingStatus}
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
          display: flex;
          width: 100%;
          height: 2rem;
        }
        }
      `}</style>
    </div>
  );
}

export default AudioPlayer;
