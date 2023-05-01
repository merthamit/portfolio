import React, { useContext, useEffect } from 'react';
import './contact.css';
import { useHookView } from '../../hooks/useHookView';
import { MenuContext } from '../../context/MenuContext';

const Contact = () => {
  // For sections
  const { ref, styleOption } = useHookView();

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
      className={`section contact container ${styleOption}`}
      ref={ref}
      id="contact"
    >
      <h3 ref={ref2} className="section__title">
        Get In Touch
      </h3>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">You can message me here.</h3>
          <p className="contact__details">Email: merthamit11@gmail.com</p>
        </div>

        <form action="" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>
            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                placeholder="Insert your email"
              />
            </div>
          </div>
          <div className="contact__form-div">
            <input
              type="text"
              className="contact__form-input"
              placeholder="Insert your subject"
            />
          </div>
          <div className="contact__form-div contact__form-area">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Write your message"
            ></textarea>
          </div>
          <button className="btn">Sende Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
