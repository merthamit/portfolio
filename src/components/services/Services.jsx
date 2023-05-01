import React, { useContext, useEffect } from 'react';
import './services.css';
import Image1 from '../../assets/service-1.svg';
import Image2 from '../../assets/service-2.svg';
import Image3 from '../../assets/service-3.svg';
import { useHookView } from '../../hooks/useHookView';
import { MenuContext } from '../../context/MenuContext';

const data = [
  {
    id: 1,
    image: Image1,
    title: 'UI/UX design',
    description:
      'Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.',
  },
  {
    id: 2,
    image: Image2,
    title: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.',
  },
  {
    id: 3,
    image: Image3,
    title: 'Photography',
    description:
      'Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.',
  },
];

const Services = () => {
  // For sections
  const { ref, styleOption, inView } = useHookView({});

  // For header
  const { ref: ref2, inView: inView2 } = useHookView({
    triggerOnce: false,
  });
  const contextVal = useContext(MenuContext);

  useEffect(() => {
    if (inView2) {
      contextVal.setCurrSection('services');
    }
  }, [inView2]);
  return (
    <section
      className={`section services container ${styleOption}`}
      id="services"
      ref={ref}
    >
      <h2 ref={ref2} className="section__title">
        Services
      </h2>
      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
