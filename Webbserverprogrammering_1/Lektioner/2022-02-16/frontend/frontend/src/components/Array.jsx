import { useState } from "react";
import MyAPIServices from "../utils/api/services/MyAPIServices";

const Array = () => {
    const [data, setData] = useState('')
    const [array, setArray] = useState([])

    function fetchDataFromExternalApi() {
        MyAPIServices.array()
            .then( (response) => {
                setData(response.data)
            } )
            .catch( (error) => console.log(error) )
    }

    function displayData() {
        if (data.length !== 0) {
            return <h3>Response from API: "{ data }"</h3>
        }
    }

    return (
        <>
        <h1>Array</h1>
            <button onClick={ () => fetchDataFromExternalApi()}>Make API call</button>
            { displayData() }
        </>
    )
}

export default Array