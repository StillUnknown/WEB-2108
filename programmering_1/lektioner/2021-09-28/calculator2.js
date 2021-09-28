let number1 = 2
let number2 = number1 * 2

function addition() {
    return number1 + number2
}


let sum = addition()
console.log('sum=', sum)
console.log('addition=', addition())

function subtraction() {
    return number1 - number2
}
console.log('subtraction', subtraction())

function multiplication() {
    return number1 * number2
}
console.log('Multiplication=', multiplication())

function division() {
    return number1 / number2
}
console.log('Division=', division())

console.log('---------------------------------')

function addTwoNumbers(num1, num2) {
    return num1 + num2
}
console.log('addTwoNumbers=', addTwoNumbers(3, 4))

function subtractTwoNumbers(num1, num2) {
    return num1 - num2
}
console.log('subtractTwoNumbers=', subtractTwoNumbers(3, 4))

function multiplyTwoNumberg(num1, num2) {
    return num1 * num2
}
console.log('multiplyTwoNumbers=', multiplyTwoNumberg(3, 4))

function divideTwoNumbers(num1, num2) {
    return num1 / num2
}
console.log('devideTwoNumbers', divideTwoNumbers(3, 4))

console.log('------------------------------------------------------')