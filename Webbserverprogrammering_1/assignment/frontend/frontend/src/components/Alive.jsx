import {useState} from "react";
import MyAPIServices from '../utils/api/MyAPIService.js'

const Alive = () => {
    const [data, setData] = useState('')

    function fetchDataFromExternalApi() {
        MyAPIServices.Alive()
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => console.log(error))
    }


    function displayData() {
        if (data.length !== 0) {
            return <h3>Response from API: "{data}"</h3>
        }
    }

    return (
        <>
            <h1>Alive</h1>
            <button onClick={() => fetchDataFromExternalApi()}>Make API call</button>
            {displayData()}
        </>
    )
}

export default Alive