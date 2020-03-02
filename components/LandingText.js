const LandingText = () => (
  <div>
    <div className="LandingText-wrapper">
      <div className="text-wrapper">
        <p>
          We are a record label and a collective of musicians, producers,
          beatmakers and songwriters based in Lisbon, Paris, São Paulo and all
          over the world...
        </p>
        {/* <p>Listen to our releases!</p> */}
      </div>
      {/* <img className="arrow" src="/img/scroll.png" alt="arrow" /> */}
    </div>
    <style jsx>{`
      .LandingText-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: var(--global-margin);
        font-family: var(--font1);
        font-size: var(--standard-font-size);
        text-transform: uppercase;
        line-height: 1.2rem;
        letter-spacing: 0.05rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
      }
      .arrow {
        margin-top: 1rem;
        width: 3rem;
      }
    `}</style>
  </div>
);

export default LandingText;
