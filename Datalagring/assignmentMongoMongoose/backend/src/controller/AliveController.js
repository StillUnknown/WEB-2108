import StatusCode from "../configurations/StatusCode.js";

const alive = (req, res) => {
    res.status(StatusCode.OK).send(`Yo, this shit is up and running`)
}

export default {
    alive
}