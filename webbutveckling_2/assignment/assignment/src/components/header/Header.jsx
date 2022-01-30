import logo from '../../utils/img/logo.PNG'
import css from './Header.module.css'
import Cart from "../cart/Cart";
import banner from '../../utils/img/50off.gif'

function Header() {
    return (
        <header>
            <section className={css.header}>
                <img src={logo} className={css.logo} alt="logo"/>
            </section>
            <section className={css.header}>
                <img src={banner} className='banner' alt='banner' />
            </section>
            <div className={css.header}>
                <Cart/>
            </div>
        </header>
    )
}

export default Header