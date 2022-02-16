import {useState} from "react";
import MyAPIServices from "../utils/api/services/MyAPIServices";

const Addition = () => {
    const [data, setData] = useState('')
    const [numOne, setNumOne] = useState(4)
    const [numTwo, setNumTwo] = useState(2)

    function fetchDataFromExternalApi() {
        MyAPIServices.addition(numOne, numTwo)
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => console.log(error))
    }

    function displayData() {
        if (data.length !== 0) {
            return <h3>Response from API: " {data} "</h3>
        }
    }

    return (
        <>
            <h1>Addition</h1>
            Enter your numbers: <input type="Number"
                                       value={numOne}
                                       onChange={event => setNumOne(event.target.value)}/>
            <input type="Number"
                   value={numTwo}
                   onChange={event => setNumTwo(event.target.value)}/>
            <button onClick={ () => fetchDataFromExternalApi()}>Make API call</button>
            { displayData() }
        </>
    )
}

export default Addition