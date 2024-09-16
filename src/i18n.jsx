import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import Backend from 'i18next-http-backend';
import uzbekLanguage from '../public/languages/uz.json'
import englishLanguage from '../public/languages/en.json'
import russianLanguage from '../public/languages/ru.json'
 
 const language = localStorage.getItem("i18nextLng") || "ru"
 
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    lng: language,
    debug: true,

    resources: {
        uz:{translation: uzbekLanguage},
        en:{translation: englishLanguage},
        ru:{translation: russianLanguage},
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;