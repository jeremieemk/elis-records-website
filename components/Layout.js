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
            href="https://github.com/jeremieemk/elis-records-website"
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
    <style jsx>{`
      .container {
        position: relative;
        width: 100%;
      }
      .footer {
        width: 100%;
        position: absolute;
        bottom: -2;
        margin-bottom: 10rem;
        margin-top: 2rem;
        text-align: center;
        color: black;
        font-family: var(--font1);
        font-size: var(--standard-font-size);
        text-transform: uppercase;
        letter-spacing: 0.05rem;
      }
      .github-link {
        color: var(--color2);
      }
      .open-source {
        margin-bottom: 0.5rem;
      }
    `}</style>
  </div>
);

export default Layout;
