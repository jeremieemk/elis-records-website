import Layout from "../components/Layout";
import LandingText from "../components/LandingText";
import ReleaseEntry from "../components/ReleaseEntry";

function Index() {
  return (
    <div>
      <Layout>
        <LandingText />
        <ReleaseEntry />
      </Layout>

      {style}
    </div>
  );
}

const style = <style jsx>{``}</style>;

export default Index;
