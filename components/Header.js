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
        height: 4rem;
      }
      @media (min-width: 801px) {
        .elis-logo {
          height: 8rem;
        }
      }
      @media (min-width: 2200px) {
        .elis-logo {
          height: 11rem;
        }
      }
    `}</style>
  </div>
);

export default Header;
