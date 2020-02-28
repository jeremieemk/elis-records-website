import Layout from "../components/Layout";
import LandingText from "../components/LandingText";

function Index() {
  return (
    <div>
      <Layout>
        <LandingText />
      </Layout>

      {style}
    </div>
  );
}

const style = <style jsx>{``}</style>;

export default Index;
