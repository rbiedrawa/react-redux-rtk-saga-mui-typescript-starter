import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.translation.json'
import pl from './locales/pl.translation.json'

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      translation: en,
    },
    pl: {
      translation: pl,
    },
  },
  debug: false,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
