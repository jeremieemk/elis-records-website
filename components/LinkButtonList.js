import LinkButton from "./LinkButton";

function LinkButtonList(props) {
  function getStreamingUrl(streamingService) {
    return props.selectedRelease.data[streamingService]
      ? props.selectedRelease.data[streamingService].url
      : "";
  }
  const linkButtonListProps = [
    ["SPOTIFY", "/img/spotify.png", getStreamingUrl("spotify")],
    ["APPLE MUSIC", "/img/apple.png", getStreamingUrl("apple")],
    ["DEEZER", "/img/deezer-small.png", getStreamingUrl("deezer")],
    ["BANDCAMP", "/img/bandcamp-small.png", getStreamingUrl("bandcamp")],
    ["YOUTUBE", "/img/youtube-small.png", getStreamingUrl("youtube")]
  ];
  return (
    <div className="button-link-container">
      {linkButtonListProps.map(buttonProps => (
        <LinkButton
          streamingService={buttonProps[0]}
          streamingServiceLogo={buttonProps[1]}
          streamingServiceLink={buttonProps[2]}
        />
      ))}
      <style jsx>{`
        
        }
      `}</style>
    </div>
  );
}

export default LinkButtonList;
