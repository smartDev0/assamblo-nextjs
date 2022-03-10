import Head from 'next/head';
import React from 'react';
import { Fade } from 'react-reveal';
import ReactSVG from 'react-svg';
import { translate } from 'react-translate';
import Layout from '../components/Layout';
import {
  TranslationKeysEnum,
  TranslationsLanguageEnum,
} from '../data/translations/enums';
import ModernImage from '../components/ModernImage';
import { useLanguage } from '../contexts/LanguageProvider';

const PortfolioPage = ({ t }) => {
  const { translationsLocale } = useLanguage();

  const dclCasePdf =
    translationsLocale === TranslationsLanguageEnum.EN
      ? '/pdfs/DCL-Case-Asamblo2020.pdf'
      : '/pdfs/Caso-DCL-Asamblo2020.pdf';

  return (
    <Layout>
      <Head>
        <title>{t(TranslationKeysEnum.PortfolioPage.TITLE)}</title>
        <meta
          name="description"
          property="og:description"
          content={t(TranslationKeysEnum.PortfolioPage.DESCRIPTION)}
        />
      </Head>
      <div className="page-header page-header--portfolio">
        <div className="container page-header__inner">
          <div className="page-header__text">
            <Fade left>
              <h1 className="page-header__title">
                {t(TranslationKeysEnum.PortfolioPage.PAGE_HEADER_TITLE)}
              </h1>
            </Fade>
            <Fade left delay={200}>
              <p className="page-header__description">
                {t(TranslationKeysEnum.PortfolioPage.PAGE_HEADER_DESCRIPTION)}
              </p>
            </Fade>
          </div>
          <div className="page-header__image">
            <div className="page-header__image-inner">
              <Fade right>
                <ReactSVG
                  src="/img/illustrations/laptop.svg"
                  className="page-header__img"
                />
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Fade delay={800}>
          <h2 className="page-title center-m">
            {t(TranslationKeysEnum.PortfolioPage.PAGE_TITLE)}
          </h2>
        </Fade>
      </div>
      {/* DCL */}
      <Fade left duration={1100}>
        <div
          className="project-summary project-summary--left bg-purple"
          id="dr-contact-lens"
          style={{ paddingBottom: '12rem' }}
        >
          <div className="container">
            <div className="project-summary__inner">
              <Fade delay={900}>
                <div className="project-summary__image">
                  <ModernImage
                    src="/img/illustrations/dr-contact-lens.png"
                    alt=""
                    className="project-summary__img project-summary__img--enlarge-3"
                    style={{ marginTop: '5rem' }}
                  />
                </div>
              </Fade>
              <Fade delay={600} right>
                <div className="project-summary__text">
                  <h2 className="project-summary__title">
                    {t(TranslationKeysEnum.PortfolioPage.DCL_TITLE)}
                  </h2>
                  <p className="project-summary__description">
                    {t(TranslationKeysEnum.PortfolioPage.DCL_DESCRIPTION)}
                  </p>

                  <a
                    href={dclCasePdf}
                    target="_blank"
                    rel="noreferrer"
                    className="project-summary__link"
                  >
                    {t(TranslationKeysEnum.PortfolioPage.VIEW_CASE_STUDY)}
                  </a>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </Fade>
      {/* GRYND */}
      <Fade left duration={1100}>
        <div
          className="project-summary bg-salmon"
          id="grynd"
          style={{ paddingBottom: '12rem' }}
        >
          <div className="container">
            <div className="project-summary__inner">
              <Fade delay={900}>
                <div className="project-summary__image">
                  <ModernImage
                    // TODO Change image
                    src="/img/illustrations/grynd.png"
                    alt=""
                    className="project-summary__img project-summary__img--enlarge-3"
                  />
                </div>
              </Fade>
              <Fade delay={600} right>
                <div className="project-summary__text">
                  <h2 className="project-summary__title">
                    {t(TranslationKeysEnum.PortfolioPage.GRYND_TITLE)}
                  </h2>
                  <p className="project-summary__description">
                    {t(TranslationKeysEnum.PortfolioPage.GRYND_DESCRIPTION)}
                  </p>

                  <a
                    href="/pdfs/GRYND-Case-Asamblo2020.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="project-summary__link"
                  >
                    {t(TranslationKeysEnum.PortfolioPage.VIEW_CASE_STUDY)}
                  </a>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </Fade>
      {/* NOS FALTA 1 */}
      <Fade left duration={1100}>
        <div
          className="project-summary project-summary--left bg-gray"
          id="nos-falta-uno"
        >
          <div className="container">
            <div className="project-summary__inner">
              <Fade delay={900}>
                <div className="project-summary__image">
                  <ReactSVG
                    src="/img/illustrations/nos-falta-uno.svg"
                    className="project-summary__img project-summary__img--enlarge-2"
                  />
                </div>
              </Fade>
              <Fade delay={600} left>
                <div className="project-summary__text">
                  <h2 className="project-summary__title">
                    {t(TranslationKeysEnum.PortfolioPage.NOS_FALTA_1_TITLE)}
                  </h2>
                  <p className="project-summary__description">
                    {t(
                      TranslationKeysEnum.PortfolioPage.NOS_FALTA_1_DESCRIPTION
                    )}
                  </p>

                  <a
                    href="/pdfs/study-case-nf1.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="project-summary__link"
                  >
                    {t(TranslationKeysEnum.PortfolioPage.VIEW_CASE_STUDY)}
                  </a>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </Fade>
      {/* M&T */}
      <Fade left duration={1100}>
        <div
          className="project-summary bg-orange"
          id="marketing-and-trade-services"
        >
          <div className="container">
            <div className="project-summary__inner">
              <Fade delay={900}>
                <div className="project-summary__image">
                  <ModernImage
                    src="/img/illustrations/marketing-trade-services.png"
                    alt=""
                    className="project-summary__img project-summary__img--enlarge-3"
                  />
                </div>
              </Fade>
              <Fade delay={600} right>
                <div className="project-summary__text">
                  <h2 className="project-summary__title">
                    {t(TranslationKeysEnum.PortfolioPage['M&T_SERVICES_TITLE'])}
                  </h2>
                  <p className="project-summary__description">
                    {t(
                      TranslationKeysEnum.PortfolioPage[
                        'M&T_SERVICES_DESCRIPTION'
                      ]
                    )}
                  </p>

                  <a
                    href="/pdfs/study-case-mts.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="project-summary__link"
                  >
                    {t(TranslationKeysEnum.PortfolioPage.VIEW_CASE_STUDY)}
                  </a>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </Fade>
      {/* SONRISAS ARGENTINAS */}
      <Fade left duration={1100}>
        <div
          className="project-summary project-summary--left bg-blue"
          id="sonrisas-argentinas"
        >
          <div className="container">
            <div className="project-summary__inner">
              <Fade delay={900}>
                <div className="project-summary__image">
                  <ModernImage
                    src="/img/illustrations/sonrisas-argentinas.png"
                    alt=""
                    className="project-summary__img project-summary__img--enlarge-4"
                  />
                </div>
              </Fade>
              <Fade delay={600} left>
                <div className="project-summary__text">
                  <h2 className="project-summary__title">
                    {t(
                      TranslationKeysEnum.PortfolioPage
                        .SONRISAS_ARGENTINAS_TITLE
                    )}
                  </h2>
                  <p className="project-summary__description">
                    {t(
                      TranslationKeysEnum.PortfolioPage
                        .SONRISAS_ARGENTINAS_DESCRIPTION
                    )}
                  </p>

                  <a
                    href="/pdfs/study-case-saos.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="project-summary__link"
                  >
                    {t(TranslationKeysEnum.PortfolioPage.VIEW_CASE_STUDY)}
                  </a>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </Fade>
    </Layout>
  );
};

export default translate(TranslationKeysEnum.PortfolioPage.NAME)(PortfolioPage);
