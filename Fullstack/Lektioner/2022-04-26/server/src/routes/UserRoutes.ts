import { Express } from 'express'
import UserController from '../controllers/UserController'

const UserRoutes = (server: Express) => {
    server.post('/user/', UserController.createUser)
    server.get('/user/all', UserController.getAllUsers)
    server.get('/user/name/:name', UserController.getUserByName)
    server.get('/user/name/:name/:gender', UserController.getUserByNameAndGender)
    server.get('/user/:id', UserController.getUserById)
    server.put('/user/:id', UserController.updateUserById)
    server.delete('/user/:id', UserController.deleteUserById)
}

export default UserRoutes