import logo from '../../utils/img/logo.PNG'
import cart from '../../utils/img/shoppingcart.PNG'
import css from './Header.module.css'

const Header = () => {
    return (
        <>
            <header>
                <section className={css.header}>
                    <img src={logo} className={css.logo} alt="logo"/>
                </section>
                <section className={css.header}><label htmlFor="Håkan Hellström">Search album: </label><input
                    type="text"
                    id="Håkan Hellström"
                    value="Håkan Hellström"/>
                    <button onClick="searchButton()">Search</button>
                </section>

                <div className={css.header}>
                    <section className="dropdown">
                        <img src={cart} alt="cart" className={css.logo} onClick="openCart()"/>
                        <button className="dropdown-button" onClick="openCart()">Open Cart
                        </button>
                        <section className="dropdown" className="dropdown-content">
                            <p>Cart</p>
                            <section className="cards-in-cart">
                            </section>
                            <section className="total-sum-of-cart">
                            </section>
                            <section className="total-quantity-in-cart">
                            </section>
                            <section className="cost-of-shipping">
                            </section>
                            <section>
                                <button onClick="closeCart()">Close</button>
                                <button onClick="purchaseAlert()">Checkout</button>
                            </section>
                        </section>
                    </section>
                </div>
            </header>
        </>
    )
}

export default Header