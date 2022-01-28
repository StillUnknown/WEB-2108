import logo from '../../utils/img/logo.PNG'
import css from './Header.module.css'
import Dropdown from "../dropdown/Dropdown";

function Header() {
    return (
        <header>
            <section className={css.header}>
                <img src={logo} className={css.logo} alt="logo"/>
            </section>
            <section className={css.header}>
            </section>
            <div className={css.header}>
                <Dropdown/>
            </div>
        </header>
    )
}

export default Header