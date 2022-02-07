import { useState } from "react";
import logoShop from '../../utils/img/shoppingcart.PNG'
import { FaCartArrowDown } from "react-icons/fa";

import css from "./Header.module.css";
import BasketList from "../basket/BasketList";


function Header(props) {
    const [cartIsOpen, setCartIsOpen] = useState(false);

    function cartHandler() {
        setCartIsOpen(true);
        // console.log('clicked')
    }

    function closeCartHandler() {
        if (cartIsOpen === true) {
            setCartIsOpen(false);
        }
    }

    function messageExitPayment() {
        alert('Thanks for your purchase!!')
    }

    return (
        <header >
            <div className={css.gridContainerHeader}>
                <div className={css.logo}>
                    <img src={logoShop} alt="Logo Amoeba"/>
                </div>
                <div className={css.title}>
                    <h1 data-testid='header'>AMOEBA STORE: The Best Music</h1>
                </div>
                <div className={css.checkOut}>
                    <div>
                        <button data-testid='openBtnCart'
                                onClick={() => {
                                    cartHandler()
                                    closeCartHandler()
                                }} className={css.checkoutDropdownButton}>
                            <FaCartArrowDown/>
                            <span data-testid='btnCart' className={css.label}>ShopCart</span></button>
                    </div>
                    {cartIsOpen && <BasketList onCancel={closeCartHandler} onConfirm={messageExitPayment}/>}
                </div>
            </div>
            <div className={css.searchArea}>
                <input data-testid='input' type="text" placeholder='artist name, keywords'/>
                <button data-testid='btnSearch' >SEARCH</button>
            </div>
        </header>
    )

}

export default Header