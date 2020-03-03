const SocialIcons = () => (
  <div className="social-icons">
    <a href="https://www.facebook.com/ElisRecords/" target="_blank">
      <img className="social-icon-pic fb" src="/img/fb.png" alt="fb" />
    </a>
    <a href="https://www.instagram.com/elisrecords" target="_blank">
      <img className="social-icon-pic" src="/img/ig.png" alt="linkedin" />
    </a>
    <a href="mailto:elis.records.ola@gmail.com" target="_blank">
      <img className="social-icon-pic mail" src="/img/mail.png" alt="mail" />
    </a>
    <style jsx>{`
      .social-icons {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .social-icon-pic {
        width: 1.5rem;
        padding: 1rem;
      }
      .mail,
      .fb {
        width: 1.3rem;
      }
    `}</style>
  </div>
);

export default SocialIcons;
