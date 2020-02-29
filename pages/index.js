import Layout from "../components/Layout";
import LandingText from "../components/LandingText";
import ReleaseEntry from "../components/ReleaseEntry";
import AudioPlayer from "../components/AudioPlayer";

function Index() {
  return (
    <div>
      <Layout>
        <AudioPlayer />
        <LandingText />
        <ReleaseEntry />
      </Layout>

      {style}
    </div>
  );
}

const style = <style jsx>{``}</style>;

export default Index;
