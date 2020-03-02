import Layout from "../components/Layout";
import LandingText from "../components/LandingText";
import ReleaseEntry from "../components/ReleaseEntry";
import AudioPlayer from "../components/AudioPlayer";
import Prismic from "prismic-javascript";
import { useEffect } from "react";

function Index() {
  const [releases, setReleasesData] = React.useState(null);
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
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Layout>
        <LandingText />
        <ReleaseEntry releases={releases} />
      </Layout>
    </div>
  );
}

export default Index;
