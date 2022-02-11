import {useState} from "react";
import {FaCartArrowDown} from "react-icons/fa";
import css from "./Header.module.css";
import ShoppingCartList from "../shoppingCart/ShoppingCartList";
import cartlogo from '../../utils/img/img_2.png'


function Header() {
    const [cartIsOpen, setCartIsOpen] = useState(false);

    function toggleMenu() {
        setCartIsOpen(!cartIsOpen)
    }

    function messageExitPayment() {
        alert('Thanks for your purchase!!')
    }

    return (
        <header>
            <div className={css.gridContainerHeader}>
                <div className={css.centerText}>
                    <h1 className={css.h1MarginTop}>StillUnknowns</h1>
                    <h1 className={css.h1}>Webshop</h1>
                </div>
                <div className={css.title}>
                    <input data-testid='input' type="text" placeholder='artist name, keywords'/>
                    <button data-testid='btnSearch'>SEARCH</button>
                </div>
                <div className={css.checkOut}>
                    <div className={css.alignVertically}>
                        <img src={cartlogo} className={css.logo} onClick={toggleMenu} alt='cartlogo'/>
                        <button data-testid='openBtnCart'
                                onClick={() => {
                                    toggleMenu()
                                }} className={css.checkoutDropdownButton}>
                            <FaCartArrowDown className={css.cart}/>
                            <span data-testid='btnCart' className={css.label}>Cart</span></button>
                    </div>
                    {cartIsOpen && <ShoppingCartList onCancel={toggleMenu} onConfirm={messageExitPayment}/>}
                </div>
            </div>
        </header>
)

}

export default Header