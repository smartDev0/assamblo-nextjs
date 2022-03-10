import React, { createContext, useState, useContext, useEffect } from 'react';
import { TranslatorProvider } from 'react-translate';
import { useRouter } from 'next/router';
import {
  TranslationsLanguagePrefixEnum,
  DEFAULT_LANGUAGE,
} from '../data/translations/enums';
import {
  getTranslationLocale,
  getTranslatedPath,
  getTranslations,
} from '../utils/translations';

const LanguageContext = createContext();
export const useLanguage = () => useContext(LanguageContext);

export default function LanguageProvider({ children }) {
  const router = useRouter();

  const [translationsLocale, _setTranslationsLocale] = useState(
    getTranslationLocale(router.asPath)
  );

  const updateRoute = async newPath => {
    await router.push(newPath);
    router.reload();
  };

  const setTranslationsLocale = value => {
    _setTranslationsLocale(value);
    const newPath = getTranslatedPath(
      translationsLocale,
      value,
      router.pathname
    );
    updateRoute(newPath);
  };

  const languagePrefix =
    translationsLocale === DEFAULT_LANGUAGE
      ? '/'
      : TranslationsLanguagePrefixEnum[translationsLocale];

  const [translations, setTranslations] = useState(
    getTranslations(translationsLocale)
  );

  useEffect(() => {
    setTranslations(getTranslations(translationsLocale));
  }, [translationsLocale]);

  return (
    <LanguageContext.Provider
      value={{ translationsLocale, setTranslationsLocale, languagePrefix }}
    >
      <TranslatorProvider translations={translations}>
        {children}
      </TranslatorProvider>
    </LanguageContext.Provider>
  );
}
