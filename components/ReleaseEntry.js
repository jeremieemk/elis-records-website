import { useState, useRef } from "react";
import TracklistAndPlayer from "./TracklistAndPlayer";

function ReleaseEntry(props) {
  const [playerDisplayId, setPlayerDisplayId] = useState(null);
  const [showMoreDetails, setShowMoreDetails] = useState(true);

  // let releaseCover = useRef();
  // releaseCover.current && console.log(releaseCover.current);

  function showPlayer(event) {
    setPlayerDisplayId(event.target.getAttribute("data-tag"));
    setShowMoreDetails(true);
    // releaseCover.current &&
    //   window.scrollTo({
    //     behavior: "smooth",
    //     top: releaseCover.current.offsetTop
    //   });
  }
  function renderSection(section) {
    return (
      <div className="section">
        {section[0] && section.map(paragraph => <p>{paragraph.text}</p>)}
      </div>
    );
  }
  function hideMoreDetails(e) {
    setShowMoreDetails(false);
  }
  function convertDate(dateString) {
    var date = new Date(dateString);
    return date.toLocaleDateString();
  }

  props.releases && console.log(props.releases);

  return (
    props.releases &&
    props.releases.map((release, index) => {
      let tracklist = Object.values(release.data.tracks[0]);
      return (
        <div>
          <div className="release-entry-wrapper">
            <div onClick={showPlayer}>
              <img
                className="release-cover"
                key={`cover${index}`}
                src={release.data.cover.url.slice(0, -21)}
                alt="release-cover"
                data-tag={index}
                // ref={releaseCover}
              />
              <div className="release-details">
                <div
                  key={`artist${index}`}
                  className="artist-name"
                  data-tag={index}
                >
                  {release.data.artist[0].text}
                </div>

                <div
                  key={`title${index}`}
                  className="release-name"
                  data-tag={index}
                >
                  <img
                    className="mini-play"
                    src="/img/play-song.png"
                    alt="mini-play"
                    data-tag={index}
                  />
                  {release.data.title[0].text}
                </div>
              </div>
            </div>
            {parseInt(playerDisplayId) === index && (
              <div>
                {showMoreDetails && (
                  <div className="more-info-about-release">
                    <img
                      className="close-more-info-cross"
                      src="/img/cross.png"
                      alt="cross"
                      onClick={hideMoreDetails}
                    />
                    <div className="tracklist-details">
                      {renderSection(release.data.tracklist)}
                    </div>
                    <div className="release-date">
                      Released {convertDate(release.data["release-date"])}
                    </div>
                    <div className="buy-link">
                      <a href={release.data.buy.url} target="_blank">
                        BUY
                      </a>
                    </div>

                    <div className="about-release">
                      {renderSection(release.data.about)}
                    </div>

                    <div className="credits">
                      {renderSection(release.data.credits)}
                    </div>
                  </div>
                )}
                <TracklistAndPlayer
                  tracklist={tracklist}
                  setPlayerDisplayId={setPlayerDisplayId}
                />
              </div>
            )}
          </div>
          <style jsx>{`
            .release-entry-wrapper {
              z-index: -1;
              padding-left: var(--global-margin);
              padding-right: var(--global-margin);
              font-family: var(--font1);
              font-size: var(--standard-font-size);
              text-transform: uppercase;
            }

            .release-cover {
              cursor: pointer;
              width: 100%;
              transition: opacity 0.2s;
            }
            .release-cover:hover {
              opacity: 0.8;
            }

            .release-details {
              padding-top: 1.2rem;
              padding-bottom: 3rem;
              padding-left: 0.5rem;
              padding-right: 0.5rem;
              text-align: center;
              letter-spacing: 0.05rem;
              transition: opacity 0.3s;

              cursor: pointer;
            }
            .release-details:hover {
              opacity: 0.7;
            }
            .mini-play {
              width: 0.5rem;
              margin-right: 0.7rem;
            }

            .release-name,
            .release-name {
              padding-top: 0.5rem;
            }
            .tracklist-details {
              margin-bottom: 1rem;
              padding-right: 0.5rem;
            }
            .buy-link {
              margin-top: 1rem;
              margin-bottom: 1rem;
              text-decoration: underline;
            }
            .close-more-info-cross {
              width: 0.7rem;
              position: absolute;
              right: 0;
              top: 0;
              transition: transform 0.3s;
              opacity: 0.7;
              cursor: pointer;
            }
            .close-more-info-cross:hover {
              width: 0.7rem;
              opacity: 1;
            }
            .more-info-about-release {
              text-transform: none;
              margin-bottom: 4rem;
              position: relative;
              letter-spacing: 0.05rem;
              line-height: 1rem;
            }
            .more-info-section-title {
              margin-bottom: 1rem;
              margin-top: 1rem;
            }
            .about-release {
              margin-bottom: 2rem;
            }

            @media (min-width: 801px) {
              .release-entry-wrapper {
                font-size: var(--desktop-font-size);
              }
            }
          `}</style>
        </div>
      );
    })
  );
}

export default ReleaseEntry;
