import LinkBox from "./LinkBox";
import ProjectDescriptionTitle from "./ProjectDescriptionTitle";

function ProjectItem(props) {
  return (
    <div className="project-item-container">
      <div className="project-info-section">
        <div>
          <ProjectDescriptionTitle title="WEBSITE" />
          <a
            href={props.link}
            target="_blank"
            className="link-and-arrow-container"
          >
            <p>{props.name}</p>
            <div className="link-arrow-container">
              <img
                className="link-arrow"
                src="/img/whitearrow3.png"
                alt="arrow"
              />
            </div>
          </a>
        </div>
        <div>
          <ProjectDescriptionTitle title="COMPANY" />
          <p>{props.company}</p>
        </div>
        <div>
          <ProjectDescriptionTitle title="ROLE" />
          <p>{props.role}</p>
        </div>
        <div>
          <ProjectDescriptionTitle title="TOOLS" />
          <p>{props.tools}</p>
        </div>
      </div>

      <a href={props.link} target="_blank">
        <img className="screenshot" src={props.img} alt="screenshot" />
      </a>
      <div className="arrow-container">
        <img className="arrow" src="/img/arrow.png" alt="arrow" />
      </div>
      {style}
    </div>
  );
}

const style = (
  <style jsx>{`
    .project-item-container {
      padding-right: var(--global-margin);
      padding-left: var(--global-margin);
      margin-top: 2rem;
    }
    .link-and-arrow-container {
      display: flex;
    }
    .item-title-container {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .link-arrow {
      width: 1rem;
      transform: translateY(0.35rem);
      padding-left: 0.4rem;
      position: relative;
      z-index: -1;
    }
    p {
      font-size: 1.1rem;
      color: white;
      font-family: var(--font4);
      margin-block-start: 0.2rem;
      margin-block-end: 0;
    }
    .screenshot {
      margin-top: 1.7rem;
      margin-bottom: 1rem;
      width: 100%;
      height: auto;
      border: 8px solid white;
      border-radius: 5px;
    }
    .separation-line {
      margin-bottom: 0.5rem;
      width: 100%;
      float: right;
      border-bottom: 0.2rem solid white;
    }
    .arrow-container {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      margin-top: 4rem;
      margin-bottom: -5rem;
      transform: translateY(-4rem);
      position: relative;
      z-index: -1;
    }
    .arrow {
      width: 2rem;
      opacity: 0.8;
    }
    @media (min-width: 801px) {
      p {
        font-size: 1rem;
        margin-block-end: 0.5rem;
      }
      .project-info-section {
        display: grid;
        grid-template-columns: 50% 50%;
      }
      .link-arrow {
        width: 1rem;
        transform: translateY(0.4rem);
        padding-left: 0.7rem;
      }
      .arrow {
        width: 3rem;
        opacity: 0.8;
        z-index: -10;
      }
      .arrow-container {
        margin-bottom: -3rem;
      }
      .screenshot {
        margin-top: 2rem;
      }
    }
  `}</style>
);

export default ProjectItem;
