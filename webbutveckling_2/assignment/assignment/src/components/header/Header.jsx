import logo from '../../utils/img/logo.PNG'
import css from './Header.module.css'
import Dropdown from "../dropdown/Dropdown";

function Header() {
    return (
        <header>
            <section className={css.header}>
                <img src={logo} className={css.logo} alt="logo"/>
            </section>
            <section className={css.header}><label htmlFor="Håkan Hellström">Search album: </label><input type="text"
                                                                                                          id="Håkan Hellström"
                                                                                                          value="Håkan Hellström"/>
                <button onClick="searchButton()">Search</button>
            </section>
            <div className={css.header}>
                <Dropdown/>
            </div>
        </header>
    )
}

export default Header