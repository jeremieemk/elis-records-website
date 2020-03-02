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
                {release.data.title[0].text}
              </div>
            </div>
            {parseInt(playerDisplayId) === index && (
              <div className="audio-player-container">
                {tracklist.map((track, index) => (
                  <div data-tag={index} onClick={startTrack}>
                    {track.name.slice(0, -4)}
                  </div>
                ))}
                <AudioPlayer
                  track={tracklist[selectedTrack]}
                  launchPlay={launchPlay}
                />
              </div>
            )}
          </div>
          <style jsx>{`
            .release-entry-wrapper {
            }
            .release-cover {
              width: 100%;
            }

            .release-details {
            }
            .artist-name {
            }
            .artist-name,
            .release-name {
            }
            .audio-player-container {
              position: fixed;
              bottom: 0;
              background: white;
              padding: 1rem;
              width: 100%;
              z-index: 2;
            }
          `}</style>
        </div>
      );
    })
  );
}

export default ReleaseEntry;
