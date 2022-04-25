class Animal {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    print() {
        console.log(`name: ${this.name} : age: ${this.age}`)
    }
}

const duck: Animal = new Animal('Bob', 11)
duck.print()

interface IUsers {
    id: number,
    name: string,
    age: number
}

const users: IUsers[] = [
    {
        id: 1,
        name: 'Lana Del Rey',
        age: 35,
    },
    {
        id: 2,
        name: 'Bob Dylan',
        age: 80,
    },
    {
        id: 3,
        name: 'Thåström',
        age: 55,
    },
];

const logger = (user: IUsers): void =>
    console.log(`Id: ${user.id} - Name: ${user.name} - Age: ${user.age}`);

users.forEach(logger);

const logger1 = ( message: string,): void => console.log(message)
logger1('hej hej')