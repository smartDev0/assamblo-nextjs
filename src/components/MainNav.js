import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactSVG from 'react-svg';
import { translate } from 'react-translate';
import menuItems from '../data/menu';
import ActiveLink from './ActiveLink';
import {
  TranslationsLanguageEnum,
  TranslationsLanguageLabel,
  TranslationKeysEnum,
} from '../data/translations/enums';
import { useLanguage } from '../contexts/LanguageProvider';
import { useRouter } from 'next/router'


const MainNav = ({ darkToggle, onMenuOpen, t }) => {
  const subMenus = [
    {
      name: t(TranslationKeysEnum.MainNav.VERTICALS_PAGE_FINTECH_LABEL),
      link: t(TranslationKeysEnum.MainNav.VERTICALS_PAGE_FINTECH_LINK),
    },
    {
      name: t(TranslationKeysEnum.MainNav.VERTICALS_PAGE_HEALTHCARE_LABEL),
      link: t(TranslationKeysEnum.MainNav.VERTICALS_PAGE_HEALTHCARE_LINK),
    },
    {
      name: t(TranslationKeysEnum.MainNav.VERTICALS_PAGE_UXUI_LABEL),
      link: t(TranslationKeysEnum.MainNav.VERTICALS_PAGE_UXUI_LINK),
    },
    {
      name: t(TranslationKeysEnum.MainNav.VERTICALS_PAGE_BLOCKCHAIN_LABEL),
      link: t(TranslationKeysEnum.MainNav.VERTICALS_PAGE_BLOCKCHAIN_LINK),
    }
  ];

  const [showMenu, setShowMenu] = useState(false);
  const [select, setSelect] = useState('');
  const { translationsLocale, setTranslationsLocale } = useLanguage();

  const onLanguageChange = event => {
    const { value } = event.target;
    setTranslationsLocale(value);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const changeSelect = (state) => {
    setSelect(state)
  }

  useEffect(() => {
    onMenuOpen(!showMenu);
  }, [showMenu]);
  const router = useRouter();

  return (
    <nav
      className={`main-nav ${showMenu ? 'main-nav--open' : ''} ${darkToggle ? 'main-nav--dark-menu' : ''
        }`}
    >
      <button type="button" className="main-nav__toggle" onClick={toggleMenu}>
        <ReactSVG src="/img/icons/menu.svg" />
      </button>
      <ul className="main-nav__list">
        {menuItems.map((menuItem, i) => (
          <li
            key={menuItem.linkKey}
            className={`main-nav__item ${menuItem.onlyMobile ? 'only-mobile' : ''}`}
          >
            {i == 2 && <>
              <ActiveLink
                activeClassName="main-nav__link--active"
                href={router.pathname.includes('vertical') ? router.pathname : t(menuItem.linkKey)}
                className={'main-nav__disabled-link'}
              >
                <span className={'main-nav__link'}>{t(menuItem.titleKey)}</span>

              </ActiveLink>
              <img src='/img/icons/arrow.png' alt="arrow" className="main-nav__icon" onClick={() => changeSelect(menuItem.titleKey)} />
              <ul className="main-nav__extend">
                {subMenus.map((menu, index) => (
                  <li key={index} className="main-nav__sub">
                    <ActiveLink href={menu.link} onClick={() => changeSelect(menuItem.titleKey)}>
                      <span>
                        {menu.name}
                      </span>
                    </ActiveLink>
                  </li>
                ))}
              </ul>
            </>
            }
            {i != 2 &&
              <ActiveLink
                activeClassName="main-nav__link--active"
                href={t(menuItem.linkKey)}
              >
                <span className={'main-nav__link'}>{t(menuItem.titleKey)}</span>
              </ActiveLink>
            }
          </li>

        ))}
        <li className="main-nav__item">
          <a
            href={t(TranslationKeysEnum.MainNav.CONTACT_US_BUTTON_LINK)}
            className="main-nav__btn"
          >
            {t(TranslationKeysEnum.MainNav.CONTACT_US_BUTTON_LABEL)}
          </a>
        </li>
        <li className="main-nav__item">
          <div className="main-nav__select">
            <select onChange={onLanguageChange} value={translationsLocale}>
              {Object.values(TranslationsLanguageEnum).map(translationKey => (
                <option key={translationKey} value={translationKey}>
                  {TranslationsLanguageLabel[translationKey]}
                </option>
              ))}
            </select>
            <span className="main-nav__select--arrow" />
          </div>
        </li>
      </ul>
    </nav>
  );
};

MainNav.propTypes = {
  darkToggle: PropTypes.bool,
  onMenuOpen: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

MainNav.defaultProps = {
  darkToggle: false,
};

export default translate(TranslationKeysEnum.MainNav.NAME)(MainNav);
