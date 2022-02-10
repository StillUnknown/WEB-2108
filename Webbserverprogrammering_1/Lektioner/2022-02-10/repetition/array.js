// Addition
let a = 5
let b = 3
let c = a+b
console.log(c)

let numberOfAlbums = 4
let price = 124
let sum = numberOfAlbums * price
console.log('sum = ' + sum)

console.log('-------------------------------------')

// index [0, 1, 2] => length = 3
// album [2, 4, 5]

let albums = [2, 4, 5]
let price2 = [59, 29, 34]
let totalprice = albums[0] * price2[0]
console.log('index = 0 => ' + totalprice)

let chosenIndex = 1
totalprice = albums[chosenIndex] * price2[chosenIndex]
console.log('chosenIndex = 1 => ' + totalprice)

console.log(albums.sort())