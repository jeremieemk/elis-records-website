const LandingText = () => (
  <div>
    <div className="LandingText-wrapper">
      <div className="text-wrapper">
        <p>
          We are a record label and a collective of musicians, producers,
          beatmakers and songwriters based in Lisbon, Paris, São Paulo and all
          over the world...
        </p>
        <p>Listen to our releases!</p>
      </div>
      <img className="arrow" src="/img/scroll.png" alt="arrow" />
    </div>
    {style}
  </div>
);

const style = (
  <style jsx>{`
    .LandingText-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: var(--global-margin);
    }
    .arrow {
      margin-top: 2rem;
      width: 3rem;
    }
  `}</style>
);

export default LandingText;
