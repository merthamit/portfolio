import React, { useContext, useEffect } from 'react';
import './resume.css';
import Data from './Data';
import Card from './Card';
import { useHookView } from '../../hooks/useHookView';
import { MenuContext } from '../../context/MenuContext';
const Resume = () => {
  // For sections
  const { ref, styleOption } = useHookView({});

  // For header
  const { ref: ref2, inView: inView2 } = useHookView({
    triggerOnce: false,
  });
  const contextVal = useContext(MenuContext);

  useEffect(() => {
    if (inView2) {
      contextVal.setCurrSection('resume');
    }
  }, [inView2]);
  return (
    <section
      className={`resume container section ${styleOption}`}
      ref={ref}
      id="resume"
    >
      <h2 ref={ref2} className="section__title">
        Experience
      </h2>

      <div className="resume__container grid">
        <div className="timeline grid">
          {Data.map((val, id) => {
            if (val.category === 'education') {
              return (
                <Card
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              );
            }
            return <div key={id}></div>;
          })}
        </div>
        <div className="timeline grid">
          {Data.map((val, index) => {
            if (val.category === 'experience') {
              return (
                <Card
                  key={index}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              );
            }
            return <div key={index}></div>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;
