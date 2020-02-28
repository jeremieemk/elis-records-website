import Link from "next/link";
import SocialIcons from "./SocialIcons.js";

function HamburgerOpenMenu(props) {
  return (
    <div className="hamburger-menu-container">
      <div className="nested-menu-container">
        <div className="menu-contents">
          <Link href="/index">
            <a onClick={props.handleHamburgerClick}>HELLO</a>
          </Link>
          <Link href="/about">
            <a onClick={props.handleHamburgerClick}>ABOUT ME</a>
          </Link>
          <Link href="/portfolio">
            <a onClick={props.handleHamburgerClick}>PORTFOLIO</a>
          </Link>

          <Link href="/skills">
            <a onClick={props.handleHamburgerClick}>SKILLS</a>
          </Link>

          <a
            href="/img/cv2020.pdf"
            target="_blank"
            onClick={props.handleHamburgerClick}
          >
            CV
          </a>

          <div className="get-in-touch">
            <p>GET IN TOUCH</p>
            <SocialIcons />
          </div>
        </div>
      </div>

      {style}
    </div>
  );
}

const style = (
  <style jsx>{`
    .hamburger-menu-container {
      height: 100vh;
      width: 100vw;
      left: 0;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      z-index: 300;
    }
    .nested-menu-container {
      background: -webkit-linear-gradient(165deg, white 65%, #f6f6f6 65%);
      background: -o-linear-gradient(165deg, white 65%, #f6f6f6 65%);
      background: -moz-linear-gradient(165deg, white 65%, #f6f6f6 65%);
      background: linear-gradient(165deg, white 60%, #f6f6f6 60%);
      height: 100%;
      width: 100%;

      font-size: 1.05rem;
      font-family: var(--font3);
      letter-spacing: 0.1rem;
    }
    .menu-contents {
      height: 100%;
      display: flex;
      margin-top: -2rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .menu-contents > a {
      padding: 1rem;
    }

    .get-in-touch {
      text-align: center;
      transform: translateY(3rem);
    }
    .get-in-touch > p {
      color: black;

      font-size: 0.8rem;
    }
  `}</style>
);

export default HamburgerOpenMenu;
