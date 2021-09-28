let string = 'sträng'
let number = 5
let boolean = false

let car1 = "Volvo"
let car2 = "Saab"
let car3 = "Polstar"

console.log(car1)
console.log(car2)
console.log(car3)
console.log(car1, car2, car3)

let carNames = ['Audi', 'VW', 'Peugeot']
console.log('Arrayen carNames=', carNames)
console.log('index=0', carNames[0])
console.log('index=1', carNames[1])
console.log('index=2', carNames[2])
console.log(carNames[0], carNames[1], carNames[2])

for (let index = 0; index < 3; index++) {
    // console.log('index=', index, index < 3)
    console.log('index=', index, carNames[index])
    // console.log('index=', index)
}

let personArray = ['John', 'Smith', 50, true]
console.log(personArray)
console.log(typeof (personArray))
console.log(personArray[0])

// scoop = {} = Avgränsning
let personObject = {
    firstName: 'John',
    lastName: 'Smith',
    age: 50,
    isMale: true
}

console.log(personObject)
console.log(typeof (personObject))
console.log(personObject.firstName)
console.log('----------------------------')

let p1 = {
    firstName: 'Adam',
    age: 20
}
let p2 = {
    firstName: 'Bengtina',
    age: 22
}
console.log(p1)
console.log(p2)
console.log(p1.firstName)
console.log(p2.firstName)

let persons = [
    {
        firstName: 'Adam',
        age: 20
    },
    {
        firstName: 'Bengtina',
        age: 22
    }
]
console.log('persons:', persons)
console.log(persons[0])
console.log(persons[0].firstName)

for (let i = 0; i < persons.length; i++) {
    console.log('i=', i, persons[i])
}