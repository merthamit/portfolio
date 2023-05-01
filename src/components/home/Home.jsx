import React, { useContext, useEffect, useState } from 'react';
import './home.css';
import Me from '../../assets/cv.png';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
import Typewriter from 'typewriter-effect';
import { MenuContext } from '../../context/MenuContext';
import { useHookView } from '../../hooks/useHookView';

const Home = () => {
  const [clientsXY, setClients] = useState([0, 0]);
  // For header
  const { ref: ref2, inView: inView2 } = useHookView({
    triggerOnce: false,
  });
  const contextVal = useContext(MenuContext);

  useEffect(() => {
    if (inView2) {
      contextVal.setCurrSection('contact');
    }
  }, [inView2]);
  return (
    <section
      ref={ref2}
      id="home"
      onMouseMove={(e) => setClients([e.clientX, e.clientY])}
      className="home container"
    >
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Mert Koçer</h1>
        <Typewriter
          textStyle={{}}
          options={{
            strings: ["I'm a Front-End developer.", 'I love React.'],
            autoStart: true,
            loop: true,
          }}
        />
        <HeaderSocials />
        <a href="#contact" className="btn">
          Hire Me
        </a>
        <ScrollDown />
      </div>
      <Shapes clientsXY={clientsXY} />
    </section>
  );
};

export default Home;
