import css from "../header/Header.module.css";
import cssdp from './Dropdown.module.css'
import cart from "../../utils/img/shoppingcart.PNG";


function Dropdown() {
    function openCart() {
        document.getElementById('dropdown')
            .classList.toggle('show')
    }

// Closes cart via onClick
    function closeCart() {
        document.getElementById('dropdown')
            .classList.toggle('show', false)
    }

    return (
        <>
            <div className={css.header}>
                <section className={cssdp.dropdown}>
                    <img src={cart} alt="cart" className={css.logo}/>
                    <button className={cssdp.dropdownButton} onClick={openCart}>Open Cart
                    </button>
                    <section className={cssdp.dropdown} className="dropdown-content">
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
                            <button onClick={closeCart}>Close</button>
                            <button onClick="purchaseAlert()">Checkout</button>
                        </section>
                    </section>
                </section>
            </div>
        </>
    )
}

export default Dropdown