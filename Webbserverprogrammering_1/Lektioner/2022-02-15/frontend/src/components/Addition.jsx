import {useState} from 'react'
import MyAPIService from '../utils/api/services/MyAPIService'

const Addition = () => {
    const [data, setData] = useState('')
    const [numOne, setNumOne] = useState('1')
    const [numTwo, setNumTwo] = useState('2')

    function fetchDataFromExternalApi() {
        MyAPIService.addition(numOne, numTwo)
            .then((response) => {
                console.log(response.data)
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
            Enter you numbers:<input type='text'
                                     value={numOne}
                                     onChange={event => setNumOne(event.target.value)}/>
            <input type='text'
                   value={numTwo}
                   onChange={event => setNumTwo(event.target.value)}/>
            <button onClick={() => fetchDataFromExternalApi()}>Make API call</button>
            {displayData()}
        </>
    )
}

export default Addition