import AudioPlayer from "./AudioPlayer";

function ReleaseEntry(props) {
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
            <div>
              <AudioPlayer data={release.data} />
              {Object.values(release.data.tracks[0]).map(track => (
                <div>{track.name.slice(0, -4)}</div>
              ))}
            </div>
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
          `}</style>
        </div>
      );
    })
  );
}

export default ReleaseEntry;
