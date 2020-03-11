import Head from "next/head";
import landingText from "../text/landingText";

function Metas() {
  return (
    <Head>
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content="Elis Records" />
      <meta
        name="og:description"
        property="og:description"
        content={landingText}
      />
      <meta property="og:site_name" content="Elis Records" />
      <meta property="og:url" content="http://www.elis-records.com/" />
      <meta
        property="og:image"
        content="http://www.elis-records.com/img/elis-socials-img-tag.jpg"
      />
      <meta
        name="twitter:image"
        content="http://www.elis-records.com/img/elis-socials-img-tag.jpg"
      />
      <title>Elis Records</title>
      <meta name="description" content={landingText} />
      <link rel="icon" type="image/png" href="/img/favicon.ico" />
      <link rel="apple-touch-icon" href="/img/favicon.ico" />
      <link rel="stylesheet" href="/css/priority.css" />
    </Head>
  );
}

export default Metas;
