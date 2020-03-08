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
        padding-top: 2rem;
        width: auto;
        height: 5rem;
        animation: fadeIn 1s;
        animation-fill-mode: forwards;
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
  </div>
);

export default Header;
