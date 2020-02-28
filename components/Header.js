import Link from "next/link";
import Logo from "./Logo.js";

const Header = () => (
  <div className="header-container">
    <Link href="/">
      <img className="elis-logo" src="/img/logo.jpg" alt="logo" />
    </Link>
    {style}
  </div>
);

const style = (
  <style jsx>{`
    .header-container {
      display: flex;
      justify-content: center;
    }
    .elis-logo {
      width: 10rem;
    }
  `}</style>
);

export default Header;
