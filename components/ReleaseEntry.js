const ReleaseEntry = () => (
  <div>
    <div className="ReleaseEntry-wrapper">
      <img className="josyara" src="/img/josy.jpg" alt="josyara" />
      <span className="play-button">
        <img className="play" src="/img/play.png" alt="play" />
      </span>
      <div className="release-details">
        <span className="artist-name">JOSYARA & IZEM</span>
        <br></br>
        <span className="release-name">Iara Correnteza (single)</span>
      </div>
    </div>
    {style}
  </div>
);

const style = (
  <style jsx>{`
    .ReleaseEntry-wrapper {
      position: relative;
      font-family: var(--font4);
    }
    .josyara {
      width: 100%;
    }
    .play-button {
    }
    .play {
      position: absolute;
      left: 1rem;
      bottom: 1rem;
      width: 5rem;
      background-color: white;
      padding: 0.2rem;
    }
    .release-details {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      text-align: right;
    }
    .artist-name {
      margin-bottom: 0.3rem;
      font-size: 1.2rem;
    }
    .artist-name,
    .release-name {
      display: inline-block;
      background-color: white;
      padding: 0.4rem;
    }
  `}</style>
);

export default ReleaseEntry;
