import { createContext, useState } from "react";

const StoreContext = createContext({
    productOnCart: [],
    totalProductOnCart: 0,
    totalPriceOnCart: 0
});

export function StoreContextProvider(props) {
    const [ itemsSelected, setItemsSelected ] = useState([]);

    function addProductOnCartHandler(selectedItem) {
        // console.log(selectedItem)
        if (cartIsEmpty()) {
            console.log('if')
            insertProductOnCartHandler(selectedItem);
        } else {
            console.log('else')
            if (itemIsProductOnCartHandler(selectedItem.id)) {
                console.log('if2')
                updateQuantityAndPrice(selectedItem.id);
            } else {
                console.log('else2')
                insertProductOnCartHandler(selectedItem);
            }
            console.log(selectedItem)
        }
    }



    function removeProductOnCartHandler(productId) {
        setItemsSelected(prevItemsSelected => {
            return prevItemsSelected.filter(product => product.id !== productId );
        });
    }

    function itemIsProductOnCartHandler(productId) {
        return itemsSelected.some(product => product.id === productId);
    }

    function insertProductOnCartHandler(selectedItem) {
        console.log(selectedItem)
        setItemsSelected((prevItemsSelected) => {
            return prevItemsSelected.concat(selectedItem);
        });
    }

    function cartIsEmpty() {
        return itemsSelected.length === 0
    }

    function updateQuantityAndPrice(productId){
        console.log('updateQuantityAndPrice:', productId)
        itemsSelected.map((currentItem)=>{
            if (currentItem.id === productId) {
                currentItem.quantity += 1
                console.log('number cds ', currentItem.quantity)
                currentItem.totalSum = currentItem.price * currentItem.quantity
                console.log('price', currentItem.totalSum)
            }
        });
    }

    const context = {
        productOnCart: itemsSelected,
        totalProductOnCart: itemsSelected.length,
        totalPriceOnCart: 0,
        addProduct: addProductOnCartHandler,
        removeProduct: removeProductOnCartHandler,
        itemIsOnCart: itemIsProductOnCartHandler,
    };

    return (
        <StoreContext.Provider value={ context }>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContext;