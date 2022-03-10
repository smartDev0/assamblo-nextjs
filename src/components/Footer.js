import React, { useEffect } from 'react';
import ReactSVG from 'react-svg';
import { translate } from 'react-translate';
import menuItems from '../data/menu';
import ModernImage from './ModernImage';
import { TranslationKeysEnum } from '../data/translations/enums';
import ClutchWidget from './ClutchWidget';

const Footer = ({ t }) => (
  <footer className="footer">
    {/* <div className="container">
      <div className="footer__sup">
        <div className="footer__col">
          <p className="footer__title">{t(TranslationKeysEnum.Footer.MENU)}</p>
          <ul className="vertical-menu">
            {menuItems.map(menuItem => (
              <li key={menuItem.titleKey} className="vertical-menu__item">
                <a href={t(menuItem.linkKey)} className="vertical-menu__link">
                  {t(menuItem.titleKey)}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__col">
          <p className="footer__title">
            {t(TranslationKeysEnum.Footer.OUR_OFFICES)}
          </p>
          <p className="footer__text footer__text--bold">Miami</p>
          <p className="footer__text">Brickell City Centre</p>
          <p className="footer__text">78 SW 7th Street</p>
          <p className="footer__text footer__text--bold footer__text--blue">
            Miami, FL
          </p>
          <p className="footer__text ">
            <a
              className="footer__link footer__link--phone"
              href="tel:+17862920090"
            >
              +1 786 292-0090
            </a>
          </p>
        </div>
        <div className="footer__col footer__col--no-title">
          <p className="footer__text footer__text--bold">Barcelona</p>
          <p className="footer__text">Carrer de Vilafranca 7</p>
          <p className="footer__text footer__text--bold footer__text--blue">
            Barcelona
          </p>
          <p className="footer__text ">
            <a
              className="footer__link footer__link--phone"
              href="tel:+349373730959"
            >
              +34 93 7373-0959
            </a>
          </p>
        </div>
        <div className="footer__col footer__col--no-title">
          <p className="footer__text footer__text--bold">
            Buenos Aires - {t(TranslationKeysEnum.Footer.MAIN_OFFICE)}
          </p>
          <p className="footer__text">L.N. Alem 117</p>
          <p className="footer__text">Lomas de Zamora</p>
          <p className="footer__text footer__text--bold footer__text--blue">
            Buenos Aires
          </p>
          <p className="footer__text ">
            <a
              className="footer__link footer__link--phone"
              href="tel:+5491164904816"
            >
              +54 9 11 6490 4816
            </a>
          </p>
        </div>
        <div className="footer__col footer__col--no-title">
          <p className="footer__text footer__text--bold">Email</p>
          <p className="footer__text ">
            <a
              className="footer__link"
              href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#99;&#111;&#110;&#116;&#97;&#99;&#116;&#111;&#64;&#97;&#115;&#97;&#109;&#98;&#108;&#111;&#46;&#99;&#111;&#109;"
            >
              &#99;&#111;&#110;&#116;&#97;&#99;&#116;&#111;&#64;&#97;&#115;&#97;&#109;&#98;&#108;&#111;&#46;&#99;&#111;&#109;
            </a>
          </p>
        </div>
      </div>
    </div>

    <div className="footer__customers">
      <ModernImage
        src="/img/clutch-award.png"
        height={125}
        width={125}
        className="footer__customers--award"
      />
    </div>

    <div className="footer__sub">
      <div className="footer__customers--widget">
        <ClutchWidget type={2} height={45} />
      </div>

      <span className="footer__sub--text">
        Copyright © {new Date().getFullYear()} - Asamblo
      </span>
    </div>
    <ReactSVG src="/img/logo-iso.svg" className="footer__bg" /> */}
    <div className="container">
      <div>
        <a href={'/'} >
          <img src="/img/logo.png" alt="logo" width="280" />
        </a>
        <div className="mt-20 mb-10">
          <p className="footer__text ">
            <a
              className="footer__link"
              href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#99;&#111;&#110;&#116;&#97;&#99;&#116;&#111;&#64;&#97;&#115;&#97;&#109;&#98;&#108;&#111;&#46;&#99;&#111;&#109;"
            >
              &#99;&#111;&#110;&#116;&#97;&#99;&#116;&#111;&#64;&#97;&#115;&#97;&#109;&#98;&#108;&#111;&#46;&#99;&#111;&#109;
            </a>
          </p>
        </div>
      </div>
      <div className="footer__sup">
        <div className="footer__col">
          <div className="footer__social">
            <div className="social-part">
              <a href={'https://www.linkedin.com/company/asamblo/'} target="_blank">
                <img src="/img/linkedin.png" alt="linkedin" />
              </a>
              {/* <img src="/img/instagram.png" alt="instagram" /> */}
            </div>
            <div className="footer__copyright">
              <span className="footer__sub--text">
                Copyright © {new Date().getFullYear()} - Asamblo
              </span>
            </div>
          </div>
        </div>
        <div className="footer__col">
          <div className="footer__wrapper">
            <p className="footer__text">
              Buenos Aires
            </p>
            <p className="footer__text">L.N. Alem 117</p>
            <p className="footer__text">Lomas de Zamora</p>
            <p className="footer__text ">
              <a
                className="footer__link footer__link--phone"
                href="tel:+5491164904816"
              >
                +54 9 11 6490 4816
              </a>
            </p>
          </div>
        </div>
        <div className="footer__col">
          <div className="footer__wrapper">
            <p className="footer__text">Miami</p>
            <p className="footer__text">Brickell City Centre</p>
            <p className="footer__text">78 SW 7th Street</p>
            <p className="footer__text ">
              <a
                className="footer__link footer__link--phone"
                href="tel:+17862920090"
              >
                +1 786 292-0090
              </a>
            </p>
          </div>
        </div>
        <div className="footer__col">
          <div className="footer__wrapper">
            <p className="footer__text">Barcelona</p>
            <p className="footer__text">Carrer de Vilafranca 7</p>
            <p className="footer__text ">
              <a
                className="footer__link footer__link--phone"
                href="tel:+349373730959"
              >
                +34 93 7373-0959
              </a>
            </p>
          </div>
        </div>
        <div className="footer__col">
          <div className="text-right clutch-img">
            <ModernImage
              src="/img/clutch-award.png"
              height={125}
              width={125}
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default translate(TranslationKeysEnum.Footer.NAME)(Footer);
