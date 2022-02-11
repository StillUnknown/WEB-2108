import css from './ShoppingCartItem.module.css'
import {useContext} from "react";
import CartContext from "../../context/CartContext";


export default function ShoppingCartItem(props) {
    const productOnCartCtx = useContext(CartContext);

    const itemIsOnCart = productOnCartCtx.itemIsOnCart(props.id);

    function removeProductFromCartHandler() {
        if (itemIsOnCart) {
            productOnCartCtx.removeProduct(props.id)
        }
    }

    function updateProductInCartHandler(newValue) {
        console.log(newValue);
        if (itemIsOnCart) {
            productOnCartCtx.updateProduct(props.id, newValue);
        }
    }

    return (
        <div>
            <ul>
                <section className={css.gridContainer}>
                    <article>
                        <button className={css.verticallyAlign} onClick={removeProductFromCartHandler}>x</button>
                    </article>
                    <article>
                        <img
                            src={props.image}
                            alt={props.name}
                            className={css.imageCart}/>
                        <h3>Namn: {props.name}</h3>
                    </article>
                    <article>
                        <input data-testid='changeInputValue'
                               onChange={(e) => updateProductInCartHandler(Number(e.target.value))} // Har valt att ha Number här istället för parseInt då parseInt bara hanterar heltal
                               className={css.input}
                               type="number"
                               min='0'
                               value={props.quantity}/>
                    </article>
                    <article>
                        <h3>Price: {props.totalSum} $ </h3>
                    </article>
                </section>
                <hr className={css.hr}/>
            </ul>
        </div>
    )
}