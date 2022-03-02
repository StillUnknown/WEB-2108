import TaskData from '../data/taskData.js'

const createTask = (req, res) => {
    const { task, name } = req.body
    const newObject = {
        name: name,
        task: task,
        id: TaskData.length
    }
    TaskData.push(newObject)
    res.status(201).send(TaskData)
}

const allData = (req, res) => {
    res.status(200).send(TaskData)
}

const userNames = () => {
    const names = []
    TaskData.forEach(user => {
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
    TaskData.forEach(user => {
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
    TaskData.forEach(user => {
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

    for (let i = 0; i < TaskData.length; i++) {
        if (name === TaskData[i].name) {
            text += `was deleted from database!`
            TaskData.splice(i, 1)
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
    createTask,
    allData,
    getUserNames,
    getUserByName,
    updateUserByName,
    deleteUserByName
}