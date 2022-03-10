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
import { scroller } from 'react-scroll';
import { useLanguage } from '../../contexts/LanguageProvider';

const Fintech = ({ t }) => {
    const { translationsLocale } = useLanguage();
    const areas = [
        {
            parts: [
                {
                    name: 'fintech-integrations',
                    img: 'fintech-integrations',
                    text: t(TranslationKeysEnum.FintechPage.CONTAINER_TEXT_0),
                    description: t(TranslationKeysEnum.FintechPage.CONTAINER_DESCRIPTION_0),
                },
                {
                    name: 'payment-processing',
                    img: 'payment-processing',
                    text: t(TranslationKeysEnum.FintechPage.CONTAINER_TEXT_1),
                    description: t(TranslationKeysEnum.FintechPage.CONTAINER_DESCRIPTION_1),
                },
                {
                    name: 'data-security',
                    img: 'data-security',
                    text: t(TranslationKeysEnum.FintechPage.CONTAINER_TEXT_2),
                    description: t(TranslationKeysEnum.FintechPage.CONTAINER_DESCRIPTION_2),
                },
            ]
        },
        {
            parts: [
                {
                    name: 'kyc-identity',
                    img: 'kyc-identity',
                    text: t(TranslationKeysEnum.FintechPage.CONTAINER_TEXT_3),
                    description: t(TranslationKeysEnum.FintechPage.CONTAINER_DESCRIPTION_3),
                },
                {
                    name: 'mobile-app',
                    img: 'mobile-app',
                    text: t(TranslationKeysEnum.FintechPage.CONTAINER_TEXT_4),
                    description: t(TranslationKeysEnum.FintechPage.CONTAINER_DESCRIPTION_4),
                },
                {
                    name: 'defi-integration',
                    img: 'defi-integration',
                    text: t(TranslationKeysEnum.FintechPage.CONTAINER_TEXT_5),
                    description: t(TranslationKeysEnum.FintechPage.CONTAINER_DESCRIPTION_5),
                }
            ]
        },


    ];

    const logos = [
        {
            name: 'stripe',
            img: 'stripe'
        },
        {
            name: 'paypal',
            img: 'paypal'
        },
        {
            name: 'apple',
            img: 'apple'
        },
        {
            name: 'samsung-pay',
            img: 'samsung-pay'
        },
        {
            name: 'gpay',
            img: 'gpay'
        },
        {
            name: 'visa',
            img: 'visa'
        },
        {
            name: 'mastercard',
            img: 'mastercard'
        },
        {
            name: 'clients-mercadopago',
            img: 'clients-mercadopago'
        },
        {
            name: 'western-union',
            img: 'western-union'
        },
        {
            name: 'banco-do-brazil',
            img: 'banco-do-brazil'
        },
        {
            name: 'bradesco',
            img: 'bradesco'
        },
        {
            name: 'pse',
            img: 'pse'
        },
        {
            name: 'bancolombia',
            img: 'bancolombia'
        },
        {
            name: 'davivienda',
            img: 'davivienda'
        },
        {
            name: 'pix',
            img: 'pix'
        },
        {
            name: 'bbva',
            img: 'bbva'
        },
        {
            name: 'banorte',
            img: 'banorte'
        },
        {
            name: 'spe',
            img: 'spe'
        },
        {
            name: 'hsbc',
            img: 'hsbc'
        },
        {
            name: 'scotiabank',
            img: 'scotiabank'
        },
    ];

    const others = [
        {
            name: t(TranslationKeysEnum.FintechPage.HEALTHCARE_PAGE_LABEL),
            img: 'healthcare',
            width: 140,
            link: t(TranslationKeysEnum.FintechPage.HEALTHCARE_PAGE_LINK),
            text: `${t(TranslationKeysEnum.FintechPage.HEALTHCARE_PAGE_LABEL)} ››`
        },
        {
            name: t(TranslationKeysEnum.FintechPage.UXUI_PAGE_LABEL),
            img: 'ux',
            width: 206,
            link: t(TranslationKeysEnum.FintechPage.UXUI_PAGE_LINK),
            text: `${t(TranslationKeysEnum.FintechPage.UXUI_PAGE_LABEL)} ››`
        },
        {
            name: t(TranslationKeysEnum.FintechPage.BLOCKCHAIN_PAGE_LABEL),
            img: 'blockchain',
            width: 206,
            link: t(TranslationKeysEnum.FintechPage.BLOCKCHAIN_PAGE_LINK),
            text: `${t(TranslationKeysEnum.FintechPage.BLOCKCHAIN_PAGE_LABEL)} ››`
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
                <title>
                    {t(TranslationKeysEnum.FintechPage.TITLE)}
                </title>
                <meta
                    name="description"
                    property="og:description"
                    content={t(TranslationKeysEnum.FintechPage.DESCRIPTION)}
                />
                <meta name="keywords" property="og:keywords" content={t(TranslationKeysEnum.FintechPage.KEYWORD)}/>
            </Head>
            <div className="verticals">
                <div className="fintech">
                    <div className="page-header page-header--verticals">
                        <div className="container page-header__inner">
                            <div className="page-header__text">
                                <Fade left>
                                    {translationsLocale === TranslationsLanguageEnum.EN ?
                                        (
                                            <h1 className="page-header__title">
                                                {t(TranslationKeysEnum.FintechPage.PAGE_HEADER_TITLE_0)} <strong> {t(TranslationKeysEnum.FintechPage.PAGE_HEADER_TITLE_1)} </strong>{t(TranslationKeysEnum.FintechPage.PAGE_HEADER_TITLE_2)}
                                            </h1>
                                        )
                                        :
                                        (
                                            <h1 className="page-header__title">
                                                {t(TranslationKeysEnum.FintechPage.PAGE_HEADER_TITLE_2)}<strong> {t(TranslationKeysEnum.FintechPage.PAGE_HEADER_TITLE_1)} </strong>{t(TranslationKeysEnum.FintechPage.PAGE_HEADER_TITLE_0)}
                                            </h1>
                                        )
                                    }
                                </Fade>
                                <Fade left delay={200}>
                                    <p className="page-header__description">
                                        {t(TranslationKeysEnum.FintechPage.PAGE_HEADER_DESCRIPTION)}
                                    </p>
                                </Fade>
                                <Fade left delay={400}>
                                    <div>
                                        <button
                                            type="button"
                                            className="btn btn--secondary"
                                            onClick={onContactButtonClick}
                                        >
                                            <strong>{t(TranslationKeysEnum.FintechPage.PAGE_HEADER_BUTTON)}</strong>
                                        </button>
                                    </div>
                                </Fade>
                            </div>
                            <div className="page-header__image">
                                <div className="page-header__image-inner">
                                    <Fade right>
                                        <div className="fintech-img">
                                            <picture>
                                                <img
                                                    src="/img/verticals/fintech-bg.png"
                                                    className="page-header__img"
                                                    alt="fintech"
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
                                        {t(TranslationKeysEnum.FintechPage.CONTAINER_TITLE)}
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
                                        {t(TranslationKeysEnum.FintechPage.CREATIVE_TEAM_TITLE)}
                                    </strong>
                                </p>
                                <div className="text-center">
                                    <button
                                        type="button"
                                        className="btn btn--secondary"
                                        onClick={onContactButtonClick}
                                    >
                                        <strong>{t(TranslationKeysEnum.FintechPage.CREATIVE_TEAM_BUTTON)}</strong>
                                    </button>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className="logos-section">
                        <div className="container">
                            <div className="grid-container">
                                {logos.map(({ name, img }, index) => (
                                    <Fade key={name} duration={1500} delay={200 + 170 * index}>
                                        <div className="logos-section__item">
                                            <picture>
                                                <img
                                                    className="logos-section__img"
                                                    src={`/img/verticals/${img}.png`}
                                                    alt={name}
                                                    title={name}
                                                />
                                            </picture>
                                        </div>
                                    </Fade>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="others">
                        <div className="container">
                            <Fade top>
                                <p className="page__text" style={{ color: '#565554' }}>
                                    <strong>
                                        {t(TranslationKeysEnum.FintechPage.OTHER_VERTICAL_TITLE)}
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

export default translate(TranslationKeysEnum.FintechPage.NAME)(Fintech);
