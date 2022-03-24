const mongoose = require('mongoose')
main().catch(error => console.log(error))

async function main() {
    await mongoose.connect('mongodb://localhost:27017/test')
}

console.clear()
console.log('Hello World')

const kittySchema = new mongoose.Schema({
    name: String
})

kittySchema.methods.speak = function speak() {
    const greeting = this.name
        ? 'Meow name is ' + this.name
        : 'I dont have a name';
    console.log(greeting)
}

const Kitten = mongoose.model('Kitten', kittySchema)


const silence = new Kitten({name: 'Silence'})
silence.speak()

const fluffy = new Kitten({name: 'fluffy'})
fluffy.speak()