function LinkButton(props) {
  return (
    <div className="button-link-container">
      <a
        href={props.streamingServiceLink && props.streamingServiceLink}
        target="_blank"
      >
        <button className="button-link">
          <img
            className="spotify"
            src={props.streamingServiceLogo}
            alt="spotify"
          />
          <p>{props.streamingService}</p>
          <img className="arrow-fwd" src="/img/arrow-fwd.png" alt="arrow-fwd" />
        </button>
      </a>

      <style jsx>{`
        .button-link {
          border-radius: 1rem;
          font-family: var(--font1);
          color: white;
          background-color: black;
          border: none;
          outline: none;
          width: 10rem;
          height: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        .button-link-container {
          display: flex;
          justify-content: center;
        }
        .spotify {
          height: 1rem;
          width: auto;
        }
        .arrow-fwd {
          height: 1.5rem;
          width: auto;
        }
      `}</style>
    </div>
  );
}

export default LinkButton;
