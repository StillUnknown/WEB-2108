import AliveController from '../controllers/AliveController.js'

const routes = (app) => {
    app.get('/', AliveController.alive)
}

export default {
    routes
}