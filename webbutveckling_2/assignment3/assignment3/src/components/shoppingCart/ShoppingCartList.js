import {useContext} from "react";
import ShoppingCartItem from './ShoppingCartItem'
import AlbumContext from "../../context/AlbumContext";
import css from './ShoppingCartList.module.css'


export default function ShoppingCartList(props) {
    const productOnCartCtx = useContext(AlbumContext);

    function cancelHandler() {
        props.onCancel();
    }

    function pay() {
        alert('Tack för din betalning!')
    }

    return (
        <div>
            <div>
                <div className={css.dropdownContent}>
                    <h2 data-testid='products'>Dina produkter</h2>
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
                        <h3>Totalsumma: {productOnCartCtx.totalSumInCart}</h3>
                    </section>
                    <article>
                        <h3>{productOnCartCtx.totalSumInCart >= 259 ? 'You have free shipping!' : (259 - productOnCartCtx.totalSumInCart) + ' $ left for fre shipping'}</h3>
                    </article>
                    <section className={css.endButton}>
                        <button className={css.closeButton} onClick={cancelHandler}>
                            Close
                        </button>
                        <button data-testid='pay' className={css.payButton} onClick={pay}>
                            Betala
                        </button>
                    </section>
                </div>
            </div>
        </div>
    )
}