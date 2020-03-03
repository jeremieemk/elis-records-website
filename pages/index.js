import Layout from "../components/Layout";
import LandingText from "../components/LandingText";
import ReleaseEntry from "../components/ReleaseEntry";
import Prismic from "prismic-javascript";
import { useEffect, useState } from "react";

function Index() {
  const [releases, setReleasesData] = useState(null);
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
        console.log(response);
        setReleasesData(response.results);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="main-container">
      <Layout>
        <LandingText />
        <ReleaseEntry releases={releases} />
      </Layout>
      <style jsx>{`
        @media (min-width: 801px) {
          .main-container {
            padding-left: 30%;
            padding-right: 30%;
          }
        }
      `}</style>
    </div>
  );
}

export default Index;
