import Layout from "../components/Layout";
import LandingText from "../components/LandingText";
import ReleaseEntry from "../components/ReleaseEntry";
import Loader from "../components/Loader";
import Metas from "../components/utils/Metas";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Index(props) {
  return (
    <div>
      <Metas />
      <div className="main-container">
        {props.dataIsLoaded ? (
          <div className="loaded-site-container">
            <Layout>
              <Header />
              <LandingText />

              <ReleaseEntry releases={props.releases} />
              <Footer />
            </Layout>
          </div>
        ) : (
          <Loader size="80" />
        )}
      </div>
      <style jsx>{`
        .main-container {
          height: 100vh;
        }
        .loaded-site-container {
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

        @media (min-width: 801px) {
          .main-container {
            padding-left: 25%;
            padding-right: 25%;
          }
        }
        @media (min-width: 2200px) {
          .main-container {
            padding-left: 35%;
            padding-right: 35%;
          }
        }
      `}</style>
    </div>
  );
}

export default Index;
