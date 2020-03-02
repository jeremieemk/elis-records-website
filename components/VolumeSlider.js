function VolumeSlider(props) {
  const handleVolumechange = e => {
    props.audio && (props.audio.volume = parseFloat(e.target.value));
  };
  return (
    <div className="volume-slider-container">
      <input
        type="range"
        className="volume-slider"
        name="volume"
        min="0"
        max="1"
        step="0.01"
        onChange={handleVolumechange}
      ></input>
      <style jsx>{`
        .volume-slider-container {
          margin-top: 1rem;

          width: 100%;
          display: flex;
          justify-content: flex-end;
        }
        .volume-slider {
          width: 4rem;
          margin-right: 0.5rem;
        }
      `}</style>
    </div>
  );
}

export default VolumeSlider;
