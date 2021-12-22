class Album {
    constructor(image, name, price, id) {
        this.image = image
        this.name = name
        this.price = price
        this.id = id
    }
}

let allAlbums = [
    new Album(
        "img/fifa2022.jpg",
        "FIFA Soccer 2022 - PC/PS",
        229,
        'One'
    ),
    new Album(
        "img/aoe4.jpg",
        "Age Of Empires IV - PC",
        259,
        'Two'
    ),
    new Album(
        "img/chivalry.jpg",
        "Chivalry All XPACK - PC",
        119,
        'Three'
    ),
    new Album(
        "img/forza.png",
        "Forza Horizon 4 - XBOX ONE",
        239,
        'Four'
    ),
    new Album(
        "img/wow.jpg",
        "World Of Warcraft - PC",
        219,
        'Five'
    ),
    new Album(
        "img/wot.jpg",
        "World Of Tanks - XBOX 360",
        289,
        'Six'
    ),
    new Album(
        "img/warplanes.jpg",
        "World Of Warplanes - PC",
        277,
        'Seven'
    ),
    new Album(
        "img/little.jpg",
        "Little Big Planet 3 - PS4",
        99,
        'Eight'
    )
]

function renderSingleAlbum(album) {
    return `
    <article id=album-cards>
        <img src=${album.image} alt=${album} class="img" id=${album}>
            <p>${album.name}</p>
            <p>${album.price} SEK</p>
            <button onclick="pushCardToCart('${album.image}', '${album.name}', '${album.price}', '${album.id}')">Buy</button>
    </article> `
}

let renderCardsToSite = "";

for (const album of allAlbums){
    renderCardsToSite += renderSingleAlbum(album)
}
document.getElementById('album-card-container').innerHTML = renderCardsToSite