import React, { createContext, useContext, useState, useEffect } from 'react';
import queryString from 'query-string';

const TranslationContext = createContext();

const TranslationProvider = ({ children }) => {
  const [translations, setTranslations] = useState({});
  const [lang, setLang] = useState('en');

  useEffect(() => {
    // Load translations based on system language or query string
    const systemLang = navigator.language.slice(0, 2);
    const queryLang = queryString.parse(window.location.search)?.lang;
    const selectedLang = queryLang || systemLang || 'en';
    try {
      const langData = require(`../../locales/${selectedLang}.json`);
      setTranslations(langData);
      setLang(selectedLang);
    } catch (err) {
      const langData = require(`../../locales/en.json`);
      setTranslations(langData);
      setLang('en');
    }
  }, []);

  useEffect(() => {
    // Set lang attribute on <html> tag
    document.documentElement.lang = lang;
  }, [lang]);

  const setLanguage = (lang) => {
    try {
      const langData = require(`../../locales/${lang}.json`);
      setTranslations(langData);
      setLang(lang);
      const query = queryString.stringify({ lang });
      window.history.pushState({}, '', `?${query}`);
    } catch (err) {
      const langData = require(`../../locales/en.json`);
      setTranslations(langData);
      setLang('en');
      window.history.pushState({}, '', '');
    }
  };

  return (
    <TranslationContext.Provider value={{ translations, lang, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

const useTranslation = () => {
  const { translations, lang, setLanguage } = useContext(TranslationContext);

  const t = (key) => {
    return translations[key] || key;
  };

  return { t, lang, setLanguage };
};

export { TranslationProvider, useTranslation };
