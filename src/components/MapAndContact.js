import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import { translate } from 'react-translate';
import React, { useState, useEffect } from 'react';
import { Fade } from 'react-reveal';
import { TranslationKeysEnum } from '../data/translations/enums';
import ModernImage from './ModernImage';

const Map = dynamic(import('./Map'), { ssr: false });

const MapAndContact = ({ contactForm, t }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="map-contact" name="section-contact-us">
      <Fade up delay={400}>
        <div className="map-contact__contact">{isMounted && contactForm}</div>
      </Fade>

      <div className="map-contact__map">
        <Map />
      </div>

      <div className="map-contact__info contact-info">
        <Fade delay={500}>
          <div className="container">
            <div className="contact-info__cols">
              <div className="contact-info__col">
                <h4 className="contact-info__title">
                  {t(TranslationKeysEnum.MapAndContact.CONTACT_INFO_TITLE)}
                </h4>
                <p className="contact-info__description">
                  {t(
                    TranslationKeysEnum.MapAndContact.CONTACT_INFO_DESCRIPTION
                  )}
                </p>
              </div>
              <div className="contact-info__col">
                <div className="contact-info__cols contact-info__col--icons"></div>
              </div>
              <div className="contact-info__col icon-text">
                <ModernImage
                  src="/img/icons/clock-scaled.png"
                  alt=""
                  className="icon-text__icon"
                />
                <p className="icon-text__text">
                  {t(TranslationKeysEnum.MapAndContact.CONTACT_INFO_DAYS)}
                  <br />
                  {t(TranslationKeysEnum.MapAndContact.CONTACT_INFO_TIME)}
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

MapAndContact.propTypes = {
  t: PropTypes.func.isRequired,
  contactForm: PropTypes.node.isRequired,
};

export default translate(TranslationKeysEnum.MapAndContact.NAME)(MapAndContact);
