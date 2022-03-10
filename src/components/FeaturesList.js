import { Fade } from 'react-reveal';
import PropTypes from 'prop-types';
import { translate } from 'react-translate';
import { TranslationKeysEnum } from '../data/translations/enums';
import FeaturesListItem from './FeaturesListItem';

const FeaturesList = ({ items, stepsView, ordered, t }) => {
  const ListTag = ordered ? 'ol' : 'ul';
  return (
    <ListTag className="features__list">
      {items.map(({ img, titleKey, descriptionKey, linkKey }, index) => (
        <Fade key={titleKey} duration={1200} delay={300 + index * 150}>
          {(linkKey && (
            <a href={t(linkKey)} className="big-feature-item--link">
              <FeaturesListItem
                stepsView={stepsView}
                img={img}
                ordered={ordered}
                titleKey={titleKey}
                descriptionKey={descriptionKey}
                t={t}
                index={index}
              />
            </a>
          )) || (
            <FeaturesListItem
              stepsView={stepsView}
              img={img}
              ordered={ordered}
              titleKey={titleKey}
              descriptionKey={descriptionKey}
              t={t}
              index={index}
            />
          )}
        </Fade>
      ))}
    </ListTag>
  );
};

FeaturesList.defaultProps = {
  stepsView: false,
  ordered: false,
};

FeaturesList.propTypes = {
  items: PropTypes.array.isRequired,
  stepsView: PropTypes.bool,
  ordered: PropTypes.bool,
  t: PropTypes.func.isRequired,
};

export default translate(TranslationKeysEnum.FeaturesList.NAME)(FeaturesList);
