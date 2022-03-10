import Head from 'next/head';
import { Fade } from 'react-reveal';
import dynamic from 'next/dynamic';
import { translate } from 'react-translate';
import Layout from '../components/Layout';
import { TranslationKeysEnum } from '../data/translations/enums';
import ModernImage from '../components/ModernImage';

const TeamSliderWithNoSSR = dynamic(import('../components/TeamSlider'), {
  ssr: false,
});

const AboutUsPage = ({ t }) => {
  return (
    <Layout darkHeader pageClass="about-us">
      <Head>
        <title>{t(TranslationKeysEnum.AboutUsPage.TITLE)}</title>
        <meta
          name="description"
          property="og:description"
          content={t(TranslationKeysEnum.AboutUsPage.DESCRIPTION)}
        />
      </Head>

      <div className="bg-shape bg-shape--4">
        <div className="page-header page-header--about-us">
          <div className="container page-header__inner">
            <div className="page-header__text">
              <Fade left>
                <h1 className="page-header__title">
                  {t(TranslationKeysEnum.AboutUsPage.PAGE_HEADER_TITLE)}
                </h1>
              </Fade>
              <Fade left>
                <p className="page-header__description">
                  {t(TranslationKeysEnum.AboutUsPage.PAGE_HEADER_DESCRIPTION)}
                </p>
              </Fade>
            </div>

            <div className="page-header__image">
              <Fade right>
                <div className="page-header__image-inner">
                  <ModernImage
                    src="/img/team.jpeg"
                    width="1200"
                    height="798"
                    className="page-header__img"
                    alt=""
                  />
                </div>
              </Fade>
            </div>
          </div>
        </div>

        <div className="container">
          <Fade duration={1200} delay={300}>
            <div className="shadow-box-side shadow-box-side--mobile-flat shadow-box-side--full">
              <div className="text-cols">
                <div className="text-cols__col">
                  <p className="text-cols__text">
                    {t(TranslationKeysEnum.AboutUsPage.CONTAINER_TEXT_0)}{' '}
                    <strong>
                      {t(TranslationKeysEnum.AboutUsPage.CONTAINER_TEXT_1)}
                    </strong>
                    . {t(TranslationKeysEnum.AboutUsPage.CONTAINER_TEXT_2)}
                  </p>
                </div>
                <div className="text-cols__col">
                  <p className="text-cols__text">
                    {t(TranslationKeysEnum.AboutUsPage.CONTAINER_TEXT_3)}{' '}
                    <strong>
                      {t(TranslationKeysEnum.AboutUsPage.CONTAINER_TEXT_4)}
                    </strong>{' '}
                    {t(TranslationKeysEnum.AboutUsPage.CONTAINER_TEXT_5)}
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </div>

        <div className="container">
          <Fade>
            <h2 className="title">
              {t(TranslationKeysEnum.AboutUsPage.CREATIVE_TEAM_TITLE)}
            </h2>
          </Fade>
          <Fade up>
            <TeamSliderWithNoSSR />
          </Fade>
        </div>
      </div>
    </Layout>
  );
};

export default translate(TranslationKeysEnum.AboutUsPage.NAME)(AboutUsPage);
