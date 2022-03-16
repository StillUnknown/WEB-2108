import TodoController from '../controller/TodoController.js'

// Endpoint + Business Logic and CRUD Operations
const routes = (app) => {
    // CREATE
    app.post('/createtask/', TodoController.createTask)

    // READ
    app.get('/alldata/', TodoController.allData)
    app.get('/getusernames/name', TodoController.getUserNames)
    app.get('/getuserbyname/:name', TodoController.getUserByName)

    // UPDATE
    app.put('/updatedatabyname/', TodoController.updateUserByName)
    app.put('/changetaskisdone/:id', TodoController.toggleTaskDone)

    // DELETE
    app.delete('/deletedatabyname/:name', TodoController.deleteUserByName)
}

export default {
    routes
}