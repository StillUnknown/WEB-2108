import cartlogo from '../../utils/img/shoppingcart.PNG'
import css from './Dropdown.module.css'
import Cart from "../cart/Cart";

function Dropdown() {

    function openCart() {
        document.getElementById('dropdown')
            .classList.toggle('show')
    }

    return (
        <section className={css.dropdown}>
            <img src={cartlogo} alt="cart" className={css.logo} onClick={openCart}/>
            <button className={css.dropdownButton} onClick={openCart}>Open Cart</button>
            <Cart/>
        </section>
    )
}

export default Dropdown