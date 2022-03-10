import PropTypes from 'prop-types';
import ModernImage from './ModernImage';

const FeaturesListItem = ({
  stepsView,
  img,
  ordered,
  index,
  titleKey,
  descriptionKey,
  t,
}) => {
  const isEven = index % 2 === 0;
  const isFirst = index === 0;
  const Image = img.url.endsWith('svg') ? 'img' : ModernImage;
  return (
    <li
      className={`big-feature-item ${
        stepsView ? 'big-feature-item--steps' : ''
      } ${isEven ? 'big-feature-item--right' : ''} ${
        isFirst ? 'big-feature-item--first' : ''
      }
      `}
    >
      <div className="big-feature-item__image">
        <Image
          src={`/img/${img.url}`}
          alt=""
          width={img.width}
          height={img.height}
          className="big-feature-item__img"
        />
      </div>
      <div className="big-feature-item__text">
        <div className="big-feature-item__title">
          {ordered && (
            <span className="big-feature-item__title--number">{index + 1}</span>
          )}
          <span>{t(titleKey)}</span>
        </div>
        <>
          {(Array.isArray(descriptionKey) && (
            <ul className="big-feature-item__description big-feature-item__description--list">
              {descriptionKey.map(key => (
                <li key={key}>{t(key)}</li>
              ))}
            </ul>
          )) || (
            <p className="big-feature-item__description">{t(descriptionKey)}</p>
          )}
        </>
      </div>
    </li>
  );
};
FeaturesListItem.propTypes = {
  stepsView: PropTypes.bool.isRequired,
  img: PropTypes.object.isRequired,
  ordered: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  titleKey: PropTypes.string.isRequired,
  descriptionKey: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
    .isRequired,
  t: PropTypes.func.isRequired,
};

export default FeaturesListItem;
