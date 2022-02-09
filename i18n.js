import i18n from 'i18next'
import ChainedBackend from "i18next-chained-backend"
import HttpBackend from 'i18next-http-backend'
import LocalStorageBackend from "i18next-localstorage-backend"
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
  .use(ChainedBackend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    backend: {
      backends: [
        LocalStorageBackend,
        HttpBackend
      ],
      backendOptions: [{
        expirationTime: 7 * 24 * 60 * 60 * 1000 // 7 days
      }, {
        loadPath: 'locales/{{lng}}/{{ns}}.json'
      }]
    },
    detection: {
      order: ['cookie', 'localStorage', 'navigator'],
      caches: ['localStorage', 'cookie'],
      cookieMinutes: 43200,
    },
    fallbackLng: ['ru', 'en'],
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react: {
      useSuspense: false
    },
  })

export default i18n
