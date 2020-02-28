import Header from "./Header";
import Head from "next/head";
import GlobalStyles from "../style/GlobalStyles";
import SocialIcons from "./SocialIcons";

const Layout = props => (
  <div>
    <Head>
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <link rel="stylesheet" href="/css/priority.css"></link>
    </Head>

    <div className="container">
      <Header />
      {props.children}
      <div className="footer">
        <div className="open-source">
          (Built with react.js and open-sourced on{" "}
          <a
            className="github-link"
            href="https://github.com/jeremieemk/overdub/"
            target="_blank"
          >
            GitHub
          </a>
          )
        </div>
        <SocialIcons />
      </div>
    </div>
    {GlobalStyles}
    {style}
  </div>
);

const style = (
  <style jsx>{`
    .container {
      position: relative;
      width: 100%;
    }
    .footer {
      width: 100%;
      position: absolute;
      bottom: -2;
      margin-bottom: 1rem;
      margin-top: 2rem;
      text-align: center;
      color: white;
      font-family: var(--font4);
      font-size: 0.8rem;
    }
    .github-link {
      color: var(--color2);
    }
    .open-source {
      margin-bottom: 0.5rem;
    }
  `}</style>
);

export default Layout;
