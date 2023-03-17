import style from './Header.module.css'

function Header() {
    return (
        <div className={style["wrapper"]}>
            <div className={style["close"]}></div>
            <p>Restore</p>
        </div>
    )
}

export default Header;