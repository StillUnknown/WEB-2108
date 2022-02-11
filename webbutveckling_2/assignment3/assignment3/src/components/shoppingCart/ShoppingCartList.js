import {useContext} from "react";
import ShoppingCartItem from './ShoppingCartItem'
import CartContext from "../../context/CartContext";
import css from './ShoppingCartList.module.css'


export default function ShoppingCartList(props) {
    const productOnCartCtx = useContext(CartContext);

    function cancelHandler() {
        props.onCancel();
    }

    function pay() {
        alert('Thank you very much')
    }

    function freeShipping() {
        let freeFreight = 259
        if (productOnCartCtx.totalSumInCart >= freeFreight) {
            return ('You have free shipping')
        } else {
            let remaining = freeFreight - productOnCartCtx.totalSumInCart;
            {
                return (remaining + ' $ left  to free shipping')
            }
        }
    }


    return (
        <div>
            <div>
                <div className={css.dropdownContent}>
                    <h2>Your albums</h2>
                    <div className={css.scrollWindowProperties}>
                        <hr className={css.hr}/>
                        {
                            productOnCartCtx.productOnCart.map((user, index) => {
                                return (
                                    <ShoppingCartItem
                                        key={index}
                                        id={productOnCartCtx.productOnCart[index].id}
                                        image={productOnCartCtx.productOnCart[index].image}
                                        name={productOnCartCtx.productOnCart[index].name}
                                        price={productOnCartCtx.productOnCart[index].price}
                                        quantity={productOnCartCtx.productOnCart[index].quantity}
                                        totalSum={productOnCartCtx.productOnCart[index].totalSum}
                                    />
                                )
                            })
                        }
                        <section className={css.totalSum}>
                            <h3>Antal: {productOnCartCtx.totalAlbumInCart}</h3>
                        </section>
                        <section className={css.totalSum}>
                            <h3>Totalsumma: {productOnCartCtx.totalSumInCart} $</h3>
                        </section>
                        <article>
                            <h3>{freeShipping()}</h3>
                        </article>
                        <section className={css.endButton}>
                            <button className={css.closeButton} onClick={cancelHandler}>
                                Close
                            </button>
                            <button data-testid='pay' className={css.payButton} onClick={pay}>
                                Purchase
                            </button>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}