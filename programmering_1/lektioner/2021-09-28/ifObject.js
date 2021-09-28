let users = [
    {
        name: 'Christoffer',
        age: 36,
    },
    {
        name: 'Aram',
        age: 26,
    },
    {
        name: 'Lars',
        ag: 16,
    }
]

if (users[1].name.toLocaleString() === 'aRaM'.toLowerCase()) {
    console.log('Success')
} else {
    console.log('Failure')
}

for (let i = 0; i < users.length; i++) {
    if (users[i].name.toLocaleString() === 'aRaM'.toLowerCase()) {
        console.log('Success at index =', i)
        break
    } else {
        console.log('Failure')
    }
}