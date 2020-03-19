import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Layout from "../../../components/Layout";
import Loader from "../../../components/Loader";
import LinkButtonList from "../../../components/LinkButtonList";
import Link from "next/link";

function Release(props) {
  const [selectedRelease, setSelectedRelease] = useState(null);
  const router = useRouter();
  const { releaseName } = router.query;
  useEffect(() => {
    props.releases &&
      props.releases.map(function(release) {
        if (release.slugs.includes(releaseName)) {
          setSelectedRelease(release);
        }
      });
  }, [props]);

  return (
    <div className="main-container">
      {!selectedRelease ? (
        <Loader />
      ) : (
        <Layout>
          <div className="release-page-container">
            <Link href="/">
              <img
                className="release-page-logo"
                src="/img/logo.jpg"
                alt="logo"
              />
            </Link>
            <div>
              <img
                className="release-page-cover"
                src={selectedRelease.data.cover.url.slice(0, -21)}
                alt="release-cover"
              />

              <div className="release-page-details">
                <div className="release-artist-name">
                  {selectedRelease.data.artist[0].text}
                </div>
                <div className="release-song-title">
                  {selectedRelease.data.title[0].text}
                </div>
              </div>
              <LinkButtonList selectedRelease={selectedRelease} />
            </div>

            <style jsx>{`
              .release-page-logo {
                height: 2rem;
                width: auto;
                margin-bottom: 1rem;
                margin-top: 1rem;
              }
              .main-container {
                height: 100vh;
                width: 100%;
              }
              .release-page-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-family: var(--font1);
                text-transform: uppercase;
                line-height: 1.2rem;
                letter-spacing: 0.05rem;
                padding-left: 3rem;
                padding-right: 3rem;
                text-align: center;
                margin-bottom: 2rem;
              }

              .release-page-cover {
                width: 100%;
              }
              .release-page-details {
                text-align: center;
                margin-bottom: 1.5rem;
              }
              .release-artist-name {
                margin-top: 1.5rem;
                margin-bottom: 0.5rem;
                font-size: 1.2rem;
              }
              .release-song-title {
                margin-top: 0.3rem;
                font-size: 0.7rem;
              }
            `}</style>
          </div>
        </Layout>
      )}
    </div>
  );
}

export default Release;
