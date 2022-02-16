import {useState} from 'react'
import MyAPIServices from "../utils/api/services/MyAPIServices";

const Name = () => {
    const [data, setData] = useState('')
    const [yourName, setYourName] = useState('Christoffer')

    function fetchDataFromExternalApi() {
        MyAPIServices.name(yourName)
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
            <h1>Name</h1>
            Enter your name:<input type="text"
                                   value={yourName}
                                   onChange={event => setYourName(event.target.value)}/>
            <button onClick={() => fetchDataFromExternalApi()}>Make API call</button>
            { displayData() }
        </>
    )
}

export default Name