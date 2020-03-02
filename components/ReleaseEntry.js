function ReleaseEntry(props) {
  props.releases && console.log(props.releases);
  return (
    props.releases &&
    props.releases.map(function(release, index) {
      return (
        <div>
          <div className="release-entry-wrapper">
            <img
              className="release-cover"
              key={`cover${index}`}
              src={release.data.cover.url}
              alt="release-cover"
            />
            <div className="release-details">
              <div key={`artist${index}`} className="artist-name">
                {release.data.artist[0].text}
              </div>
              <div key={`title${index}`} className="release-name">
                {release.data.title[0].text}
              </div>
            </div>
          </div>
          <style jsx>{`
            .release-entry-wrapper {
              position: relative;
              font-family: var(--font4);
            }
            .release-cover {
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
        </div>
      );
    })
  );
}

export default ReleaseEntry;
