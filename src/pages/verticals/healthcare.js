import Head from 'next/head';
import React from 'react';
import { Fade } from 'react-reveal';
import { translate } from 'react-translate';
import Layout from '../../components/Layout';
import {
    TranslationKeysEnum,
    TranslationsLanguageEnum,
} from '../../data/translations/enums';
import Partner from '../../components/Partner';
import VerticalCard from '../../components/VerticalCard';
import Contact from '../../components/Contact';
import VerticalCustomersReview from '../../components/VerticalCustomersReview';
import ExpertCard from '../../components/ExpertCard';
import ModernImage from '../../components/ModernImage';
import { useLanguage } from '../../contexts/LanguageProvider';
import { scroller } from 'react-scroll';
const Healthcare = ({ t }) => {
    const { translationsLocale } = useLanguage();
    const dclCasePdf =
        translationsLocale === TranslationsLanguageEnum.EN
            ? '/pdfs/DCL-Case-Asamblo2020.pdf'
            : '/pdfs/Caso-DCL-Asamblo2020.pdf';

    const areas = [
        {
            parts: [
                {
                    name: t(TranslationKeysEnum.HealthcarePage.CONTAINER_TEXT_0),
                    img: 'hybrid-mobile',
                    text: t(TranslationKeysEnum.HealthcarePage.CONTAINER_TEXT_0),
                    description: t(TranslationKeysEnum.HealthcarePage.CONTAINER_DESCRIPTION_0)
                },
                {
                    name: t(TranslationKeysEnum.HealthcarePage.CONTAINER_TEXT_1),
                    img: 'automated',
                    text: t(TranslationKeysEnum.HealthcarePage.CONTAINER_TEXT_1),
                    description: t(TranslationKeysEnum.HealthcarePage.CONTAINER_DESCRIPTION_1)
                },
                {
                    name: t(TranslationKeysEnum.HealthcarePage.CONTAINER_TEXT_2),
                    img: 'service-integrations',
                    text: t(TranslationKeysEnum.HealthcarePage.CONTAINER_TEXT_2),
                    description: t(TranslationKeysEnum.HealthcarePage.CONTAINER_DESCRIPTION_2)
                },
            ]
        },
        {
            parts: [
                {
                    name: t(TranslationKeysEnum.HealthcarePage.CONTAINER_TEXT_3),
                    img: 'hipaa',
                    text: t(TranslationKeysEnum.HealthcarePage.CONTAINER_TEXT_3),
                    description: t(TranslationKeysEnum.HealthcarePage.CONTAINER_DESCRIPTION_3)
                },
                {
                    name: t(TranslationKeysEnum.HealthcarePage.CONTAINER_TEXT_4),
                    img: 'identity',
                    text: t(TranslationKeysEnum.HealthcarePage.CONTAINER_TEXT_4),
                    description: t(TranslationKeysEnum.HealthcarePage.CONTAINER_DESCRIPTION_4)
                },
                {
                    name: t(TranslationKeysEnum.HealthcarePage.CONTAINER_TEXT_5),
                    img: 'blockchain',
                    text: t(TranslationKeysEnum.HealthcarePage.CONTAINER_TEXT_5),
                    description: t(TranslationKeysEnum.HealthcarePage.CONTAINER_DESCRIPTION_5)
                }
            ]
        },


    ];

    const others = [
        {
            name: t(TranslationKeysEnum.HealthcarePage.FINTECH_PAGE_LABEL),
            img: 'fintech',
            width: 210,
            link: t(TranslationKeysEnum.HealthcarePage.FINTECH_PAGE_LINK),
            text: `${t(TranslationKeysEnum.HealthcarePage.FINTECH_PAGE_LABEL)} ››`
        },
        {
            name: t(TranslationKeysEnum.HealthcarePage.UXUI_PAGE_LABEL),
            img: 'ux',
            width: 196,
            link: t(TranslationKeysEnum.HealthcarePage.UXUI_PAGE_LINK),
            text: `${t(TranslationKeysEnum.HealthcarePage.UXUI_PAGE_LABEL)} ››`
        },
        {
            name: t(TranslationKeysEnum.HealthcarePage.BLOCKCHAIN_PAGE_LABEL),
            img: 'blockchain',
            width: 206,
            link: t(TranslationKeysEnum.HealthcarePage.BLOCKCHAIN_PAGE_LINK),
            text: `${t(TranslationKeysEnum.HealthcarePage.BLOCKCHAIN_PAGE_LABEL)} ››`
        },
    ];
    const onContactButtonClick = () => {
        scroller.scrollTo('section-contact', {
            duration: 400,
            delay: 0,
            smooth: 'ease',
            offset: -100,
        });
    };
    return (
        <Layout isMap={false}>
            <Head>
                <title>{t(TranslationKeysEnum.HealthcarePage.TITLE)}</title>
                <meta
                    name="description"
                    property="og:description"
                    content={t(TranslationKeysEnum.HealthcarePage.DESCRIPTION)}
                />
                <meta name="keywords" property="og:keywords" content={t(TranslationKeysEnum.HealthcarePage.KEYWORD)}/>
            </Head>
            <div className="verticals">
                <div className="healthcare">
                    <div className="page-header page-header--healthcare">
                        <div className="container page-header__inner">
                            <div className="page-header__text">
                                <Fade left>
                                    {translationsLocale === TranslationsLanguageEnum.EN ?
                                        (
                                            <h1 className="page-header__title">
                                                <strong>{t(TranslationKeysEnum.HealthcarePage.PAGE_HEADER_TITLE_1)} </strong>{t(TranslationKeysEnum.HealthcarePage.PAGE_HEADER_TITLE_2)}
                                            </h1>
                                        )
                                        :
                                        (
                                            <h1 className="page-header__title">
                                                {t(TranslationKeysEnum.HealthcarePage.PAGE_HEADER_TITLE_2)}<strong> {t(TranslationKeysEnum.HealthcarePage.PAGE_HEADER_TITLE_1)}</strong>
                                            </h1>
                                        )}
                                </Fade>
                                <Fade left delay={200}>
                                    <p className="page-header__description">
                                        {t(TranslationKeysEnum.HealthcarePage.PAGE_HEADER_DESCRIPTION)}
                                    </p>
                                </Fade>
                                <Fade left delay={400}>
                                    <div>
                                        <button
                                            type="button"
                                            className="btn btn--secondary"
                                            onClick={onContactButtonClick}
                                        >
                                            <strong>{t(TranslationKeysEnum.HealthcarePage.PAGE_HEADER_BUTTON)}</strong>
                                        </button>
                                    </div>
                                </Fade>
                            </div>
                            <div className="page-header__image">
                                <div className="page-header__image-inner">
                                    <Fade right>
                                        <div className="healthcare-img">
                                            <picture>
                                                <img
                                                    src="/img/verticals/healthcare-bg.png"
                                                    className="page-header__img"
                                                    alt="ux-ui"
                                                />
                                            </picture>
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="expert">
                        <div className="container">
                            <Fade top>
                                <p className="page__text">
                                    <strong>
                                        {t(TranslationKeysEnum.HealthcarePage.CONTAINER_TITLE)}
                                    </strong>
                                </p>
                            </Fade>
                            {areas.map(({ parts }, i) => (
                                <div className="expert__section" key={i}>
                                    {parts.map(({ name, img, text, description }, index) => (
                                        <Fade key={name} duration={1500} delay={200 + 170 * index}>
                                            <div className="expert__col">
                                                <ExpertCard
                                                    name={name}
                                                    img={img}
                                                    text={text}
                                                    description={description}
                                                    exe={'jpg'}
                                                />
                                            </div>
                                        </Fade>
                                    ))}
                                </div>
                            ))}
                            <Fade bottom>
                                <p className="page__text" style={{ color: '#565554', marginTop: '40px' }}>
                                    <strong>
                                        {t(TranslationKeysEnum.HealthcarePage.CREATIVE_TEAM_TITLE)}
                                    </strong>
                                </p>
                                <div className="text-center">
                                    <button
                                        type="button"
                                        className="btn btn--secondary"
                                        onClick={onContactButtonClick}
                                    >
                                        <strong>{t(TranslationKeysEnum.HealthcarePage.CREATIVE_TEAM_BUTTON)}</strong>
                                    </button>
                                </div>
                            </Fade>
                            <Fade top>
                                <p className="page__text" style={{ color: '#565554', marginTop: '80px' }}>
                                    {t(TranslationKeysEnum.HealthcarePage.SUB_TITLE)}
                                </p>
                            </Fade>
                        </div>
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
                                                style={{ marginTop: '-8rem' }}
                                            />
                                        </div>
                                    </Fade>
                                    <Fade delay={600} right>
                                        <div className="project-summary__text">
                                            <h2 className="project-summary__title">
                                                {t(TranslationKeysEnum.HealthcarePage.PROJECT_SUMMARY_TITLE)}
                                            </h2>
                                            <p className="project-summary__description">
                                                {t(TranslationKeysEnum.HealthcarePage.PROJECT_SUMMARY_DESCRIPTION)}
                                            </p>

                                            <a
                                                href={dclCasePdf}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="project-summary__link"
                                            >
                                                {t(TranslationKeysEnum.HealthcarePage.PROJECT_SUMMARY_LINK)}
                                            </a>
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <div className="others">
                        <div className="container">
                            <Fade top>
                                <p className="page__text" style={{ color: '#565554' }}>
                                    <strong>
                                    {t(TranslationKeysEnum.HealthcarePage.OTHER_VERTICAL_TITLE)}
                                    </strong>
                                </p>
                            </Fade>
                            <div className="others__section">
                                {others.map(({ name, img, text, link, width }, index) => (
                                    <Fade key={name} duration={1500} delay={200 + 170 * index}>
                                        <div className="others__col">
                                            <VerticalCard
                                                name={name}
                                                width={width}
                                                img={img}
                                                link={link}
                                                text={text}
                                            />
                                        </div>
                                    </Fade>
                                ))}
                            </div>
                        </div>
                    </div>
                    <Partner />
                    <VerticalCustomersReview />
                    <div className="section-contact">
                        <Contact />
                    </div>
                </div>
            </div>

        </Layout>
    );
};
export default translate(TranslationKeysEnum.HealthcarePage.NAME)(Healthcare);
