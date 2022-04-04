import StatusCode from "../configurations/StatusCode.js";

const alive = (req, res) => {
    res.status(StatusCode.OK).send(`API IS UP AND RUNNING`)
}

export default {
    alive
}