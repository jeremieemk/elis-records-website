function ClosingCross(props) {
  return (
    <div>
      <a className="close" />
      <style jsx>{`
        .close {
          position: absolute;
          right: 1rem;
          top: 0.5rem;
          width: 1rem;
          height: 1rem;
          opacity: 0.5;
        }
        .close:hover {
          opacity: 1;
        }
        .close:before,
        .close:after {
          position: absolute;
          left: 15px;
          content: " ";
          height: 1rem;
          width: 1px;
          background-color: black;
        }
        .close:before {
          transform: rotate(45deg);
        }
        .close:after {
          transform: rotate(-45deg);
        }
        .close:hover {
          transform: rotate(-45deg);
        }
      `}</style>
    </div>
  );
}

export default ClosingCross;
