function ProjectDescriptionTitle(props) {
  return (
    <div className="project-title-container">
      <div className="project-title">{props.title}</div>
      <div class="project-title-line"></div>
      {style}
    </div>
  );
}

const style = (
  <style jsx>{`
    .project-title-container {
      padding-top: 1rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .project-title {
      color: var(--color2);
      font-family: var(--font3);
      text-align: center;
      font-size: 1.2rem;
      margin-bottom: 0.2rem;
    }
    .project-title-line {
      margin-bottom: 0.5rem;
      width: 1.2rem;
      border-bottom: 0.2rem solid white;
    }
    @media (min-width: 801px) {
      .project-title {
        font-family: var(--font2);
        font-size: 0.9rem;
        margin-bottom: 0.3rem;
      }
      .project-title-line {
        display: none;
      }
    }
  `}</style>
);

export default ProjectDescriptionTitle;
