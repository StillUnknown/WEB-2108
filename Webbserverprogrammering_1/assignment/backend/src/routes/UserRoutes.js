import UserController from '../controller/UserController.js'

// Endpoint + Business Logic and CRUD Operations
const routes = (app) => {
    // CREATE
    app.post('/createtask/', UserController.creatUser)

    // READ
    app.get('/alldata', UserController.getUsers)
    app.get('/getusernames/name', UserController.getUserNames)
    app.get('/getuserbyname/:name', UserController.getUserByName)

    // UPDATE
    app.put('/updatedatabyname/', UserController.updateUserByName)

    // DELETE
    app.delete('/deletedatabyname/:name', UserController.deleteUserByName)
}

export default {
    routes
}