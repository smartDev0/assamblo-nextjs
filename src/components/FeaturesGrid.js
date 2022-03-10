import Slider from 'react-slick';
import { Fade, LightSpeed } from 'react-reveal';
import { translate } from 'react-translate';
import splitItems from '../utils/splitItems';
import { TranslationKeysEnum } from '../data/translations/enums';
import ModernImage from './ModernImage';

const featureItems = [
  {
    img: 'icons/idea@2x.png',
    titleKey: TranslationKeysEnum.FeaturesGrid.IDEA_TO_REALITY_TITLE,
    descriptionKey:
      TranslationKeysEnum.FeaturesGrid.IDEA_TO_REALITY_DESCRIPTION,
    color: '#006df0',
    width: 54,
    height: 68,
  },
  {
    img: 'icons/worldwide@2x.png',
    titleKey: TranslationKeysEnum.FeaturesGrid.WORLDWIDE_SERVICES_TITLE,
    descriptionKey:
      TranslationKeysEnum.FeaturesGrid.WORLDWIDE_SERVICES_DESCRIPTION,
    color: '#28d9a0',
    width: 68,
    height: 68,
  },
  {
    img: 'icons/quality-work@2x.png',
    titleKey: TranslationKeysEnum.FeaturesGrid.QUALITY_WORK_TITLE,
    descriptionKey: TranslationKeysEnum.FeaturesGrid.QUALITY_WORK_DESCRIPTION,
    color: '#f8c91c',
    width: 60,
    height: 74,
  },
  {
    img: 'icons/code-reviews@2x.png',
    titleKey: TranslationKeysEnum.FeaturesGrid.CODE_REVIEWS_TESTING_TITLE,
    descriptionKey:
      TranslationKeysEnum.FeaturesGrid.CODE_REVIEWS_TESTING_DESCRIPTION,
    color: '#e85a66',
    width: 60,
    height: 66,
  },
  {
    img: 'icons/design@2x.png',
    titleKey: TranslationKeysEnum.FeaturesGrid.UX_PRACTICES_TITLE,
    descriptionKey: TranslationKeysEnum.FeaturesGrid.UX_PRACTICES_DESCRIPTION,
    color: '#a78fe9',
    width: 56,
    height: 68,
  },
  {
    img: 'icons/cloud-access@2x.png',
    titleKey: TranslationKeysEnum.FeaturesGrid.CLOUD_SERVERS_TITLE,
    descriptionKey: TranslationKeysEnum.FeaturesGrid.CLOUD_SERVERS_DESCRIPTION,
    color: '#50c5e3',
    width: 74,
    height: 48,
  },
  {
    img: 'icons/calculator@2x.png',
    titleKey: TranslationKeysEnum.FeaturesGrid.COST_EFFECTIVE_TITLE,
    descriptionKey: TranslationKeysEnum.FeaturesGrid.COST_EFFECTIVE_DESCRIPTION,
    color: '#28d9a0',
    width: 74,
    height: 74,
  },
  {
    img: 'icons/available@2x.png',
    titleKey: TranslationKeysEnum.FeaturesGrid.AVAILABILITY_TITLE,
    descriptionKey: TranslationKeysEnum.FeaturesGrid.AVAILABILITY_DESCRIPTION,
    color: '#006df0',
    width: 72,
    height: 72,
  },
  {
    img: 'icons/business@2x.png',
    titleKey: TranslationKeysEnum.FeaturesGrid.BUSINESS_UNDERSTANDING_TITLE,
    descriptionKey:
      TranslationKeysEnum.FeaturesGrid.BUSINESS_UNDERSTANDING_DESCRIPTION,
    color: '#e85a66',
    width: 70,
    height: 64,
  },
];

const settings = {
  dots: true,
  dotsClass: 'slick-dots slider-dots slider-dots--secondary',
  arrows: false,
};

const FeaturesGrid = ({ t }) => {
  const slides = splitItems(featureItems, 3);

  return (
    <div className="features-grid">
      <div className="container">
        <h1 className="title">
          {t(TranslationKeysEnum.FeaturesGrid.WHY_THEY_CHOOSE_US)}
        </h1>

        <ul className="features-grid__list shadow-box-side shadow-box-side--right">
          {featureItems.map(
            (
              { img, titleKey, descriptionKey, color, width, height },
              index
            ) => (
              <Fade
                key={titleKey}
                duration={1400}
                delay={400 + 500 * Math.abs(index % 2) + Math.random() * 700}
              >
                <li className="feature-item">
                  <div className="feature-item__image">
                    <span
                      className="feature-item__image-circle"
                      style={{ backgroundColor: color }}
                    />
                    <ModernImage
                      src={`/img/${img}`}
                      alt=""
                      className="feature-item__img"
                      width={width}
                      height={height}
                    />
                  </div>
                  <div className="feature-item__text">
                    <span className="feature-item__title">{t(titleKey)}</span>
                    <p className="feature-item__description">
                      {t(descriptionKey)}
                    </p>
                  </div>
                </li>
              </Fade>
            )
          )}
        </ul>

        <div className="features-grid__slider shadow-box-side shadow-box-side--right">
          <Slider {...settings}>
            {slides.map(slide => (
              <div
                key={slide.map(s => s.titleKey).join('.')}
                className="features-grid__slide"
              >
                <>
                  {slide.map(({ img, titleKey, descriptionKey }) => (
                    <div
                      key={titleKey}
                      className="feature-item feature-item--slide"
                    >
                      <div className="feature-item__image">
                        <ModernImage
                          src={`/img/${img}`}
                          alt=""
                          className="feature-item__img"
                        />
                      </div>
                      <div className="feature-item__text">
                        <span className="feature-item__title">
                          {t(titleKey)}
                        </span>
                        <p className="feature-item__description">
                          {t(descriptionKey)}
                        </p>
                      </div>
                    </div>
                  ))}
                </>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default translate(TranslationKeysEnum.FeaturesGrid.NAME)(FeaturesGrid);
