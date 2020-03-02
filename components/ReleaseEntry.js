import AudioPlayer from "./AudioPlayer";
import { useEffect, useState } from "react";

function ReleaseEntry(props) {
  const [playerDisplayId, setPlayerDisplayId] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(0);
  const [launchPlay, setLaunchPlay] = useState(false);
  function showPlayer(event) {
    setPlayerDisplayId(event.target.getAttribute("data-tag"));
  }
  function startTrack(event) {
    setSelectedTrack(event.target.getAttribute("data-tag"));
    setLaunchPlay(true);
  }
  return (
    props.releases &&
    props.releases.map(function(release, index) {
      let tracklist = Object.values(release.data.tracks[0]);
      return (
        <div>
          <div className="release-entry-wrapper">
            <img
              className="release-cover"
              onClick={showPlayer}
              key={`cover${index}`}
              src={release.data.cover.url}
              alt="release-cover"
              data-tag={index}
            />
            <div className="release-details">
              <div key={`artist${index}`} className="artist-name">
                {release.data.artist[0].text}
              </div>

              <div key={`title${index}`} className="release-name">
                <img
                  className="mini-play"
                  src="/img/play-song.png"
                  alt="mini-play"
                  onClick={showPlayer}
                  data-tag={index}
                />
                {release.data.title[0].text}
              </div>
            </div>

            {parseInt(playerDisplayId) === index && (
              <div className="audio-player-container">
                <div className="tracklist-container">
                  {tracklist.map((track, index) => (
                    <div
                      className="tracklist-item"
                      data-tag={index}
                      onClick={startTrack}
                    >
                      {track.name.slice(0, -4)}
                    </div>
                  ))}
                </div>
                <AudioPlayer
                  track={tracklist[selectedTrack]}
                  launchPlay={launchPlay}
                />
              </div>
            )}
          </div>
          <style jsx>{`
            .release-entry-wrapper {
              padding-left: var(--global-margin);
              padding-right: var(--global-margin);
              font-family: var(--font1);
              font-size: var(--standard-font-size);
              text-transform: uppercase;
            }
            .release-cover {
              width: 100%;
            }

            .release-details {
              padding-top: 1rem;
              padding-bottom: 1rem;
              padding-left: 0.5rem;
              padding-right: 0.5rem;
              text-align: center;
              letter-spacing: 0.05rem;
            }
            .mini-play {
              width: 0.5rem;
              margin-right: 0.7rem;
            }
            .artist-name,
            .release-name {
              padding-top: 0.5rem;
              padding-bottom: 0.3rem;
            }
            .audio-player-container {
              position: fixed;
              bottom: 0;
              left: 0;
              background: white;
              width: 100%;
              z-index: 2;
              padding-bottom: 1rem;
              padding-top: 1rem;
            }
            .tracklist-container {
              padding-bottom: 0.5rem;
              padding-left: 1rem;
              padding-right: 1rem;
            }
            .tracklist-item {
              padding-bottom: 0.5rem;
            }
          `}</style>
        </div>
      );
    })
  );
}

export default ReleaseEntry;
