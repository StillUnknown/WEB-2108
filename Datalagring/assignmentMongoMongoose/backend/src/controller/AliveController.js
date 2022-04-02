import StatusCode from "../configurations/StatusCode.js";

const alive = (req, res) => {
    res.status(StatusCode.OK).send(`EVERYONE WHO READS THIS IS GAY and btw, API IS ALIVE`)
}

export default {
    alive
}