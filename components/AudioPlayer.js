import { useState, useRef, useEffect } from "react";
import PlayButton from "./PlayButton";
import ProgressBar from "./ProgressBar";

function AudioPlayer() {
  const [progression, setProgression] = useState(0);
  const [playingStatus, setPlayingStatus] = useState(false);
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

  return (
    <div className="audio-player-container">
      <PlayButton
        handlePlayButtonClick={handlePlayButtonClick}
        playingStatus={playingStatus}
      />
      <ProgressBar audio={audio.current} progression={progression} />
      <audio ref={audio} onTimeUpdate={updateProgress} src={"/music/0.mp3"} />
      {style}
    </div>
  );
}

const style = <style jsx>{``}</style>;

export default AudioPlayer;
