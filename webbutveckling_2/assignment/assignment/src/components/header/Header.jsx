import logo from '../../utils/img/logo.PNG'
import css from './Header.module.css'
import Cart from "../cart/Cart";
import SearchBox from "../searchBox/SearchBox";


function Header() {



    return (
        <header>
            <section className={css.header}>
                <img src={logo} className={css.logo} alt="logo"/>
            </section>
            <section className={ css.header }>
            </section>
            <div className={css.header}>
                <Cart/>
            </div>
        </header>
    )
}

export default Header