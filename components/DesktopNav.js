import Link from "next/link";

const menuItems = [
  { name: "HELLO", link: "/" },
  { name: "ABOUT ME", link: "/about" },
  { name: "PORTFOLIO", link: "/portfolio" },
  { name: "SKILLS", link: "/skills" }
];

const renderMenuItems = () =>
  menuItems.map(item => (
    <div className="title-plus-line-container">
      <Link href={item.link}>
        <a className="menu-item-name">{item.name}</a>
      </Link>
      <div className="bottom-line"></div>
    </div>
  ));

const DesktopNav = () => (
  <div className="desktop-nav-container">
    {renderMenuItems()}
    <div className="title-plus-line-container">
      <a className="menu-item-name" href="/img/cv2020.pdf" target="_blank">
        CV
      </a>
      <div className="bottom-line"></div>
    </div>

    {style}
  </div>
);

const style = (
  <style jsx>{`
    .desktop-nav-container > * {
      padding: 2.3rem;
    }

    .bottom-line {
      padding-top: 0.5rem;
      width: 1.2rem;
      border-bottom: 0.2rem solid white;
      margin-left: 0.5rem;
      visibility: hidden;
      opacity: 0;
      transition: visibility 0s, opacity 0.3s linear;
      position: absolute;
    }
    .menu-item-name:hover + .bottom-line {
      visibility: visible;
      opacity: 1;
    }

    @media (max-width: 801px) {
      .desktop-nav-container {
        display: none;
      }
    }
  `}</style>
);

export default DesktopNav;
