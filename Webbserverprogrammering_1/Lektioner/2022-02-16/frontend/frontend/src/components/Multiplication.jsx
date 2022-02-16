import {useState} from "react";
import MyAPIServices from "../utils/api/services/MyAPIServices";

const Multiplication = () => {
    const [data, setData] = useState('')
    const [numOne, setNumOne] = useState(5)
    const [numTwo, setNumTwo] = useState(5)

    function fetchDataFromExternalApi() {
        MyAPIServices.multiplication(numOne, numTwo)
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
            <h1>Multiplication</h1>
            Enter your numbers here:
            <input type="Number"
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

export default Multiplication