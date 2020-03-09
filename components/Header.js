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
        width: 100%;
      }
      .elis-logo {
        padding-top: 2.4rem;
        width: auto;
        height: 5rem;
      }
      @media (min-width: 801px) {
        .elis-logo {
          width: auto;
          height: 8rem;
        }
      }
    `}</style>
  </div>
);

export default Header;
