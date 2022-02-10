let inventory = [
    {
        bookName: 'bok 1',
        price: 49,
        availability: 10,
        buyAmount: 0
    },
    {
        bookName: 'bok 2',
        price: 79,
        availability: 10,
        buyAmount: 0
    },
    {
        bookName: 'bok 3',
        price: 29,
        availability: 10,
        buyAmount: 0
    },
]

function printInventory() {
    inventory.forEach(item => {
        console.log(`${item.bookName}, ${item.availability}, ${item.buyAmount} i kundkorgen`)
    })
}
printInventory()

function multiplyBooksWithPrice(index) {
    return inventory[index].buyAmount * inventory[index].price
}
console.log(multiplyBooksWithPrice(0))
