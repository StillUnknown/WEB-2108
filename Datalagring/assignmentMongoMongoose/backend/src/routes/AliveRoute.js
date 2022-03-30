import AliveController from "../controller/AliveController.js";

// Endpoint + Business Logic
const aliveRoute = (app) => {
    app.get('/', AliveController.alive)
}

export default {
    aliveRoute
}