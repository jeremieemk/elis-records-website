import Link from "next/link";

const Header = () => (
  <div className="header-container">
    <Link href="/">
      <img className="elis-logo" src="/img/logo.jpg" alt="logo" />
    </Link>
    <style jsx>{`
      .header-container {
        display: flex;
        justify-content: center;
      }
      .elis-logo {
        padding-top: 2rem;
        width: 10rem;
      }
    `}</style>
  </div>
);

export default Header;
