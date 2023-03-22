import style from './Footer.module.css'
import { useTranslation } from '../TranslationProvider/TranslationProvider';


function Footer() {
    const { t } = useTranslation();


        return (
            <div className={style["wrapper"]}>
                <p>{t('Auto-renewable. Cancel anytime.')}</p>
                <div className={style['footer-p']}>
                    <p>{t('Terms of Use')}</p>
                    <p>{t('Privacy Policy')}</p>
                </div>
            </div>
        )
    }

    export default Footer;