import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactSVG from 'react-svg';
import MainNav from './MainNav';
import { useLanguage } from '../contexts/LanguageProvider';

const Header = ({ darkHeader }) => {
  const [headerScrollClass, setHeaderScrollClass] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = open => {
    setMenuOpen(open);
  };

  const onWindowScroll = () => {
    setHeaderScrollClass(window.pageYOffset <= 5 ? '' : 'header--scrolled');
  };

  useEffect(() => {
    window.addEventListener('scroll', onWindowScroll);
    return () => {
      window.removeEventListener('scroll', onWindowScroll);
    };
  }, []);

  const useDarkHeader = darkHeader && !headerScrollClass && !menuOpen;
  const headerColorClass = useDarkHeader ? 'header--inverted' : '';
  const headerMenuClass = menuOpen ? 'header--menu-open' : '';
  const { languagePrefix } = useLanguage();

  return (
    <header
      className={`header ${headerColorClass} ${headerScrollClass} ${headerMenuClass}`}
    >
      <div className="container">
        <div className="header__inner">
          <a href={languagePrefix} className="header__logo">
            <ReactSVG
              src="/img/logo-iso.svg"
              className="header__logo-img header__logo-img--iso"
            />
            <ReactSVG
              src="/img/logo.svg"
              className="header__logo-img header__logo-img--full"
            />
          </a>
          <MainNav darkToggle={useDarkHeader} onMenuOpen={handleMenuOpen} />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  darkHeader: PropTypes.bool,
};

Header.defaultProps = {
  darkHeader: false,
};

export default Header;
