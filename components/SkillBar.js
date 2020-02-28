function SkillBar(props) {
  return (
    <div className="skill-bar-container">
      <div className="skill-name-container">
        <p>
          | <span className="skill">{props.skillName}</span> |
        </p>
      </div>
      <div className="skill-measure-bar-container">
        <div className="skill-bar-outline">
          <div className="skill-bar" style={{ width: props.percentage }}></div>
        </div>
      </div>

      {style}
    </div>
  );
}

const style = (
  <style jsx>{`
    .skill-bar-container {
      width: 100%;
    }
    .skill-name-container,
    .skill-measure-bar-container {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-family: var(--font4);
    }
    .skill {
      color: white;
    }
    .skill-name-container > p {
      margin-block-start: 0.5rem;
      margin-block-end: 0.5rem;
    }

    .skill-measure-bar-container {
    }
    .skill-bar-outline {
      width: 100%;
      height: 1rem;
      border: 1px solid white;
    }
    .skill-bar {
      border-bottom: 1rem solid white;
    }
    @media (min-width: 801px) {
      .skill-name-container {
        font-size: 1rem;
      }
      .skill-name-container > p {
        margin-block-start: 1.5rem;
        margin-block-end: 0.8rem;
      }
      .skill-bar {
        border-bottom: 1rem solid white;
      }
      .skill-bar-outline {
        height: 1rem;
      }
    }
  `}</style>
);

export default SkillBar;
