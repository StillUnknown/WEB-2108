// Structure in cart
class AlbumToCart {
    constructor(image, name, price, id) {
        this.image = image
        this.name = name
        this.price = price
        this.id = id
        this.quantity = 1
        this.totalSum = price
    }
}

let renderCardsToCart = [] // Empty cart
let totalSumOfCart = 0 // Total sum of cart
let quantityInCart = 0 // Quantity in cart

//Updates albums quantity in cart
function pushCardToCart(image, name, price, id) {
    let exist = updateAlbumInCart(id);

// Adds the album to cart if it didn't already exist
    if (exist === false) {
        let newAlbum = new AlbumToCart(image, name, price, id)
        renderCardsToCart.push(newAlbum)
    }
    renderCart()
}

// Render albums from htmlpage via buttonloop with info
function renderCart() {
    let renderCartAlbums = [];
    for (const album of renderCardsToCart) {
        renderCartAlbums.push(renderSingleAlbumToCart(album))
    }

    document.getElementById('cards-in-cart').innerHTML = renderCartAlbums

    calculateTotalSumInCart()
    calculateShipping()
    calculateTotalQuantityInCart()
}

// Render album and it's structure in cart
function renderSingleAlbumToCart(album) {
    return `
    <article id="album-cards${album.id}">
            <img src=${album.image} alt=${album.name} class="img-in-cart" id=${album.image}>
            <p>${album.name}</p>
            <p>Price: ${album.price} SEK</p>
            <input id="album-quantity${album.id}" type="number" onclick="addOrSubtractViaInputButtons('${album.id}')" value="${album.quantity}"/>
            <p id="totalSum${album.id}">Total: ${album.totalSum} SEK</p>
    </article>
 `;
}

// Totalsum of cart
function showTotalSum(totalSum) {
    return `
    <article id="total-sum-of-cart">
            <p>Totalprice: ${totalSum} SEK</p>
    </article> 
 `;
}

// Total quantity in cart
function showTotalQuantity(quantity) {
    return `
    <article id="total-quantity-in-cart">
            <p>Quantity: ${quantity}</p>
    </article> 
 `;
}

// Adds the shippingtext to cart
function showShippingCost(shippingText) {
    return `
    <article id="cost-of-shipping">
            <p>${shippingText}</p>
    </article> 
 `;
}

// Opens cart via onClick
function openCart() {
    document.getElementById('dropdown')
        .classList.toggle('show')
}

// Closes cart via onClick
function closeCart() {
    document.getElementById('dropdown')
        .classList.toggle('show', false)
}

// If album already exist in cart, update quantity
function updateAlbumInCart(id) {
    let existInCart = false
    for (const album of renderCardsToCart) {
        if (album.id === id) {
            album.quantity += 1
            album.totalSum = album.price * album.quantity;
            existInCart = true;
        }
    }
    return existInCart
}

// Updates the totalsum of cart
function updateAlbumInCartWithNewValue(id, newValue) {
    let totalSumOfAlbum = 0
    for (const album of renderCardsToCart) {
        if (album.id === id) {
            album.quantity = newValue
            album.totalSum = album.price * album.quantity;
            totalSumOfAlbum =  album.totalSum;
        }
    }
    return totalSumOfAlbum
}

// Totalsum of the cart
function calculateTotalSumInCart() {
    totalSumOfCart = 0

    for (const album of renderCardsToCart) {
        totalSumOfCart += parseInt(album.totalSum)
    }
    document.getElementById('total-sum-of-cart').innerHTML = showTotalSum(totalSumOfCart)
}

// Shippingcost with text for smaller amount and equal or larger then shippingcost
function calculateShipping() {
    let costToFreeFreight = 650 - totalSumOfCart;
    let costText = ""


    if (costToFreeFreight <= 0) {
        costText = "You now have free shipping"
    } else {
        costText = "You need " + costToFreeFreight +  " SEK for free shipping"
    }

    document.getElementById('cost-of-shipping').innerHTML = showShippingCost(costText)
}

// Calculates the quantity of cart
function calculateTotalQuantityInCart() {
    quantityInCart = 0

    for (const album of renderCardsToCart) {
        quantityInCart += parseInt(album.quantity)
    }

    document.getElementById('total-quantity-in-cart').innerHTML = showTotalQuantity(quantityInCart)
}

// Add or subtract via the inputbuttons
function addOrSubtractViaInputButtons(id) {
    // Shows the quantity
    let newValue = document.getElementById("album-quantity" + id).value;

    // Deletes an album if input is reduced to zero
    if (parseInt(newValue) <= 0) {
        for (let i = 0; i < renderCardsToCart.length; i++) {
            if (renderCardsToCart[i].id === id) {
                renderCardsToCart.splice(i, 1);
                document.getElementById("album-cards" + id).remove()
            }
        }
    }
    // Total sum of individual albums in cart
    else {
        let totalSum = updateAlbumInCartWithNewValue(id, newValue)
        if(!!totalSum) {
            document.getElementById("totalSum" + id).innerText = "Total: " + totalSum + "SEK";
        }
    }
// Calculates the value of cart.
    calculateTotalSumInCart()
    calculateShipping()
    calculateTotalQuantityInCart()
}

// Is global because we want the cart to always be shown when we click cartbutton
renderCart()