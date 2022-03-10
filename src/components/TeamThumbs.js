import Slider from 'react-slick';
import teamMembers from '../data/teamMembers';
import ModernImage from './ModernImage';

const settings = {
  dots: true,
  dotsClass: 'slick-dots slider-dots',
  arrows: false,
};

const TeamThumbs = () => (
  <div className="container">
    <div className="team-thumbs team-thumbs--centered">
      <ul className="team-thumbs__list">
        {teamMembers.map(({ name, role, image }) => (
          <li key={name} className="team-thumbs__item">
            <div className="team-thumbs__image">
              <ModernImage
                src={`/img/${image}`}
                alt={name}
                className="team-thumbs__img"
              />
            </div>
            <span className="team-thumbs__name">{name}</span>
            <span className="team-thumbs__role">{role}</span>
          </li>
        ))}
      </ul>
      <ul className="team-thumbs__slider">
        <Slider {...settings}>
          {teamMembers.map(({ name, role, image }) => (
            <li
              key={name}
              className="team-thumbs__item team-thumbs__item--slide"
            >
              <div className="team-thumbs__image">
                <ModernImage
                  src={`/img/${image}`}
                  alt={name}
                  className="team-thumbs__img"
                />
              </div>
              <span className="team-thumbs__name">{name}</span>
              <span className="team-thumbs__role">{role}</span>
            </li>
          ))}
        </Slider>
      </ul>
    </div>
  </div>
);
export default TeamThumbs;
