import ToDoData from '../data/toDoData.js'

const creatUser = (req, res) => {
    const { task, name } = req.body
    const newObject = {
        task: task,
        name: name,
        id: ToDoData.length
    }
    ToDoData.push(newObject)
    res.status(201).send(ToDoData)
}

const getUsers = (req, res) => {
    res.status(200).send(ToDoData)
}

const userNames = () => {
    const names = []
    ToDoData.forEach(user => {
        names.push({
            name: user.name
        })
    })
    return names
}

const getUserNames = (req, res) => {
    const responseFromDb = userNames()
    res.status(200).send(responseFromDb)
}

const searchUserByName = (name) => {
    let object = `Could not find "${ name }" in database`
    ToDoData.forEach(user => {
        if (name === user.name) {
            object = user
            return user
        }
    })
    return object
}

const getUserByName = (req, res) => {
    const name = req.params.name
    const responseFromDb = searchUserByName(name)
    res.status(200).send(responseFromDb)
}

const modifyUserByName = (name, newName, task) => {
    let object = `Could not find "${ name }" in database`
    ToDoData.forEach(user => {
        if (name === user.name) {
            user.name = newName
            user.task = task
            object = user
            return user
        }
    })
    return object
}

const updateUserByName = (req, res) => {
    const { name, newName, task } = req.body
    const response = modifyUserByName(name, newName, task)
    res.status(202).send(response)
}

const removeUserByName = (name) => {
    let text = `User with name: "${ name }" `

    for (let i = 0; i < ToDoData.length; i++) {
        if (name === ToDoData[i].name) {
            text += `was deleted from database!`
            ToDoData.splice(i, 1)
            return text
        }
    }

    text += `don't exist in database!`
    return text
}

const deleteUserByName = (req, res) => {
    const name = req.params.name
    const responseFromDB = removeUserByName(name)
    res.status(200).send(responseFromDB)
}

export default {
    creatUser,
    getUsers,
    getUserNames,
    getUserByName,
    updateUserByName,
    deleteUserByName
}