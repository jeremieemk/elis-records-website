function VolumeSlider(props) {
  const handleVolumechange = e => {
    props.audio.volume = parseFloat(e.target.value);
  };
  return (
    <div className="volume-slider-container">
      <input
        type="range"
        className="volume_slider"
        name="volume"
        min="0"
        max="1"
        step="0.01"
        onChange={e => handleVolumechange(e)}
      ></input>
      {style}
    </div>
  );
}

const style = (
  <style jsx>{`
    .volume-slider-container {
      margin-top: 1rem;
    }
  `}</style>
);

export default VolumeSlider;
