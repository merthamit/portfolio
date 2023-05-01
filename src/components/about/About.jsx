import React, { useEffect, useContext } from 'react';
import './about.css';
import aboutImg from '../../assets/cv.png';
import AboutBox from './AboutBox';
import { useHookView } from '../../hooks/useHookView';
import useCount from '../../hooks/useCount';
import { MenuContext } from '../../context/MenuContext';

const About = () => {
  // For sections
  const { ref, styleOption } = useHookView();

  // For header
  const { ref: ref2, inView: inView2 } = useHookView({
    triggerOnce: false,
  });
  const contextVal = useContext(MenuContext);

  useEffect(() => {
    if (inView2) {
      contextVal.setCurrSection('about');
    }
  }, [inView2]);
  return (
    <section
      className={`about container section ${styleOption}`}
      ref={ref}
      id="about"
    >
      <h2 ref={ref2} className="section__title">
        About Me
      </h2>

      <div className="about__container grid">
        <img src={aboutImg} alt="" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Hello, my name is Mert Koçer. I'm 24 years old. I live in Türkiye.
              I am interested in software.
            </p>
            <a href="#about" className="btn">
              Download Cv
            </a>
          </div>
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">HTML, CSS</h3>
                <span className="skills__number">%{useCount(0, 90)}</span>
              </div>
              <div className="skills__bar">
                <span
                  className="skills__percentage development"
                  style={{ width: `${useCount(0, 90)}%` }}
                ></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">REACT</h3>
                <span className="skills__number">%{useCount(0, 80)}</span>
              </div>
              <div className="skills__bar">
                <span
                  className="skills__percentage ui__design"
                  style={{ width: `${useCount(0, 80)}%` }}
                ></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">NEXT JS</h3>
                <span className="skills__number">%{useCount(0, 60)}</span>
              </div>
              <div className="skills__bar">
                <span
                  className="skills__percentage photography"
                  style={{ width: `${useCount(0, 60)}%` }}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  );
};

export default About;
