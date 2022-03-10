import Head from 'next/head';
import React from 'react';
import { Fade } from 'react-reveal';
import { scroller } from 'react-scroll';
import { translate } from 'react-translate';
import CreativeProcessIllustration from '../components/CreativeProcessIllustration';
import FeaturedProjects from '../components/FeaturedProjects';
import FeaturesGrid from '../components/FeaturesGrid';
import FeaturesList from '../components/FeaturesList';
import Layout from '../components/Layout';
import LogosList from '../components/LogosList';
import { TranslationKeysEnum } from '../data/translations/enums';
import { useLanguage } from '../contexts/LanguageProvider';
import CustomersReviews from '../components/CustomersReviews';

const items = [
  {
    img: {
      url: 'icons/custom-software-development.png',
      width: 138,
      height: 114,
    },
    titleKey:
      TranslationKeysEnum.FeaturesList.CUSTOM_SOFTWARE_DEVELOPMENT_TITLE,
    descriptionKey: [
      TranslationKeysEnum.FeaturesList
        .CUSTOM_SOFTWARE_DEVELOPMENT_DESCRIPTION_0,
      TranslationKeysEnum.FeaturesList
        .CUSTOM_SOFTWARE_DEVELOPMENT_DESCRIPTION_1,
    ],
  },
  {
    img: {
      url: 'icons/mobile@2x.png',
      width: 78,
      height: 120,
    },
    titleKey: TranslationKeysEnum.FeaturesList.MOBILE_APPS_TITLE,
    descriptionKey: TranslationKeysEnum.FeaturesList.MOBILE_APPS_DESCRIPTION,
  },
  {
    img: {
      url: 'icons/frontend@2x-scaled.png',
      width: 138,
      height: 114,
    },
    titleKey: TranslationKeysEnum.FeaturesList.WEB_DEVELOPMENT_TITLE,
    descriptionKey:
      TranslationKeysEnum.FeaturesList.WEB_DEVELOPMENT_DESCRIPTION,
  },
  {
    img: {
      url: 'icons/cloud@2x-scaled.png',
      width: 136,
      height: 114,
    },
    titleKey: TranslationKeysEnum.FeaturesList.HOSTING_TITLE,
    descriptionKey: TranslationKeysEnum.FeaturesList.HOSTING_DESCRIPTION,
  },
  {
    img: {
      url: 'icons/ux@2x.png',
      width: 118,
      height: 122,
    },
    titleKey: TranslationKeysEnum.FeaturesList.UI_UX_DESIGN_TITLE,
    descriptionKey: TranslationKeysEnum.FeaturesList.UI_UX_DESIGN_DESCRIPTION,
  },
  {
    img: {
      url: 'icons/blockchain.png',
      width: 138,
      height: 114,
    },
    titleKey: TranslationKeysEnum.FeaturesList.BLOCKCHAIN_TITLE,
    descriptionKey: TranslationKeysEnum.FeaturesList.BLOCKCHAIN_DESCRIPTION,
    // linkKey: TranslationKeysEnum.FeaturesList.BLOCKCHAIN_LINK,
  },
];
const IndexPage = ({ t }) => {
  const onExploreButtonClick = () => {
    scroller.scrollTo('section-recent-projects', {
      duration: 400,
      delay: 0,
      smooth: 'ease',
      offset: -100,
    });
  };
  const { languagePrefix } = useLanguage();

  return (
    <Layout>
      <Head>
        <title>{t(TranslationKeysEnum.IndexPage.TITLE)}</title>
        <meta
          name="description"
          property="og:description"
          content={t(TranslationKeysEnum.IndexPage.DESCRIPTION)}
        />
      </Head>

      <div className="page-intro">
        <div className="container">
          <div className="page-intro__inner">
            <div className="page-intro__logo">
              <Fade>
                <img
                  src="/img/logo-iso.png"
                  alt="Logo"
                  className="page-intro__logo-img"
                  width={291}
                  height={257}
                />
              </Fade>
            </div>
            <Fade delay={300}>
              <h2 className="page-intro__title">
                <strong>{t(TranslationKeysEnum.IndexPage.INTRO_TITLE)}</strong>
              </h2>
            </Fade>
            <Fade delay={800}>
              <div>
                <p className="page-intro__description">
                  {t(TranslationKeysEnum.IndexPage.INTRO_DESCRIPTION)}
                </p>

                <button
                  type="button"
                  className="btn btn--secondary"
                  onClick={onExploreButtonClick}
                >
                  {t(TranslationKeysEnum.IndexPage.EXPLORE_BUTTON)}
                </button>
              </div>
            </Fade>
          </div>
        </div>
      </div>

      <div
        className="bg-shape bg-shape--1"
        name="section-features"
        id="services"
      >
        <div className="container">
          <Fade>
            <h2 className="title">
              {t(TranslationKeysEnum.IndexPage.SECTION_FEATURES_TITLE)}
            </h2>
          </Fade>
        </div>
        <div className="features features--gray">
          <div className="container">
            <FeaturesList items={items} />
          </div>
        </div>

        <div name="section-recent-projects">
          <FeaturedProjects />
        </div>

        <Fade delay={1000}>
          <div className="container center">
            <a href={`${languagePrefix}portfolio`}>
              <button type="button" className="btn btn--secondary btn--margin">
                {t(TranslationKeysEnum.IndexPage.VIEW_MORE_BUTTON)}
              </button>
            </a>
          </div>
        </Fade>
      </div>

      <LogosList />

      <div className="bg-shape bg-shape--2">
        <div className="bg-shape bg-shape--3">
          <FeaturesGrid />

          <div className="switch-order-md">
            <div className="container">
              <h2 className="title">
                {t(TranslationKeysEnum.IndexPage.CREATIVE_PROCESS_TITLE)}
              </h2>
              <CreativeProcessIllustration />
            </div>
          </div>
        </div>
      </div>

      <CustomersReviews t={t} />
    </Layout>
  );
};

export default translate(TranslationKeysEnum.IndexPage.NAME)(IndexPage);
