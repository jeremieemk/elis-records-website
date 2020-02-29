import { useState, useRef, useEffect } from "react";
import PlayButton from "./PlayButton";

function AudioPlayer() {
  const [playingStatus, setPlayingStatus] = useState(false);
  const audio = useRef(null);
  const handlePlayButtonClick = () => {
    setPlayingStatus(!playingStatus);
  };
  useEffect(() => {
    playingStatus ? audio.current.play() : audio.current.pause();
  }, [playingStatus]);
  console.log(playingStatus);
  return (
    <div className="audio-player-container">
      <PlayButton
        handlePlayButtonClick={handlePlayButtonClick}
        playingStatus={playingStatus}
      />
      <audio ref={audio} src={"/music/0.mp3"} />
      {style}
    </div>
  );
}

const style = <style jsx>{``}</style>;

export default AudioPlayer;
