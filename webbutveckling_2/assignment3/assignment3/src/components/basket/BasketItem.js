import { useState } from 'react'
// import { useContext } from "react";
import css from "./BasketItem.module.css";
// import StoreContext from "../../context/storeContext";



function BasketItem(props){
    // const productOnCartCtx = useContext(StoreContext);
    const [inputValue, setInputValue] = useState(1)

    return(
        <div className={css.products} >
            <ul >
                <li >
                    <img
                        src={props.image}
                        alt={props.artist}/>
                    <h3 >{props.artist}</h3>
                    <p>Album: <span >{props.album}</span></p>
                    <p>Price: <span >{props.price}</span> Kr </p>
                    <input data-testid='input'  type="number" name="amount" value={ inputValue }
                           min={0}
                           onChange={event => setInputValue(Number(event.target.value))}/>
                    <p ><span>Total value</span> Kr</p>
                    <button  id={props.id} type="button" onClick={}>X</button>
                </li>
            </ul>
        </div>


    )
}
export default BasketItem