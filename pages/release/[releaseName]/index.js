import { useRouter } from "next/router";

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
    <div>
      <h1>Release: {releaseName}</h1>
    </div>
  );
}

export default Release;
