function PageTitle(props) {
  return (
    <div className="page-title-container">
      <div className="page-title">{props.title}</div>
      <div className="title-line"></div>
      {style}
    </div>
  );
}

const style = (
  <style jsx>{`
    .page-title-container {
      padding-top: 30%;
      display: flex;
      flex-direction: column;
      align-items: center;
      opacity: 0;
      animation: fadeIn 1s;
      animation-fill-mode: forwards;
    }
    .page-title {
      color: var(--color2);
      font-family: var(--font3);
      text-align: center;
      font-size: 1.3rem;
    }
    .title-line {
      margin-bottom: 0.5rem;
      width: 1.2rem;
      border-bottom: 0.2rem solid white;
      margin-left: 3.3rem;
    }
    @media (min-width: 801px) {
      .page-title-container {
        padding-top: 10rem;
      }
    }
  `}</style>
);

export default PageTitle;
