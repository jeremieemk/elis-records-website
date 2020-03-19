import LinkButton from "./LinkButton";

function LinkButtonList(props) {
  function getStreamingUrl(streamingService) {
    return props.selectedRelease.data[streamingService]
      ? props.selectedRelease.data[streamingService].url
      : null;
  }
  const buttonProps = [
    ["SPOTIFY", "/img/spotify.png", getStreamingUrl("spotify")],
    ["BANDCAMP", "/img/bandcamp-small.png", getStreamingUrl("bandcamp")],
    ["APPLE MUSIC", "/img/apple.png", getStreamingUrl("apple")],
    ["YOUTUBE", "/img/youtube-small.png", getStreamingUrl("youtube")],
    ["DEEZER", "/img/deezer-small.png", getStreamingUrl("deezer")]
  ];
  return (
    <div className="button-link-container">
      {buttonProps.map(buttonProps => (
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
