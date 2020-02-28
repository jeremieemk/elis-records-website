import Link from "next/link";

const Logo = () => (
  <div>
    <div className="logo" style={{ fontFamily: "Sectra" }}>
      <Link href="/">
        <a className="logo-letter">O</a>
      </Link>
    </div>
    {style}
  </div>
);

const style = (
  <style jsx>{`
    .logo-letter {
      color: var(--color2);
    }
    .logo {
      z-index: 200;
      font-size: 3rem;
      color: var(--color2);
      margin-left: var(--global-margin);
      margin-top: 1rem;
      position: relative;
      width: 10rem;
    }
    @media (min-width: 801px) {
      .logo {
        font-size: 3rem;
        margin-top: 2.3rem;
      }
    }
  `}</style>
);

export default Logo;
