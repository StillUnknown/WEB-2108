console.log('ChristmasTree with an array inside of loop')

for (let i = 0; i < 6; i++) {
    let tree = ['   *   ', '  ***  ', ' ***** ', '*******', '   *   ', '   *   ']
    console.log(tree[i])
}

console.log('--------------------------------------------------------')

console.log('ChristmasTree pyramid')

let j = 10
    for (let i = 2; i < j + 2; i++) {
    console.log(" ".repeat(j + 2 - i) + "*".repeat((i - 2) + (i - 1)));
    }

