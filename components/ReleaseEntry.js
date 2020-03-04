import { useState } from "react";
import TracklistAndPlayer from "./TracklistAndPlayer";

function ReleaseEntry(props) {
  const [playerDisplayId, setPlayerDisplayId] = useState(null);

  function showPlayer(event) {
    setPlayerDisplayId(event.target.getAttribute("data-tag"));
  }
  function renderSection(section) {
    console.log(section);
    return (
      <div className="section">
        {section[0] && section.map(paragraph => <p>{paragraph.text}</p>)}
      </div>
    );
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
              <div>
                <div className="more-info-about-release">
                  <img
                    className="close-more-info-cross"
                    src="/img/cross.png"
                    alt="cross"
                  />
                  <div className="tracklist-details">
                    {renderSection(release.data.tracklist)}
                  </div>
                  <div className="about-release">
                    {renderSection(release.data.about)}
                  </div>

                  <div className="credits">
                    {renderSection(release.data.credits)}
                  </div>
                </div>
                <TracklistAndPlayer
                  tracklist={tracklist}
                  setPlayerDisplayId={setPlayerDisplayId}
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
            .tracklist-details {
              margin-bottom: 2rem;
            }
            .close-more-info-cross {
          width: 0.6rem;
          position: absolute;
          right: 0;
          top: 0;
          transition: transform 0.3s;
          opacity: 0.7;
        }
        .close-more-info-cross:hover {
          width: 0.7rem;;
          opacity: 1;
        }

            }
            .more-info-about-release {
              text-transform: none;
              margin-bottom: 2rem;
              position:relative;
            }
            .more-info-section-title {
              margin-bottom: 1rem;
              margin-top: 1rem;
            }
            .about-release {
              margin-bottom: 2rem;
            }
          `}</style>
        </div>
      );
    })
  );
}

export default ReleaseEntry;
