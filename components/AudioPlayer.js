import { useState, useRef, useEffect } from "react";
import PlayButton from "./PlayButton";
import ProgressBar from "./ProgressBar";

function AudioPlayer() {
  const [playingStatus, setPlayingStatus] = useState(false);
  const [audioCurrentTime, setAudioCurrentTime] = useState(0);
  const [songLength, setSongLength] = useState(0);
  const audio = useRef(null);

  const handlePlayButtonClick = () => {
    setPlayingStatus(!playingStatus);
  };

  useEffect(() => {
    setSongLength(audio.current.duration);
    if (playingStatus) {
      audio.current.play();
      setInterval(() => setAudioCurrentTime(audio.current.currentTime), 100);
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
      <ProgressBar
        audio={audio.current}
        audioCurrentTime={audioCurrentTime}
        songLength={songLength}
      />
      <audio ref={audio} src={"/music/0.mp3"} />
      {style}
    </div>
  );
}

const style = <style jsx>{``}</style>;

export default AudioPlayer;
