import { useRouter } from "next/router";

function Release() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>Release: {id}</h1>
    </div>
  );
}

export default Release;
