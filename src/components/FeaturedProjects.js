import { Fade } from 'react-reveal';
import { translate } from 'react-translate';
import { TranslationKeysEnum } from '../data/translations/enums';
import { useLanguage } from '../contexts/LanguageProvider';
import ModernImage from './ModernImage';

const projects = [
  {
    titleKey: TranslationKeysEnum.FeaturedProjects.DR_CONTACT_LENS_TITLE,
    descriptionKey:
      TranslationKeysEnum.FeaturedProjects.DR_CONTACT_LENS_DESCRIPTION,
    img: 'preview-dr-contact-lens.png',
    link: 'dr-contact-lens',
    imgWidth: 259,
    imgHeight: 203,
  },
  {
    titleKey: TranslationKeysEnum.FeaturedProjects.NOS_FALTA_1_TITLE,
    descriptionKey:
      TranslationKeysEnum.FeaturedProjects.NOS_FALTA_1_DESCRIPTION,
    img: 'preview-nos-falta-uno-scaled.png',
    link: 'nos-falta-uno',
    imgWidth: 247,
    imgHeight: 203,
  },
  {
    titleKey: TranslationKeysEnum.FeaturedProjects['M&T_SERVICES_TITLE'],
    descriptionKey:
      TranslationKeysEnum.FeaturedProjects['M&T_SERVICES_DESCRIPTION'],
    img: 'preview-marketing-trade-scaled.png',
    link: 'marketing-and-trade-services',
    imgWidth: 223,
    imgHeight: 203,
  },
];

const FeaturedProjects = ({ t }) => {
  const { languagePrefix } = useLanguage();
  return (
    <div className="featured-projects">
      <div className="container">
        <Fade>
          <h2 className="title">
            {t(TranslationKeysEnum.FeaturedProjects.RECENT_PROJECTS)}
          </h2>
          <p className="featured-projects__subtitle">
            {t(TranslationKeysEnum.FeaturedProjects.RECENT_PROJECTS_SUBTITLE)}
          </p>
        </Fade>

        <div className="featured-projects__list">
          {projects.map((project, index) => (
            <Fade
              key={project.titleKey}
              duration={1800}
              delay={200 + 200 * index}
            >
              <div className="project-preview">
                <a href={`${languagePrefix}portfolio#${project.link}`}>
                  <div className="project-preview__image">
                    <ModernImage
                      src={`/img/cases/${project.img}`}
                      alt=""
                      className="project-preview__img"
                      height={project.imgHeight}
                      width={project.imgWidth}
                    />
                  </div>

                  <h3 className="project-preview__title">
                    {t(project.titleKey)}
                  </h3>
                  <p className="project-preview__description">
                    {t(project.descriptionKey)}
                  </p>
                  <button type="button" className="project-preview__btn">
                    {t(TranslationKeysEnum.FeaturedProjects.VIEW_CASE)}
                  </button>
                </a>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};
export default translate(TranslationKeysEnum.FeaturedProjects.NAME)(
  FeaturedProjects
);
