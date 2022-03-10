import Slider from 'react-slick';
import { translate } from 'react-translate';
import teamMembers from '../data/teamMembers';
import { TranslationKeysEnum } from '../data/translations/enums';
import ModernImage from './ModernImage';

const settings = {
  dots: false,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const TeamSlider = ({ t }) => (
  <div className="team-slider">
    <Slider {...settings}>
      {teamMembers.map(({ name, role, image, description, linkedIn }) => (
        <div key={name} className="team-slider__item">
          <div className="team-slider__item-inner">
            <div className="team-slider__image">
              <ModernImage
                src={`/img/${image}`}
                alt={name}
                className="team-slider__img"
              />
            </div>
            <div className="team-slider__text">
              <span className="team-slider__name">{name}</span>
              {linkedIn && (
                <a
                  href={linkedIn}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="team-slider__linkedIn"
                >
                  LinkedIn
                </a>
              )}

              <span className="team-slider__role">{t(role)}</span>

              <p className="team-slider__description">{t(description)}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
);
export default translate(TranslationKeysEnum.TeamSlider.NAME)(TeamSlider);
