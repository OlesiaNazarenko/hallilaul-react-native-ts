import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import en from "./en.json"
import ee from "./ee.json"

const resources = {
  en: {
    translation: en,
  },
  ee: {
    translation: ee,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: "ee",
  fallbackLng: "en",
  compatibilityJSON: "v3",
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
