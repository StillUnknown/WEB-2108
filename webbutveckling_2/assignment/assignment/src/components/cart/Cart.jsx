function Cart() {

    function closeCart() {
        document.getElementById('dropdown')
            .classList.toggle('show')
    }

    function purchaseAlert() {
        alert('Your purchase was denied you poor thing!')
    }
    return (
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
    )
}

export default Cart