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
import { scroller } from 'react-scroll';
import { useLanguage } from '../../contexts/LanguageProvider';
const Blockchain = ({ t }) => {
    const { translationsLocale } = useLanguage();
    const areas = [
        {
            parts: [
                {
                    name: 'baas',
                    img: 'baas',
                    text: t(TranslationKeysEnum.BlockchainPage.CONTAINER_TEXT_0),
                    description: t(TranslationKeysEnum.BlockchainPage.CONTAINER_DESCRIPTION_0),
                },
                {
                    name: 'financial-solutions',
                    img: 'financial-solutions',
                    text: t(TranslationKeysEnum.BlockchainPage.CONTAINER_TEXT_1),
                    description: t(TranslationKeysEnum.BlockchainPage.CONTAINER_DESCRIPTION_1),
                },

            ]
        },
        {
            parts: [
                {
                    name: 'anti',
                    img: 'counterfeiting',
                    text: t(TranslationKeysEnum.BlockchainPage.CONTAINER_TEXT_2),
                    description: t(TranslationKeysEnum.BlockchainPage.CONTAINER_DESCRIPTION_2),
                },
                {
                    name: 'defi-integration',
                    img: 'defi',
                    text: t(TranslationKeysEnum.BlockchainPage.CONTAINER_TEXT_3),
                    description: t(TranslationKeysEnum.BlockchainPage.CONTAINER_DESCRIPTION_3)
                }
            ]
        },


    ];

    const others = [
        {
            name: t(TranslationKeysEnum.BlockchainPage.FINTECH_PAGE_LABEL),
            img: 'fintech',
            width: 210,
            link: t(TranslationKeysEnum.BlockchainPage.FINTECH_PAGE_LINK),
            text: `${t(TranslationKeysEnum.BlockchainPage.FINTECH_PAGE_LABEL)} ››`
        },
        {
            name: t(TranslationKeysEnum.BlockchainPage.HEALTHCARE_PAGE_LABEL),
            img: 'healthcare',
            width: 130,
            link: t(TranslationKeysEnum.BlockchainPage.HEALTHCARE_PAGE_LINK),
            text: `${t(TranslationKeysEnum.BlockchainPage.HEALTHCARE_PAGE_LABEL)} ››`
        },
        {
            name: t(TranslationKeysEnum.BlockchainPage.UXUI_PAGE_LABEL),
            img: 'ux',
            width: 196,
            link: t(TranslationKeysEnum.BlockchainPage.UXUI_PAGE_LINK),
            text: `${t(TranslationKeysEnum.BlockchainPage.UXUI_PAGE_LABEL)} ››`
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
                <title>{t(TranslationKeysEnum.BlockchainPage.TITLE)}</title>
                <meta
                    name="description"
                    property="og:description"
                    content={t(TranslationKeysEnum.BlockchainPage.DESCRIPTION)}
                />
                <meta name="keywords" property="og:keywords" content={t(TranslationKeysEnum.BlockchainPage.KEYWORD)}/>
            </Head>
            <div className="verticals">
                <div className="blockchain">
                    <div className="page-header page-header--blockchain">
                        <div className="container page-header__inner">
                            <div className="page-header__text">
                                <Fade left>
                                    {translationsLocale === TranslationsLanguageEnum.EN ?
                                        (
                                            <h1 className="page-header__title">
                                                <strong>{t(TranslationKeysEnum.BlockchainPage.PAGE_HEADER_TITLE_1)} </strong>{t(TranslationKeysEnum.BlockchainPage.PAGE_HEADER_TITLE_2)}
                                            </h1>
                                        )
                                        :
                                        (
                                            <h1 className="page-header__title">
                                                {t(TranslationKeysEnum.BlockchainPage.PAGE_HEADER_TITLE_2)}<strong> {t(TranslationKeysEnum.BlockchainPage.PAGE_HEADER_TITLE_1)}</strong>
                                            </h1>
                                        )
                                    }
                                </Fade>
                                <Fade left delay={200}>
                                    <p className="page-header__description">
                                        {t(TranslationKeysEnum.BlockchainPage.PAGE_HEADER_DESCRIPTION)}
                                    </p>
                                </Fade>
                                <Fade left delay={400}>
                                    <div>
                                        <button
                                            type="button"
                                            className="btn btn--secondary"
                                            onClick={onContactButtonClick}
                                        >
                                            <strong>{t(TranslationKeysEnum.BlockchainPage.PAGE_HEADER_BUTTON)}</strong>
                                        </button>
                                    </div>
                                </Fade>
                            </div>
                            <div className="page-header__image">
                                <div className="page-header__image-inner">
                                    <Fade right>
                                        <div className="blockchain-img">
                                            <picture>
                                                <img
                                                    src="/img/verticals/blockchain-bg.png"
                                                    className="page-header__img"
                                                    alt="blockchain"
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
                                        {t(TranslationKeysEnum.BlockchainPage.CONTAINER_TITLE)}
                                    </strong>
                                </p>
                            </Fade>
                            {areas.map(({ parts }, i) => (
                                <div className="expert__section" key={i}>
                                    {parts.map(({ name, img, text, description }, index) => (
                                        <Fade key={name} duration={1500} delay={200 + 170 * index}>
                                            <div className="expert__col">
                                                <div className="expert__card">
                                                    <picture>
                                                        <img
                                                            className="expert__img"
                                                            src={`/img/verticals/${img}.${'png'}`}
                                                            alt={name}
                                                            title={name}
                                                        />
                                                    </picture>
                                                    <div className="expert__card__box">
                                                        <p className="expert__text">
                                                            <strong>
                                                                {text}
                                                            </strong>
                                                        </p>
                                                        <p className="expert__description">
                                                            {description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Fade>
                                    ))}
                                </div>
                            ))}
                            <Fade bottom>
                                <p className="page__text" style={{ color: '#565554', marginTop: '40px' }}>
                                    <strong>
                                        {t(TranslationKeysEnum.BlockchainPage.CREATIVE_TEAM_TITLE)}
                                    </strong>
                                </p>
                                <div className="text-center">
                                    <button
                                        type="button"
                                        className="btn btn--secondary"
                                        onClick={onContactButtonClick}
                                    >
                                        <strong>{t(TranslationKeysEnum.BlockchainPage.CREATIVE_TEAM_BUTTON)}</strong>
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
                                        {t(TranslationKeysEnum.BlockchainPage.OTHER_VERTICAL_TITLE)}
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
export default translate(TranslationKeysEnum.BlockchainPage.NAME)(Blockchain);
