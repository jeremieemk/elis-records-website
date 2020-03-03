import { useState } from "react";
import TracklistAndPlayer from "./TracklistAndPlayer";

function ReleaseEntry(props) {
  const [playerDisplayId, setPlayerDisplayId] = useState(null);

  function showPlayer(event) {
    setPlayerDisplayId(event.target.getAttribute("data-tag"));
  }

  return (
    props.releases &&
    props.releases.map(function(release, index) {
      let tracklist = Object.values(release.data.tracks[0]);
      console.log(tracklist);
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
              <div
                key={`artist${index}`}
                className="artist-name"
                onClick={showPlayer}
                data-tag={index}
              >
                {release.data.artist[0].text}
              </div>

              <div
                key={`title${index}`}
                className="release-name"
                onClick={showPlayer}
                data-tag={index}
              >
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
              <TracklistAndPlayer
                tracklist={tracklist}
                setPlayerDisplayId={setPlayerDisplayId}
              />
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
              cursor: pointer;
              width: 100%;
              transition: transform 0.5s;
            }
            .release-cover:hover {
              transform: scale(1.005);
            }

            .release-details {
              padding-top: 1rem;
              padding-bottom: 1rem;
              padding-left: 0.5rem;
              padding-right: 0.5rem;
              text-align: center;
              letter-spacing: 0.05rem;
              transition: opacity 0.3s;
              transition: transform 0.5s;
              cursor: pointer;
            }
            .release-details:hover {
              opacity: 0.85;
              transform: scale(1.01);
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
          `}</style>
        </div>
      );
    })
  );
}

export default ReleaseEntry;
