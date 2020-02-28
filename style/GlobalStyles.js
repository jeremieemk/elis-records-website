const GlobalStyles = (
  <style jsx global>{`
    @font-face {
      font-family: "PxGroteskBold";
      src: url("fonts/PxGrotesk-Bold.woff2") format("woff2");
      src: url("fonts/PxGrotesk-Bold.woff") format("woff");
      src: url("fonts/PxGroteskBold.ttf") format("truetype");
    }
    @font-face {
      font-family: "Sectra";
      src: url("fonts/Sectra.woff2") format("woff2");
      src: url("fonts/Sectra.woff") format("woff");
      src: url("fonts/Sectra.ttf") format("truetype");
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
      --desktop-padding: 25%;
      --color1: #f85e3c;
      --color2: #fff55a;
      --font1: "Sectra";
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
    @keyframes fadeIn {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }
  `}</style>
);

export default GlobalStyles;
