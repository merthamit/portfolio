import React, { useContext, useState } from 'react';
import './header.css';
import Logo from '../../assets/logo-no-background.png';
import { MenuContext } from '../../context/MenuContext';

const Header = () => {
  const [isToggle, setIsToggle] = useState(false);
  const { currSection, setCurrSection } = useContext(MenuContext);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo" style={{ width: '80px' }}>
          <img src={Logo} alt="" className="nav__logo-img" />
        </a>

        <div className={`nav__menu ${isToggle ? 'nav__toggle-open' : ''}`}>
          <ul className="nav__list">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setCurrSection('home')}
                className={`nav__link ${
                  currSection === 'home' ? 'active-link' : ''
                }`}
              >
                Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setCurrSection('about')}
                className={`nav__link ${
                  currSection === 'about' ? 'active-link' : ''
                }`}
              >
                About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#services"
                onClick={() => setCurrSection('services')}
                className={`nav__link ${
                  currSection === 'services' ? 'active-link' : ''
                }`}
              >
                Services
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#resume"
                onClick={() => setCurrSection('resume')}
                className={`nav__link ${
                  currSection === 'resume' ? 'active-link' : ''
                }`}
              >
                Experience
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setCurrSection('portfolio')}
                className={`nav__link ${
                  currSection === 'portfolio' ? 'active-link' : ''
                }`}
              >
                Recent Works
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#blog"
                onClick={() => setCurrSection('blog')}
                className={`nav__link ${
                  currSection === 'blog' ? 'active-link' : ''
                }`}
              >
                Blog
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setCurrSection('contact')}
                className={`nav__link ${
                  currSection === 'contact' ? 'active-link' : ''
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="nav__close" onClick={() => setIsToggle(!isToggle)}>
            <i className="icon-close"></i>
          </div>
        </div>
        <div className="nav__toggle" onClick={() => setIsToggle(!isToggle)}>
          <i className="icon-menu"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
