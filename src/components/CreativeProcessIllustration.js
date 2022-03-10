import ReactSVG from 'react-svg';
import { translate } from 'react-translate';
import { TranslationKeysEnum } from '../data/translations/enums';

const stepsContent = [
  {
    titleKey: TranslationKeysEnum.CreativeProcessIllustration.IDEA_TALK_TITLE,
    descriptionKey:
      TranslationKeysEnum.CreativeProcessIllustration.IDEA_TALK_DESCRIPTION,
    icon: 'icon-process-chat.svg',
    useOriginal: false,
    color: '#fa655c',
  },
  {
    titleKey:
      TranslationKeysEnum.CreativeProcessIllustration.PROPOSE_SOLUTIONS_TITLE,
    descriptionKey:
      TranslationKeysEnum.CreativeProcessIllustration
        .PROPOSE_SOLUTIONS_DESCRIPTION,
    icon: 'icon-process-planning.svg',
    useOriginal: false,
    color: '#cd6467',
  },
  {
    titleKey:
      TranslationKeysEnum.CreativeProcessIllustration.SKETCH_IT_OUT_TITLE,
    descriptionKey:
      TranslationKeysEnum.CreativeProcessIllustration.SKETCH_IT_OUT_DESCRIPTION,
    icon: 'icon-process-design-white.svg',
    useOriginal: false,
    color: '#a76372',
  },
  {
    titleKey: TranslationKeysEnum.CreativeProcessIllustration.CREATE_TITLE,
    descriptionKey:
      TranslationKeysEnum.CreativeProcessIllustration.CREATE_DESCRIPTION,
    icon: 'icon-process-development-white.svg',
    useOriginal: true,
    color: '#74627f',
  },
  {
    titleKey: TranslationKeysEnum.CreativeProcessIllustration.TEST_TITLE,
    descriptionKey:
      TranslationKeysEnum.CreativeProcessIllustration.TEST_DESCRIPTION,
    icon: 'icon-process-test.svg',
    useOriginal: false,
    color: '#696282',
  },
  {
    titleKey:
      TranslationKeysEnum.CreativeProcessIllustration.FIX_AND_IMPROVE_TITLE,
    descriptionKey:
      TranslationKeysEnum.CreativeProcessIllustration
        .FIX_AND_IMPROVE_DESCRIPTION,
    icon: 'icon-process-gear.svg',
    useOriginal: false,
    color: '#466d99',
  },
  {
    titleKey: TranslationKeysEnum.CreativeProcessIllustration.GO_LIVE_TITLE,
    descriptionKey:
      TranslationKeysEnum.CreativeProcessIllustration.GO_LIVE_DESCRIPTION,
    icon: 'icon-process-product-white.svg',
    useOriginal: true,
    color: '#1e6196',
  },
];

const CreativeProcessIllustration = ({ t }) => (
  <div className="process-illustration">
    {stepsContent.map(
      ({ titleKey, descriptionKey, icon, useOriginal, color }, index) => (
        <div
          key={t(titleKey)}
          className={`process-illustration__item process-illustration__item--${index +
            1}`}
        >
          <div className="process-illustration__icon-cont">
            <ReactSVG
              src={`/img/illustrations/creative-process/${icon}`}
              className={`process-illustration__icon ${
                useOriginal ? 'process-illustration__icon--original' : ''
              }`}
            />
          </div>
          <div className="process-illustration__text">
            <span className="process-illustration__title" style={{ color }}>
              {t(titleKey)}
            </span>
            <p className="process-illustration__description">
              {t(descriptionKey)}
            </p>
          </div>
        </div>
      )
    )}
  </div>
);
export default translate(TranslationKeysEnum.CreativeProcessIllustration.NAME)(
  CreativeProcessIllustration
);
