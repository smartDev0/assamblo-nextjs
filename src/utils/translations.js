import { TranslationsLanguageEnum } from '../data/translations/enums';
import EnglishTranslationEnum from '../data/translations/en';
import SpanishTranslationEnum from '../data/translations/es';

export function getTranslations(translationsLocale) {
  switch (translationsLocale) {
    case TranslationsLanguageEnum.EN:
      return EnglishTranslationEnum;
    case TranslationsLanguageEnum.ES:
      return SpanishTranslationEnum;
    default:
      return EnglishTranslationEnum;
  }
}

export function getTranslationLocale(path) {
  let language = TranslationsLanguageEnum.EN;
  Object.values(TranslationsLanguageEnum).forEach(translationLocale => {
    if (path.startsWith(`/${translationLocale}`)) {
      language = translationLocale;
    }
  });
  return language;
}

export function getTranslatedPath(
  currentTranslationLocale,
  newTranslationLocale,
  path
) {
  if (
    currentTranslationLocale === TranslationsLanguageEnum.EN &&
    newTranslationLocale === TranslationsLanguageEnum.ES
  ) {
    switch (path) {
      case '/':
        return '/es';
      case '/about-us':
        return '/es/nosotros';
      case '/contact':
        return '/es/contacto';
      case '/portfolio':
        return '/es/portfolio';
      case '/process':
        return '/es/proceso';
      case '/services':
        return '/es/servicios';
      case '/traceability':
        return '/es/trazabilidad';
      default:
        return '/';
    }
  } else if (
    currentTranslationLocale === TranslationsLanguageEnum.ES &&
    newTranslationLocale === TranslationsLanguageEnum.EN
  ) {
    switch (path) {
      case '/es':
        return '/';
      case '/es/nosotros':
        return '/about-us';
      case '/es/contacto':
        return '/contact';
      case '/es/portfolio':
        return '/portfolio';
      case '/es/proceso':
        return '/process';
      case '/es/servicios':
        return '/services';
      case '/es/trazabilidad':
        return '/traceability';
      default:
        return '/';
    }
  }
  return '';
}
