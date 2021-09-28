if (true) {
    console.log(true)
}

if (false) {
    console.log('false')
}

if(!true) {
    console.log('true')
}

if (!false) {
    console.log('!false')
}

let isTrue = false;
if (isTrue) {
    console.log('isTrue')
}
if (!isTrue) {
    console.log('isNotTrue')
}

console.log('-----------------------------------')

console.log('|| OR')

if (true || false) {
    console.log('true || false')
}

if (false || true) {
    console.log('false || true')
}

if (true || true) {
    console.log('true || true')
}

if (false || false) {
    console.log('false || false')
}

console.log('-----------------------------------')
console.log('&& AND')

if (true && false) {
    console.log('true && false')
}

if (false && true) {
    console.log('false && true')
}

if (true && true) {
    console.log('true && true')
}

if (false && false) {
    console.log('false && false')
}

let name = 'christoffer'
if (name === 'Christoffer' || name === 'Aram') {
    console.log('Evaluation Success')
} else {
    console.log('Evaluation Failed')
    console.log('Nothing Is True')
}

if (name.toLowerCase() === 'Christoffer'.toLowerCase() ||
    name.toLowerCase() === 'Aram'.toLowerCase()) {
    console.log('Evaluation Success With .toLowerCase()')
} else {
    console.log('Evaluation Failed')
    console.log('Nothing Is True')
}
