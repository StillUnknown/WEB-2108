import logo from '../../utils/img/logo.PNG'
import css from './Header.module.css'
import Cart from "../cart/Cart";



function Header() {

    return (
        <header>
            <section className={css.header}>
                <img src={logo} className={css.logo} alt="logo"/>
            </section>
            <section className={ css.header }>
            </section>
            <div className={css.header}>
                <p data-testid='cart'>Cart</p>
                <Cart/>
            </div>
        </header>
    )
}

export default Header