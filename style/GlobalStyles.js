const GlobalStyles = (
  <style jsx global>{`
    @font-face {
      font-family: "PxGroteskBold";
      src: url("fonts/PxGrotesk-Bold.woff2") format("woff2");
      src: url("fonts/PxGrotesk-Bold.woff") format("woff");
      src: url("fonts/PxGroteskBold.ttf") format("truetype");
    }
    @font-face {
      font-family: "MonospaceTypewriter";
      src: url("fonts/Inconsolata-Regular.ttf") format("truetype");
    }
    @font-face {
      font-family: "WorkSans-Bold";
      src: url("fonts/WorkSans-Bold.woff2") format("woff2");
      src: url("fonts/WorkSans-Bold.woff") format("woff");
      src: url("fonts/WorkSans-Bold.ttf") format("truetype");
    }
    @font-face {
      font-family: "WorkSans-Regular";
      src: url("fonts/WorkSans-Regular.ttf") format("truetype");
    }

    :root {
      --global-margin: 2rem;
      --standard-font-size: 0.75rem;
      --desktop-font-size: 1.1rem;
      --desktop-padding: 25%;
      --color1: #f7f7f7;
      --color2: #f74d2c;
      --font1: "MonospaceTypewriter";
      --font2: "PxGroteskBold";
      --font3: "WorkSans-Bold";
      --font4: "WorkSans-Regular";
      --line-width: 0.1rem;
    }
    body {
      background-color: var(--color1);
      margin: 0;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
    p {
      margin-block-start: 0.4rem;
      margin-block-end: 0.4rem;
    }
    input[type="range"] {
      -webkit-appearance: none;
      background: transparent;
    }
    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      background: black;
      height: 12px;
      width: 12px;
      margin-top: -5px;
      border-radius: 99px;
    }
    input[type="range"]::-webkit-slider-runnable-track {
      height: 1px;
      background: black;
    }
    input:focus,
    textarea:focus,
    select:focus {
      outline: none;
    }

    @media (min-width: 801px) {
      p {
        margin-block-start: 1rem;
        margin-block-end: 1rem;
      }
    }
  `}</style>
);

export default GlobalStyles;
