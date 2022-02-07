import cart from '../../utils/img/shoppingcart.PNG'
import './Cart.css'

function Cart() {





    function purchaseAlert() {
        alert('Your purchase was denied you poor thing!')
    }

    return (
        <>
            <div className="header">
                <section className="dropdown">
                    <img src={cart} alt='cart' className='logo' onClick={}/>
                    <button className="dropdown-button" onClick={}>Open Cart
                    </button>
                    <section id="cart" className="dropdown-content">
                        <div>Cart Items</div>
                        <button onClick={}>Close</button>
                        <button onClick={purchaseAlert}>Checkout</button>
                    </section>
                </section>
            </div>
        </>
    )
}

export default Cart