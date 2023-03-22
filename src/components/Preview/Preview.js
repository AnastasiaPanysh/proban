import style from './Preview.module.css'
import { useTranslation } from '../TranslationProvider/TranslationProvider';

function Preview() {
    const { t } = useTranslation();
    return (
        <div className={style["preview"]}>
            <h1>{t('Unlimited Access to All Features')}</h1>

            <div className={style["wrapper"]}>
                <div className={style["feature"]}>
                    <div className={style["img-1"]}></div>
                    <p>{t('Unlimited documents')}</p>
                </div>
                <div className={style["feature"]}>
                    <div className={style["img-2"]}></div>
                    <p>{t('Export to clouds')}</p>
                </div>
                <div className={style["feature"]}>
                    <div className={style["img-3"]}></div>
                    <p>{t('Text recognition (OCR)')}</p>
                </div>

            </div>
        </div>

    )
}

export default Preview