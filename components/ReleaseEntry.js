import AudioPlayer from "./AudioPlayer";
import { useEffect, useState } from "react";

function ReleaseEntry(props) {
  const [playerDisplayId, setPlayerDisplayId] = useState(null);
  function showPlayer(event) {
    setPlayerDisplayId(event.target.getAttribute("data-tag"));
  }
  return (
    props.releases &&
    props.releases.map(function(release, index) {
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
                <AudioPlayer data={release.data} />
                {Object.values(release.data.tracks[0]).map(track => (
                  <div>{track.name.slice(0, -4)}</div>
                ))}
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
            }
          `}</style>
        </div>
      );
    })
  );
}

export default ReleaseEntry;
