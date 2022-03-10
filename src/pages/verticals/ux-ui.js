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
import { useLanguage } from '../../contexts/LanguageProvider';
import { scroller } from 'react-scroll';
const UxUi = ({ t }) => {
    const { translationsLocale } = useLanguage();
    const areas = [
        {
            parts: [
                {
                    name: t(TranslationKeysEnum.UxUiPage.CONTAINER_TEXT_0),
                    img: 'branding',
                    text: t(TranslationKeysEnum.UxUiPage.CONTAINER_TEXT_0),
                    description: t(TranslationKeysEnum.UxUiPage.CONTAINER_DESCRIPTION_0)
                },
                {
                    name: t(TranslationKeysEnum.UxUiPage.CONTAINER_TEXT_1),
                    img: 'audit',
                    text: t(TranslationKeysEnum.UxUiPage.CONTAINER_TEXT_1),
                    description: t(TranslationKeysEnum.UxUiPage.CONTAINER_DESCRIPTION_1)
                },
                {
                    name: t(TranslationKeysEnum.UxUiPage.CONTAINER_TEXT_2),
                    img: 'design',
                    text: t(TranslationKeysEnum.UxUiPage.CONTAINER_TEXT_2),
                    description: t(TranslationKeysEnum.UxUiPage.CONTAINER_DESCRIPTION_2)
                },
            ]
        },
        {
            parts: [
                {
                    name: t(TranslationKeysEnum.UxUiPage.CONTAINER_TEXT_3),
                    img: 'research',
                    text: t(TranslationKeysEnum.UxUiPage.CONTAINER_TEXT_3),
                    description: t(TranslationKeysEnum.UxUiPage.CONTAINER_DESCRIPTION_3)
                },
                {
                    name: t(TranslationKeysEnum.UxUiPage.CONTAINER_TEXT_4),
                    img: 'system',
                    text: t(TranslationKeysEnum.UxUiPage.CONTAINER_TEXT_4),
                    description: t(TranslationKeysEnum.UxUiPage.CONTAINER_DESCRIPTION_4)
                },
                {
                    name: t(TranslationKeysEnum.UxUiPage.CONTAINER_TEXT_5),
                    img: 'collaboration',
                    text: t(TranslationKeysEnum.UxUiPage.CONTAINER_TEXT_5),
                    description: t(TranslationKeysEnum.UxUiPage.CONTAINER_DESCRIPTION_5)
                }
            ]
        },


    ];

    const others = [
        {
            name: t(TranslationKeysEnum.UxUiPage.FINTECH_PAGE_LABEL),
            img: 'fintech',
            width: 210,
            link: t(TranslationKeysEnum.UxUiPage.FINTECH_PAGE_LINK),
            text: `${t(TranslationKeysEnum.UxUiPage.FINTECH_PAGE_LABEL)} ››`
        },
        {
            name: t(TranslationKeysEnum.UxUiPage.HEALTHCARE_PAGE_LABEL),
            img: 'healthcare',
            width: 130,
            link: t(TranslationKeysEnum.UxUiPage.HEALTHCARE_PAGE_LINK),
            text: `${t(TranslationKeysEnum.UxUiPage.HEALTHCARE_PAGE_LABEL)} ››`
        },
        {
            name: t(TranslationKeysEnum.UxUiPage.BLOCKCHAIN_PAGE_LABEL),
            img: 'blockchain',
            width: 206,
            link: t(TranslationKeysEnum.UxUiPage.BLOCKCHAIN_PAGE_LINK),
            text: `${t(TranslationKeysEnum.UxUiPage.BLOCKCHAIN_PAGE_LABEL)} ››`
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
                <title>{t(TranslationKeysEnum.UxUiPage.TITLE)}</title>
                <meta
                    name="description"
                    property="og:description"
                    content={t(TranslationKeysEnum.UxUiPage.DESCRIPTION)}
                />
                <meta name="keywords" property="og:keywords" content={t(TranslationKeysEnum.UxUiPage.KEYWORD)}/>
            </Head>
            <div className="verticals">
                <div className="ui-ux">
                    <div className="page-header page-header--ui-ux">
                        <div className="container page-header__inner">
                            <div className="page-header__text">
                                <Fade left>
                                    {translationsLocale === TranslationsLanguageEnum.EN ?
                                        (
                                            <h1 className="page-header__title">
                                                {t(TranslationKeysEnum.UxUiPage.PAGE_HEADER_TITLE_0)} <strong> {t(TranslationKeysEnum.UxUiPage.PAGE_HEADER_TITLE_1)} </strong>{t(TranslationKeysEnum.UxUiPage.PAGE_HEADER_TITLE_2)}
                                            </h1>
                                        )
                                        :
                                        (
                                            <h1 className="page-header__title">
                                                {t(TranslationKeysEnum.UxUiPage.PAGE_HEADER_TITLE_2)}<strong> {t(TranslationKeysEnum.UxUiPage.PAGE_HEADER_TITLE_1)} </strong>{t(TranslationKeysEnum.UxUiPage.PAGE_HEADER_TITLE_0)}
                                            </h1>
                                        )
                                    }
                                </Fade>
                                <Fade left delay={200}>
                                    <p className="page-header__description">
                                        {t(TranslationKeysEnum.UxUiPage.PAGE_HEADER_DESCRIPTION)}
                                    </p>
                                </Fade>
                                <Fade left delay={400}>
                                    <div>
                                        <button
                                            type="button"
                                            className="btn btn--secondary"
                                            onClick={onContactButtonClick}
                                        >
                                            <strong>{t(TranslationKeysEnum.UxUiPage.PAGE_HEADER_BUTTON)}</strong>
                                        </button>
                                    </div>
                                </Fade>
                            </div>
                            <div className="page-header__image">
                                <div className="page-header__image-inner">
                                    <Fade right>
                                        <div className="ui-ux-img">
                                            <picture>
                                                <img
                                                    src="/img/verticals/ux-ui-bg.png"
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
                                <p className="page__text" style={{ color: '#565554' }}>
                                    <strong>
                                        {t(TranslationKeysEnum.UxUiPage.CONTAINER_TITLE)}
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
                                                    exe={'png'}
                                                />
                                            </div>
                                        </Fade>
                                    ))}
                                </div>
                            ))}
                            <Fade bottom>
                                <p className="page__text" style={{ color: '#565554', marginTop: '40px' }}>
                                    <strong>
                                        {t(TranslationKeysEnum.UxUiPage.CREATIVE_TEAM_TITLE)}
                                    </strong>
                                </p>
                                <div className="text-center">
                                    <button
                                        type="button"
                                        className="btn btn--secondary"
                                        onClick={onContactButtonClick}
                                    >
                                        <strong>{t(TranslationKeysEnum.UxUiPage.CREATIVE_TEAM_BUTTON)}</strong>
                                    </button>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className="others">
                        <div className="container">
                            <Fade top>
                                <p className="page__text" style={{ color: '#565554' }}>
                                    <strong>
                                        {t(TranslationKeysEnum.UxUiPage.OTHER_VERTICAL_TITLE)}
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
export default translate(TranslationKeysEnum.UxUiPage.NAME)(UxUi);

