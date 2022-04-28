import AliveService from "../utils/api/service/AliveService";
import { useEffect, useState } from "react";
import css from './Alive.module.css'

const Alive = () => {
    const [text, setText] = useState<string>('No connection to database')
    const [connected, setConnected] = useState<boolean>(false)

    const alive = () => {
        AliveService.apiConnectionStatus()
            .then(response => {
                setText(response.data)
                setConnected(true)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    useEffect(() => {
        alive()
    }, [])

    return (
        <article>
            <p className={ connected ? css.green : css.red }>{ text }</p>
        </article>
    )
}

export default Alive