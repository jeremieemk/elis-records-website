import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
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
    <div className="main-container" style={{ height: "100vh" }}>
      {!selectedRelease ? (
        <Loader size="80" />
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
              <a href={selectedRelease.data.spotify.url} target="_blank">
                <img
                  className="release-page-cover"
                  src={selectedRelease.data.cover.url.slice(0, -21)}
                  alt="release-cover"
                />
              </a>

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
                height: 3rem;
                width: auto;
                margin-bottom: 1rem;
                margin-top: 1rem;
                cursor: pointer;
              }
              .release-page-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-family: var(--font1);
                text-transform: uppercase;
                line-height: 1.6rem;
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
              @media (min-width: 500px) {
                .release-page-container {
                  padding-left: 37%;
                  padding-right: 37%;
                }
                .release-page-logo {
                  height: 5rem;
                  margin-bottom: 2rem;
                  margin-top: 2rem;
                }
                .release-artist-name {
                  font-size: 1.7rem;
                }
                .release-song-title {
                  margin-top: 1rem;
                  font-size: 1.2rem;
                }
                .release-page-details {
                  margin: 3rem;
                }
              }
            `}</style>
          </div>
        </Layout>
      )}
    </div>
  );
}

export default Release;
