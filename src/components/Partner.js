import React from 'react';
import { Fade } from 'react-reveal';
import { TranslationKeysEnum } from '../data/translations/enums';
import { translate } from 'react-translate';

const partners = [
    {
        name: 'vechain',
        img: 'vechain.png',
        width: 228,
        height: 55,
        href: 'https://www.vechain.org/'
    },
    {
        name: 'IDmission',
        img: 'IDmission.png',
        width: 230,
        height: 55,
        href: 'https://www.idmission.com/en/home'
    },
    {
        name: 'meveto',
        img: 'meveto.png',
        width: 230,
        height: 67,
        href: 'https://meveto.com/'
    },
    {
        name: '10xmanagement',
        img: '10xmanagement.png',
        width: 99,
        height: 66,
        href: 'https://www.10xmanagement.com/'
    },
];
const Partner = ({ t }) => {
    return (
        <div className={'partners'}>
            <div className="container">
                <Fade top>
                    <p className="page__text">
                        {t(TranslationKeysEnum.Partner.TITLE)}
                    </p>
                </Fade>
                <div className="page__border">
                </div>
                <ul className="page__list">
                    {partners.map(({ name, img, href }, index) => (
                        <Fade key={name} duration={1500} delay={200 + 170 * index}>
                            <li className="page__item">
                                <a href={href} target="_blank">
                                    <picture>
                                        <img
                                            className="logos__img"
                                            src={`/img/${img}`}
                                            alt={name}
                                            title={name}
                                        />
                                    </picture>
                                </a>
                            </li>
                        </Fade>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default translate(TranslationKeysEnum.Partner.NAME)(Partner);
