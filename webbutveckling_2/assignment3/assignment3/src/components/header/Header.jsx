import {useState} from "react";
import logoShop from '../../utils/img/shoppingcart.PNG'
import {FaCartArrowDown} from "react-icons/fa";
import logo from '../../utils/img/logo.PNG'

import css from "./Header.module.css";
import ShoppingCartList from "../shoppingCart/ShoppingCartList";


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
                <div>
                    <img src={logo} className={css.logo} alt="logo"/>
                </div>
                <div className={css.title}>
                    <input data-testid='input' type="text" placeholder='artist name, keywords'/>
                    <button data-testid='btnSearch'>SEARCH</button>
                </div>
                <div className={css.checkOut}>
                    <div>
                        <img src={logoShop} className={css.logo} onClick={toggleMenu} alt='cartlogo'/>
                        <br/>
                        <button data-testid='openBtnCart'
                                onClick={() => {
                                    toggleMenu()
                                }} className={css.checkoutDropdownButton}>
                            <FaCartArrowDown/>
                            <span data-testid='btnCart' className={css.label}>ShopCart</span></button>
                    </div>
                    {cartIsOpen && <ShoppingCartList onCancel={toggleMenu} onConfirm={messageExitPayment}/>}
                </div>
            </div>
        </header>
)

}

export default Header