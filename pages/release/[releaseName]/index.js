import { useRouter } from "next/router";
import Layout from "../../../components/Layout";

function Release(props) {
  const router = useRouter();
  const { releaseName } = router.query;
  let selectedRelease = {};
  props.releases &&
    props.releases.map(
      release =>
        release.slugs.includes(releaseName) && (selectedRelease = release)
    );
  console.log(selectedRelease);
  return (
    <Layout>
      <div>
        <h1>Release: {releaseName}</h1>
      </div>
    </Layout>
  );
}

export default Release;
