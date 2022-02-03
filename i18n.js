import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    detection: {
      order: ['cookie', 'localStorage', 'navigator'],
      caches: ['localStorage', 'cookie'],
      cookieMinutes: 43200,
    },
    fallbackLng: ['en', 'ru'],
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
