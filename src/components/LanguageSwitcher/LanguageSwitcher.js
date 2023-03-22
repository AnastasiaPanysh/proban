import { useTranslation } from '../TranslationProvider/TranslationProvider';
import queryString from 'query-string';

function LanguageSwitcher() {
    const { setLanguage } = useTranslation();

    const handleLanguageChange = (e) => {
        const lang = e.target.value;
        setLanguage(lang);
    };

    const renderOption = (lang) => {
        const { lang: currentLang } = queryString.parse(window.location.search);
        const isSelected = currentLang === lang;
        return (
            <option key={lang} value={lang} selected={isSelected}>
                {lang.toUpperCase()}
            </option>
        );
    };

    return (
        <div>
            <select onChange={handleLanguageChange}>
                <option disabled>Select Language</option>
                {['en', 'fr', 'es', 'ja', 'nl', 'ru', 'zh'].map(renderOption)}
            </select>
        </div>
    );
}

export default LanguageSwitcher;
