import Header from "./Header";
import Head from "next/head";
import GlobalStyles from "../style/GlobalStyles";

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
        <p className="email-address">ola@elis-records.com</p>
        <div className="open-source">
          built by{" "}
          <a
            className="overdub-link"
            href="https://www.overdub.dev/"
            target="_blank"
          >
            overDub.dev
          </a>{" "}
          with next.js and open-sourced on{" "}
          <a
            className="github-link"
            href="https://github.com/jeremieemk/elis-records-website"
            target="_blank"
          >
            GitHub
          </a>
        </div>
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
        margin-top: 3rem;
        text-align: center;
        color: black;
        font-family: var(--font1);
        font-size: var(--standard-font-size);

        letter-spacing: 0.05rem;
      }
      .github-link,
      .overdub-link {
        color: var(--color2);
      }
      .open-source {
        margin-bottom: 0.5rem;
        opacity: 0.7;
      }
      .email-address {
        margin-bottom: 1rem;
      }
    `}</style>
  </div>
);

export default Layout;
