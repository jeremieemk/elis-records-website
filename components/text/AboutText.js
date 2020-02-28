const AboutText = () => (
  <div className="about-text">
    <h1 className="about-title">
      I learned to <span className="yellow">code </span> by building online
      radio stations.
    </h1>
    <p className="">
      I built my first web project back in 2008. I had been working in FM radio
      stations as an engineer for a few years and I wanted to take advantage of
      streaming technology to build a truly international and multilingual radio
      station on the internet. <span className="yellow">Groovalizacion </span>
      radio was born in 2008 in the midst of my travels (I lived in 7 countries
      in 10 years). I built the first version and I have helped design the
      following versions although I didn’t develop them myself. During those
      years I was also developing a career as a DJ and music producer. I always
      had in the back of my mind that studying computer science would be a
      fantastic tool to renew my approach to music making and to open myself to
      new intellectual horizons.
    </p>
    <h1 className="about-title">
      The technologies I have used the most so far are
      <span className="yellow"> Javascript </span> and
      <span className="yellow"> React. </span>
    </h1>
    <p>
      I took the ‘CS50' course at
      <span className="yellow"> Harvard University </span> online in 2017 and it
      was a revelation. I felt confident to take on more ambitious projects. I
      rebuilt my artist site using my newly-learned skills in
      <span className="yellow"> Python </span>and
      <span className="yellow"> Javascript </span>. I connected with more
      experienced developers as mentors and got involved in a few more projects
      in the following years. I did a <span className="yellow"> React </span>
      project last year for an internet radio that involved interactions with a
      map. I also built an architect portfolio using
      <span className="yellow"> jQuery </span> and Vapid. During the summer 2019
      I helped the Reveel team build their music metadata app on{" "}
      <span className="yellow"> React Native</span>.
    </p>
    <p>
      Currently I am developing a music creativity enhancing app with my brother
      using Firebase and Flutter.
    </p>
    {style}
  </div>
);

const style = (
  <style jsx>{`
    .about-title {
      font-size: 1.4rem;
      text-align: center;
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
    .about-text {
      color: white;
      font-family: var(--font4);
      padding-left: 3rem;
      padding-right: 3rem;
      text-align: left;
      font-size: 1rem;
    }
    .yellow {
      color: var(--color2);
      font-family: var(--font4);
    }
    @media (min-width: 801px) {
      .about-title {
        font-size: 2rem;
        text-align: left;
        margin-top: 4rem;
        margin-bottom: 3rem;
        line-height: 2.3rem;
      }
      .about-text {
        font-size: 1.2rem;
        line-height: 1.9rem;
      }
    }
  `}</style>
);

export default AboutText;
