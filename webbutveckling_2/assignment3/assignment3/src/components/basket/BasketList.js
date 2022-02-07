import { useContext } from "react";
import css from "./BasketList.module.css";
import BasketItem from "./BasketItem";
import StoreContext from '../../context/storeContext'



export default function BasketList(props) {
    const productOnCartCtx = useContext(StoreContext);
    function cancelHandler(){
        props.onCancel();
    }

    function paymentHandler(){
        props.onConfirm();
    }

    return (
        <div>

            <div className={`${css.dropdownContent} ${css.show} ${css.dropdown}`} >
                <h3>Your Cart</h3>
                <hr/>
                <div className={css.gridItem1}>
                    {
                        productOnCartCtx.productOnCart.map((user, index) => {
                            return (
                                <BasketItem
                                    key={ index }
                                    id={ productOnCartCtx.productOnCart[index].id }
                                    image={ productOnCartCtx.productOnCart[index].image }
                                    artist={ productOnCartCtx.productOnCart[index].artist }
                                    album={ productOnCartCtx.productOnCart[index].album }
                                    price={ productOnCartCtx.productOnCart[index].price }
                                />
                            )
                        })
                    }
                </div>
                <article className={css.gridItem1} >
                    <p>
                        SUMMARY: (<span id="totalCds">x</span><span> CD's</span>) TOTAL to PAY:
                        <span id="totalPay">0</span><span> SEK</span>
                    </p>
                    <p id="freeShipmt">Need to buy <span>XX</span> kr more items cd to free freight!</p>
                </article>

                <button className={`${css.btn} ${css.btnAlt}`} onClick={ cancelHandler }>Close</button>
                <button className={css.btn} onClick={ paymentHandler }>Checkout</button>

            </div>
        </div>
    )
}