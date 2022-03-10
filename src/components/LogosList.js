import { Fade } from 'react-reveal';
import Slider from 'react-slick';
import { translate } from 'react-translate';
import { TranslationKeysEnum } from '../data/translations/enums';
import ModernImage from './ModernImage';

const companies = [
  {
    name: 'Visa',
    img: 'visa.png',
    width: 600,
    height: 250,
  },
  {
    name: 'Adidas',
    img: 'adidas.png',
    width: 600,
    height: 398,
  },
  {
    name: 'Walmart',
    img: 'walmart.png',
    width: 600,
    height: 160,
  },
  {
    name: 'Deloitte',
    img: 'deloitte.png',
    width: 600,
    height: 170,
  },
  {
    name: 'YPF',
    img: 'ypf.png',
    width: 600,
    height: 200,
  },
];

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  arrows: false,
};

const LogosList = ({ t }) => (
  <div>
    <div className="container">
      <Fade>
        <h2 className="title">
          {t(TranslationKeysEnum.LogosList.COMPANIES_THAT_TRUST_US)}
        </h2>
      </Fade>
    </div>
    <div className="logos logos--bg-solid">
      <div className="container">
        <ul className="logos__list">
          {companies.map(({ name, img }, index) => (
            <Fade key={name} duration={1500} delay={200 + 170 * index}>
              <li className="logos__item">
                <ModernImage
                  className="logos__img"
                  src={`/img/clients/${img}`}
                  alt={name}
                  title={name}
                />
              </li>
            </Fade>
          ))}
        </ul>

        <div className="logos__slider">
          <Slider {...settings}>
            {companies.map(({ name, img, width, height }) => (
              <li key={name} className="logos__item">
                <ModernImage
                  className="logos__img"
                  src={`/img/clients/${img}`}
                  alt={name}
                  title={name}
                  width={width}
                  height={height}
                />
              </li>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  </div>
);

export default translate(TranslationKeysEnum.LogosList.NAME)(LogosList);
