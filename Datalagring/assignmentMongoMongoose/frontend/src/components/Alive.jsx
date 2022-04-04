import { useEffect, useState } from "react";
import AliveService from "../utils/api/service/AliveService.js";

const Alive = () => {
    const [data, setData] = useState('')

    const checkIfApiIsAlive = () => {
        AliveService.alive()
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => console.log(error))
    }

    useEffect( () => {
        checkIfApiIsAlive()
    }, [])

    const displayData = () => {
        if (data.length !== 0) {
            return <h3>Response from API: "{ data }"</h3>
        }
    }

    return (
        <>
            <h1>Alive</h1>
            { displayData() }
        </>
    )
}

export default Alive