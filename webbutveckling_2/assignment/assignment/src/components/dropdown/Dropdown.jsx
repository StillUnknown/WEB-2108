import cart from '../../utils/img/shoppingcart.PNG'
import './Dropdown..css'

function Dropdown() {

    function openCart() {
        document.getElementById('dropdown')
            .classList.toggle('show')
    }

    function closeCart() {
        document.getElementById('dropdown')
            .classList.toggle('show', false)
    }

    function purchaseAlert() {
        alert('Your purchase was denied you poor thing!')
    }

    return (
        <>
            <div className="header">
                <section className="dropdown">
                    <img src={cart} alt='cart' onClick={openCart}/>
                    <button className="dropdown-button" onClick={openCart}>Open Cart
                    </button>
                    <section id="dropdown" className="dropdown-content">
                        <p>Cart</p>
                        <section id="cards-in-cart">
                        </section>
                        <section id="total-sum-of-cart">
                        </section>
                        <section id="total-quantity-in-cart">
                        </section>
                        <section id="cost-of-shipping">
                        </section>
                        <section>
                            <button onClick={closeCart}>Close</button>
                            <button onClick={purchaseAlert}>Checkout</button>
                        </section>
                    </section>
                </section>
            </div>
        </>
    )
}

export default Dropdown