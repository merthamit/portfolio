import React from 'react';

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://www.instagram.com/mert_hamit"
        className="home__social-link"
        rel="noreferrer"
        target="_blank"
      >
        <i className="fa-brands fa-instagram"></i>
      </a>
      <a
        href="https://www.twitter.com/MertHamit11"
        className="home__social-link"
        rel="noreferrer"
        target="_blank"
      >
        <i className="fa-brands fa-twitter"></i>
      </a>
      <a
        href="https://linkedin.com/in/mert-hamit-koçer-8205991b3"
        className="home__social-link"
        rel="noreferrer"
        target="_blank"
      >
        <i className="fa-brands fa-linkedin"></i>
      </a>
    </div>
  );
};

export default HeaderSocials;
