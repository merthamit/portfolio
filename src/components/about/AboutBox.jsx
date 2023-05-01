import React from 'react';
import useCount from '../../hooks/useCount';

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about__icon icon-fire"></i>
        <div>
          <h3 className="about__title">{useCount(0, 198)}</h3>
          <div className="about__subtitle">Project completed</div>
        </div>
      </div>
      <div className="about__box">
        <i className="about__icon icon-cup"></i>
        <div>
          <h3 className="about__title">{useCount(0, 5670)}</h3>
          <div className="about__subtitle">Cup of coffee</div>
        </div>
      </div>
      <div className="about__box">
        <i className="about__icon icon-people"></i>
        <div>
          <h3 className="about__title">{useCount(0, 427)}</h3>
          <div className="about__subtitle">Satisfied clients</div>
        </div>
      </div>
      <div className="about__box">
        <i className="about__icon icon-badge"></i>
        <div>
          <h3 className="about__title">{useCount(0, 35)}</h3>
          <div className="about__subtitle">Nominees winner</div>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
