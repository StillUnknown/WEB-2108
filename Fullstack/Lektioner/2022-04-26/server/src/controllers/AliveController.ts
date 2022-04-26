import StatusCode from "../utils/StatusCode";
import { Request, Response } from 'express'

const alive = (req: Request, res: Response) => {
    res.status(StatusCode.OK).send('Connected to typescript API')
}

export default {
    alive
}