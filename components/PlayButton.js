function PlayButton(props) {
  return (
    <div>
      <div className="PlayButton" onClick={props.handlePlayButtonClick}>
        {!props.playingStatus ? (
          <img className="play-song" src="/img/play-song.png" alt="play-song" />
        ) : (
          <img className="pause-song" src="/img/pause.png" alt="pause-song" />
        )}
      </div>
      {style}
    </div>
  );
}

const style = (
  <style jsx>{`
    .play-song,
    .pause-song {
      width: 2rem;
    }
  `}</style>
);

export default PlayButton;
