import style from './Header.module.css'
import { useTranslation } from '../TranslationProvider/TranslationProvider';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';


function Header() {
    const { t } = useTranslation();
    return (
        <>
            <LanguageSwitcher />
        <div className={style["wrapper"]}>
            <div className={style["close"]}></div>
            <p>{t('Restore')}</p>
        </div>
        </>
    )
}

export default Header;