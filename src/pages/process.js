import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import ReactSVG from 'react-svg';
import { Fade } from 'react-reveal';
import { translate } from 'react-translate';
import Layout from '../components/Layout';
import FeaturesList from '../components/FeaturesList';
import { TranslationKeysEnum } from '../data/translations/enums';

const steps = [
  {
    titleKey: TranslationKeysEnum.FeaturesList.IDEA_TALK_TITLE,
    descriptionKey: TranslationKeysEnum.FeaturesList.IDEA_TALK_DESCRIPTION,
    img: {
      url: 'illustrations/creative-process/icon-process-chat.svg',
      width: 133,
      height: 107,
    },
  },
  {
    titleKey: TranslationKeysEnum.FeaturesList.PROPOSE_SOLUTION_TITLE,
    descriptionKey:
      TranslationKeysEnum.FeaturesList.PROPOSE_SOLUTION_DESCRIPTION,
    img: {
      url: 'illustrations/creative-process/icon-process-planning.svg',
      width: 117,
      height: 114,
    },
  },
  {
    titleKey: TranslationKeysEnum.FeaturesList.SKETCH_IT_OUT_TITLE,
    descriptionKey: TranslationKeysEnum.FeaturesList.SKETCH_IT_OUT_DESCRIPTION,
    img: {
      url: 'illustrations/creative-process/icon-process-design.svg',
      width: 100,
      height: 100,
    },
  },
  {
    titleKey: TranslationKeysEnum.FeaturesList.CREATE_TITLE,
    descriptionKey: TranslationKeysEnum.FeaturesList.CREATE_DESCRIPTION,
    img: {
      url: 'illustrations/creative-process/icon-process-development.svg',
      width: 119,
      height: 98,
    },
  },
  {
    titleKey: TranslationKeysEnum.FeaturesList.TEST_TITLE,
    descriptionKey: TranslationKeysEnum.FeaturesList.TEST_DESCRIPTION,
    img: {
      url: 'illustrations/creative-process/icon-process-test.svg',
      width: 93,
      height: 93,
    },
  },
  {
    titleKey: TranslationKeysEnum.FeaturesList.FIX_IMPROVE_TITLE,
    descriptionKey: TranslationKeysEnum.FeaturesList.FIX_IMPROVE_DESCRIPTION,
    img: {
      url: 'illustrations/creative-process/icon-process-gear.svg',
      width: 90,
      height: 90,
    },
  },
  {
    titleKey: TranslationKeysEnum.FeaturesList.GO_LIVE_TITLE,
    descriptionKey: TranslationKeysEnum.FeaturesList.GO_LIVE_DESCRIPTION,
    img: {
      url: 'illustrations/creative-process/icon-process-product.svg',
      width: 107,
      height: 107,
    },
  },
];

const ProcessPage = ({ t }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 500);
  }, []);

  return (
    <Layout>
      <Head>
        <title>{t(TranslationKeysEnum.ProcessPage.TITLE)}</title>
        <meta
          name="description"
          property="og:description"
          content={t(TranslationKeysEnum.ProcessPage.DESCRIPTION)}
        />
      </Head>

      <div className="page-header page-header--process">
        <div className="container page-header__inner">
          <div className="page-header__text">
            <Fade right>
              <h2 className="page-header__title">
                {t(TranslationKeysEnum.ProcessPage.PAGE_HEADER_TITLE_0)}{' '}
                <strong>
                  {t(TranslationKeysEnum.ProcessPage.PAGE_HEADER_TITLE_1)}
                </strong>
              </h2>
            </Fade>
            <Fade right delay={200}>
              <p className="page-header__description">
                {t(TranslationKeysEnum.ProcessPage.PAGE_HEADER_DESCRIPTION)}
              </p>
            </Fade>
          </div>
          <div className="page-header__image">
            <div className="page-header__image-inner">
              <div
                className={`logo-circles ${
                  animate ? 'logo-circles--active' : ''
                }`}
              >
                <ReactSVG
                  src="/img/logo-iso.svg"
                  className="logo-circles__logo"
                />
                <span className="logo-circles__circle logo-circles__circle--1" />
                <span className="logo-circles__circle logo-circles__circle--2" />
                <span className="logo-circles__circle logo-circles__circle--3" />
                <span className="logo-circles__circle logo-circles__circle--4" />
                <span className="logo-circles__circle logo-circles__circle--5" />
                <span className="logo-circles__circle logo-circles__circle--6" />
                <span className="logo-circles__circle logo-circles__circle--7" />
                <span className="logo-circles__circle logo-circles__circle--8" />
                <span className="logo-circles__circle logo-circles__circle--big" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className="page-title center-m only-mobile">
          {t(TranslationKeysEnum.ProcessPage.CONTAINER_TEXT)}
        </h2>
      </div>

      <div className="features features--gray features--steps">
        <div className="container">
          <FeaturesList items={steps} stepsView ordered />
        </div>
      </div>
    </Layout>
  );
};

export default translate(TranslationKeysEnum.ProcessPage.NAME)(ProcessPage);
