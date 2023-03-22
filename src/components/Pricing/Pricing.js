import style from './Pricing.module.css'
import { useState } from 'react'
import { useTranslation } from '../TranslationProvider/TranslationProvider';


function Pricing() {
    const { t } = useTranslation();

    const [flag, setFlag] = useState(true)
    const [left, setLeft] = useState('wrapper-left')
    const [right, setRight] = useState('wrapper-right')

    function changeOpacity() {
        if (flag) {
            setLeft('wrapper-left-change')
            setRight('wrapper-right-change')
            setFlag(false)
        } else {
            setLeft('wrapper-left')
            setRight('wrapper-right')
            setFlag(true)
        }
    }


    return (
        <>
            <div className={style["wrapper"]}>

                <div onClick={changeOpacity} className={style[left]}>
                    <h2>{t('Monthly')}</h2>
                    <h1>$9.99</h1>
                    <p>{t('per month')}</p>
                    <h3>{t('3 DAYS FREE')}</h3>
                    <p>{t('$9.99 month')}</p>
                </div>

                <div onClick={changeOpacity} className={style[right]}>
                    <div className={style["img-back"]}></div>
                    <div className={style["img-red"]}></div>
                    <h2>{t('Annually')}</h2>
                    <h1>$19.99</h1>
                    <p>{t('per year')}</p>
                    <h3>{t('MOST POPULAR')}</h3>
                    <p>{t('$1.66 month')}</p>
                </div>


            </div>
            <div className={style["btn"]}>
                <p>{t('Continue')}</p>
            </div>
        </>
    )
}

export default Pricing;