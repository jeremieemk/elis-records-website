import Layout from "../components/Layout";
import LandingText from "../components/LandingText";
import ReleaseEntry from "../components/ReleaseEntry";
import Prismic from "prismic-javascript";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

function Index() {
  const [releases, setReleasesData] = useState(null);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const apiEndpoint = "https://elis-records.prismic.io/api/v2";
  const accessToken = "";
  const Client = Prismic.client(apiEndpoint, { accessToken });
  useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at("document.type", "release"),
        { orderings: "[my.release.release-date desc]" }
      );
      if (response) {
        setReleasesData(response.results);
        setDataIsLoaded(true);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="main-container">
      {dataIsLoaded ? (
        <div className="loaded-site-container">
          <Layout>
            <LandingText />

            <ReleaseEntry releases={releases} />
          </Layout>
        </div>
      ) : (
        <Loader size="80" />
      )}
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
      `}</style>
    </div>
  );
}

export default Index;
