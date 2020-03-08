function Loader() {
  return (
    <div>
      <p>Hello world</p>
      <img className="loader" src="/img/logo-simple.png" alt="loader" />
      <style jsx>{`
        .loader {
          display: inline-block;
          position: relative;
          width: 80px;
          height: 80px;
          animation: loader 10s infinite;
        }

        @keyframes loader {
          0% {
            transform: rotate(0);
            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
          }
          50% {
            transform: rotate(900deg);

            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          }
          100% {
            transform: rotate(1800deg);
          }
        }
      `}</style>
    </div>
  );
}

export default Loader;
