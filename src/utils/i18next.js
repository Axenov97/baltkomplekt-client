import i18n from 'i18next';
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from "react-i18next";

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json'
        },
        fallbackLng: "ru",
        whitelist: ["ru", "en"],
        debug: true,
        detection: {
            order: ["localStorage", "cookie"],
            caches: ["localStorage", "cookie"]
        },
        interpolation: {
            escapeValue: false
        }
});