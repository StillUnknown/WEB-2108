import {useEffect, useState} from "react";
import AliveService from '../utils/api/service/AliveService.js'

const Alive = () => {
    const [data, setData] = useState('')

    function checkIfAPIIsAlive() {
        AliveService.alive()
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => console.log(error))
    }

    useEffect( () => {
        checkIfAPIIsAlive()
    }, [])


    function displayData() {
        if (data.length !== 0) {
            return <h3>Response from API: "{data}"</h3>
        }
    }

    return (
        <>
            <h1>Alive</h1>
            {/*<button onClick={() => checkIfAPIIsAlive()}>Check if API is Alive</button> Choose not to use button but instead have a useEffect*/}
            {displayData()}
        </>
    )
}

export default Alive