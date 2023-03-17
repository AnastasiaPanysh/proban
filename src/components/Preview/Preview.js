import style from './Preview.module.css'

function Preview() {
    return (
        <div className={style["preview"]}>
        <h1>Unlimited Access to All Features</h1>

            <div className={style["wrapper"]}>
                <div className={style["feature"]}>
                    <div className={style["img-1"]}></div>
                    <p>Unlimited documents</p>
                </div>
                <div className={style["feature"]}>
                    <div className={style["img-2"]}></div>
                    <p>Export to clouds</p>
                </div>
                <div className={style["feature"]}>
                    <div className={style["img-3"]}></div>
                    <p>Text recognition (OCR)</p>
                </div>

            </div>
            </div>
    
    )
}

export default Preview