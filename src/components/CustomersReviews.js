import React from 'react';
import { TranslationKeysEnum } from '../data/translations/enums';
import ClutchWidget from './ClutchWidget';

const CustomersReviews = ({ t }) => {
  return (
    <div className="customers-reviews">
      <div className="customers-reviews--text">
        <p className="customers-reviews--title">
          {t(TranslationKeysEnum.IndexPage.CUSTOMERS_REVIEWS_TITLE)}
        </p>

        <p className="customers-reviews--body">
          <span>
            {t(TranslationKeysEnum.IndexPage.CUSTOMERS_REVIEWS_DESCRIPTION_0)}
          </span>
          <span>
            <strong>
              {t(TranslationKeysEnum.IndexPage.CUSTOMERS_REVIEWS_DESCRIPTION_1)}
            </strong>
          </span>
          <span>
            {t(TranslationKeysEnum.IndexPage.CUSTOMERS_REVIEWS_DESCRIPTION_2)}
          </span>
        </p>
      </div>

      <ClutchWidget />
    </div>
  );
};

export default CustomersReviews;
