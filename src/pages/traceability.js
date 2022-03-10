import Head from 'next/head';
import React from 'react';
import { Fade } from 'react-reveal';
import { scroller } from 'react-scroll';
import { isMobile, isBrowser } from 'react-device-detect';
import ReactSVG from 'react-svg';
import { translate } from 'react-translate';
import Layout from '../components/Layout';
import FeaturesList from '../components/FeaturesList';
import { TranslationKeysEnum } from '../data/translations/enums';
import StoryCodeDemoRequestForm from '../components/StoryCodeDemoRequestForm';
import ModernImage from '../components/ModernImage';

const BLOCKCHAIN_DESCRIPTION_ITEMS = [
  {
    img: '/img/illustrations/blockchain/qr.svg',
    descriptionTitleKey:
      TranslationKeysEnum.TraceabilityPage
        .STORYCODE_SUMMARY_DESCRIPTION_TITLE_0,
    descriptionTextKey:
      TranslationKeysEnum.TraceabilityPage.STORYCODE_SUMMARY_DESCRIPTION_TEXT_0,
  },
  {
    img: '/img/illustrations/blockchain/mobile.svg',
    descriptionTitleKey:
      TranslationKeysEnum.TraceabilityPage
        .STORYCODE_SUMMARY_DESCRIPTION_TITLE_1,
    descriptionTextKey:
      TranslationKeysEnum.TraceabilityPage.STORYCODE_SUMMARY_DESCRIPTION_TEXT_1,
  },
  {
    img: '/img/illustrations/blockchain/charts.svg',
    descriptionTitleKey:
      TranslationKeysEnum.TraceabilityPage
        .STORYCODE_SUMMARY_DESCRIPTION_TITLE_2,
    descriptionTextKey:
      TranslationKeysEnum.TraceabilityPage.STORYCODE_SUMMARY_DESCRIPTION_TEXT_2,
  },
];
const BLOCKCHAIN_STEPS = [
  {
    titleKey: TranslationKeysEnum.FeaturesList.REGISTER_NEEDS_TITLE,
    descriptionKey: [
      TranslationKeysEnum.FeaturesList.REGISTER_NEEDS_DESCRIPTION_0,
      TranslationKeysEnum.FeaturesList.REGISTER_NEEDS_DESCRIPTION_1,
    ],
    img: {
      url: 'illustrations/creative-process/icon-process-chat.svg',
      width: 133,
      height: 107,
    },
  },
  {
    titleKey: TranslationKeysEnum.FeaturesList.PREPARE_BUSINESS_TITLE,
    descriptionKey: [
      TranslationKeysEnum.FeaturesList.PREPARE_BUSINESS_DESCRIPTION_0,
      TranslationKeysEnum.FeaturesList.PREPARE_BUSINESS_DESCRIPTION_1,
      TranslationKeysEnum.FeaturesList.PREPARE_BUSINESS_DESCRIPTION_2,
    ],
    img: {
      url: 'illustrations/creative-process/icon-process-planning.svg',
      width: 117,
      height: 114,
    },
  },
  {
    titleKey: TranslationKeysEnum.FeaturesList.START_TRACKING_TITLE,
    descriptionKey: [
      TranslationKeysEnum.FeaturesList.START_TRACKING_DESCRIPTION_0,
      TranslationKeysEnum.FeaturesList.START_TRACKING_DESCRIPTION_1,
    ],
    img: {
      url: 'illustrations/creative-process/icon-process-design.svg',
      width: 100,
      height: 100,
    },
  },
  {
    titleKey: TranslationKeysEnum.FeaturesList.ADD_VALUE_TITLE,
    descriptionKey: [
      TranslationKeysEnum.FeaturesList.ADD_VALUE_DESCRIPTION_0,
      TranslationKeysEnum.FeaturesList.ADD_VALUE_DESCRIPTION_1,
    ],
    img: {
      url: 'illustrations/creative-process/icon-process-development.svg',
      width: 119,
      height: 98,
    },
  },
  {
    titleKey: TranslationKeysEnum.FeaturesList.COMMUNICATE_WITH_CLIENTS_TITLE,
    descriptionKey: [
      TranslationKeysEnum.FeaturesList.COMMUNICATE_WITH_CLIENTS_DESCRIPTION_0,
    ],
    img: {
      url: 'illustrations/creative-process/icon-process-test.svg',
      width: 93,
      height: 93,
    },
  },
];

const TraceabilityPage = ({ t }) => {
  const getOffset = () => {
    if (isBrowser) {
      return -80;
    }
    if (isMobile) {
      return 900;
    }
    return 0;
  };
  const handleRequestADemoClick = () => {
    scroller.scrollTo('section-contact-us', {
      duration: 600,
      delay: 0,
      smooth: 'ease',
      offset: getOffset(),
    });
  };
  return (
    <Layout contactForm={<StoryCodeDemoRequestForm />}>
      <Head>
        <title>{t(TranslationKeysEnum.TraceabilityPage.TITLE)}</title>
        <meta
          name="description"
          property="og:description"
          content={t(TranslationKeysEnum.TraceabilityPage.DESCRIPTION)}
        />
      </Head>
      <div className="page-header page-header--services">
        <div className="container page-header__inner">
          <div className="page-header__text">
            <Fade left>
              <h1 className="page-header__title">
                {t(TranslationKeysEnum.TraceabilityPage.PAGE_HEADER_TITLE_0)}{' '}
                <strong>
                  {' '}
                  {t(
                    TranslationKeysEnum.TraceabilityPage.PAGE_HEADER_TITLE_1
                  )}{' '}
                </strong>
              </h1>
            </Fade>
            <Fade left>
              <h2 className="page-header__subtitle">
                {t(TranslationKeysEnum.TraceabilityPage.PAGE_HEADER_SUBTITLE)}
              </h2>
            </Fade>
            <Fade left delay={200}>
              <p className="page-header__description">
                {t(
                  TranslationKeysEnum.TraceabilityPage.PAGE_HEADER_DESCRIPTION
                )}
              </p>
            </Fade>
            <Fade left delay={200}>
              <button type="button" onClick={handleRequestADemoClick}>
                <span>
                  {t(
                    TranslationKeysEnum.TraceabilityPage
                      .PAGE_HEADER_REQUEST_A_DEMO_BUTTON
                  )}
                </span>
              </button>
            </Fade>
          </div>
          <div className="page-header__image">
            <div className="page-header__image-inner">
              <Fade right>
                <ModernImage src="/img/illustrations/blockchain.png" alt="" />
                <div className="page-header__image-circle">
                  <ModernImage
                    src="/img/illustrations/blockchain/storycode_logo.png"
                    alt=""
                  />
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <div className="page-header__circle-container">
          <button
            type="button"
            tabIndex={0}
            className="page-header__circle"
            onClick={() => {
              scroller.scrollTo('section-solution-summary', {
                duration: 400,
                delay: 0,
                smooth: 'ease',
                offset: -100,
              });
            }}
          >
            <span className="arrow down" />
          </button>
        </div>
      </div>

      <div className="blockchain__intro">
        <div className="blockchain__intro--circle">
          <ModernImage
            src="/img/illustrations/blockchain/storycode_logo.png"
            alt=""
          />
        </div>
        <h2>{t(TranslationKeysEnum.TraceabilityPage.STORYCODE_INTRO_TITLE)}</h2>
        <div className="blockchain__description">
          <div className="blockchain__description--text">
            {t(
              TranslationKeysEnum.TraceabilityPage
                .STORYCODE_INTRO_DESCRIPTION_TEXT_0
            )}
          </div>
          <div className="blockchain__description--text">
            {t(
              TranslationKeysEnum.TraceabilityPage
                .STORYCODE_INTRO_DESCRIPTION_TEXT_1
            )}
          </div>
        </div>
      </div>

      <div className="blockchain__summary" name="section-solution-summary">
        <h2>
          {t(TranslationKeysEnum.TraceabilityPage.STORYCODE_SUMMARY_TITLE)}
        </h2>
        <div className="blockchain__description">
          {BLOCKCHAIN_DESCRIPTION_ITEMS.map(item => (
            <div
              key={item.descriptionTitleKey}
              className="blockchain__description--item"
            >
              <ReactSVG
                src={item.img}
                className="blockchain__description--image"
              />
              <div className="blockchain__description--title">
                {t(item.descriptionTitleKey)}
              </div>
              <div className="blockchain__description--text">
                <span>{t(item.descriptionTextKey)}</span>
              </div>
            </div>
          ))}
        </div>
        <h2>
          {t(
            TranslationKeysEnum.TraceabilityPage.STORYCODE_SUMMARY_SUCCESS_CASE
          )}
        </h2>
      </div>

      <div className="blockchain__mystory">
        <div className="blockchain__mystory--inner">
          <div>
            <h2>{t(TranslationKeysEnum.TraceabilityPage.MYSTORY_TITLE)}</h2>
            <h3>{t(TranslationKeysEnum.TraceabilityPage.MYSTORY_SUBTITLE)}</h3>
          </div>

          <div className="blockchain__mystory--body">
            <div className="blockchain__mystory--body--text">
              <p>{t(TranslationKeysEnum.TraceabilityPage.MYSTORY_TEXT_0)}</p>
              <p>{t(TranslationKeysEnum.TraceabilityPage.MYSTORY_TEXT_1)}</p>

              <button
                type="button"
                className="bg-primary"
                style={{ color: 'white' }}
                onClick={handleRequestADemoClick}
              >
                {t(
                  TranslationKeysEnum.TraceabilityPage
                    .MYSTORY_WATCH_VIDEO_BUTTON
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="blockchain__steps">
        <h2>{t(TranslationKeysEnum.TraceabilityPage.STORYCODE_PATH)}</h2>
        <h3>
          {t(TranslationKeysEnum.TraceabilityPage.STORYCODE_BASED_ON_ECOSYSTEM)}
        </h3>

        <div className="container">
          <FeaturesList items={BLOCKCHAIN_STEPS} stepsView ordered />
        </div>
      </div>
    </Layout>
  );
};

export default translate(TranslationKeysEnum.TraceabilityPage.NAME)(
  TraceabilityPage
);
