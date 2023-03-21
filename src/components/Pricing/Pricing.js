import style from './Pricing.module.css'

function Pricing() {
    return (
        <>
            <div className={style["wrapper"]}>
                <div className={style["wrapper-left"]}>
                    <h2>Monthly</h2>
                    <h1>$9.99</h1>
                    <p>per month</p>
                    <h3>3 DAYS FREE!</h3>
                    <p>$9.99 month</p>
                </div>

                <div className={style["wrapper-right"]}>
                    <div className={style["img-back"]}></div>
                    <div className={style["img-red"]}></div>
                    <h2>Annually</h2>
                    <h1>$19.99</h1>
                    <p>per year</p>
                    <h3>most popular</h3>
                    <p>$1.66 month</p>
                </div>

            </div>
            <div className={style["btn"]}>
                <p>Continue </p>
            </div>
        </>
    )
}

export default Pricing;