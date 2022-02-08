import { useState } from 'react'
// import { useContext } from "react";
import css from "./BasketItem.module.css";
// import StoreContext from "../../context/storeContext";



function BasketItem(props){
    // const productOnCartCtx = useContext(StoreContext);
    const [inputValue, setInputValue] = useState(1)
    const totalAlbumPrice = inputValue * props.price


    return(
        <div className={css.products} >
            <ul>
                <li>
                    <img
                        src={props.image}
                        alt={props.artist}/>
                    <h3 >{props.artist}</h3>
                    <p>Album: <span>{props.album}</span></p>
                    <p>Price: <span>{props.price}</span> Kr </p>
                    <input data-testid='input'  type="number" name="amount" value={ inputValue }
                           min={0}
                           onChange={event => setInputValue(Number(event.target.value))}/>
                    <p><span>Total value </span>{totalAlbumPrice} Kr</p>
                    <button id={props.id} onClick={remov} type="button">X</button>
                </li>
            </ul>
        </div>


    )
}
export default BasketItem