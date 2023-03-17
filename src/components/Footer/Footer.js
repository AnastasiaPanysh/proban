import style from './Footer.module.css'


function Footer() {
    return (
        <div className={style["wrapper"]}>
        <p>Auto-rewable. Cancel anytime</p>
        <div className={style['footer-p']}>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
        </div>
        </div>
    )
}

export default Footer;