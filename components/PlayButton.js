function PlayButton(props) {
  return (
    <div className="PlayButton" onClick={props.handlePlayButtonClick}>
      {!props.playingStatus ? (
        <img className="play-song" src="/img/play-song.png" alt="play-song" />
      ) : (
        <img className="pause-song" src="/img/pause.png" alt="pause-song" />
      )}
      {style}
    </div>
  );
}

const style = (
  <style jsx>{`
    .PlayButton {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 0.5rem;
    }
    .play-song,
    .pause-song {
      width: 2rem;
    }
  `}</style>
);

export default PlayButton;
