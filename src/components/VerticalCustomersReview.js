import React from 'react';
import ClutchWidget from './ClutchWidget';
import { TranslationKeysEnum } from '../data/translations/enums';
import { translate } from 'react-translate';
const VerticalCustomersReviews = ({ t }) => {
    return (
        <div className="reviews">
            <div className="container">
                <div className="reviews__section">
                    <div className="reviews--text">
                        <p className="reviews--title">
                        {t(TranslationKeysEnum.Review.CUSTOMERS_REVIEWS_TITLE)}
                        </p>
                        <p className="reviews--body">
                            <span>
                            {t(TranslationKeysEnum.Review.CUSTOMERS_REVIEWS_DESCRIPTION_0)}
                            </span>
                            <span>
                                <strong>
                                {t(TranslationKeysEnum.Review.CUSTOMERS_REVIEWS_DESCRIPTION_1)}
                                </strong>
                            </span>
                            <span>
                            {t(TranslationKeysEnum.Review.CUSTOMERS_REVIEWS_DESCRIPTION_2)}
                            </span>
                        </p>
                    </div>
                    <ClutchWidget />
                </div>
            </div>
        </div>
    );
};
export default translate(TranslationKeysEnum.Review.NAME)(VerticalCustomersReviews);

