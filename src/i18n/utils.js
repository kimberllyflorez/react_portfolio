import {ui, defaultLang} from "./ui";

export function getLangFromUrl(url) {
    const urlParts = url.pathname.split("/");
    if (urlParts.length > 1 && urlParts[1] in ui) {
      return urlParts[1];
    }
    return defaultLang;
  }
export function useTranslations(lang) {
    return function t(key) {
      return ui[lang]?.[key] || ui[defaultLang]?.[key]; // Optional chaining for safer access
    };
  }
  