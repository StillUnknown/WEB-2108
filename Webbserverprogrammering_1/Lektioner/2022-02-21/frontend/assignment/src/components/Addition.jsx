import {useState} from "react";
import MyAPIServices from "../utils/api/services/MyAPIServices";

const Addition = () => {
    const [data, setData] = useState('')
    const [numOne, setNumOne] = useState('5')
    const [numTwo, setNumTwo] = useState('2')

    function fetchDataFromExternalApi() {
        MyAPIServices.Addition(numOne, numTwo)
            .then(response => {
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
            <h1>Addition</h1>
            <input type="number"
                   value={numOne}
                   onChange={event => setNumOne(event.target.value)}/>
            <span> + </span>
            <input type="number"
                   value={numTwo}
                   onChange={event => setNumTwo(event.target.value)}/>
            <button onClick={ () => fetchDataFromExternalApi()}>Make API Call</button>
            {displayData()}
        </>
    )
}

export default Addition