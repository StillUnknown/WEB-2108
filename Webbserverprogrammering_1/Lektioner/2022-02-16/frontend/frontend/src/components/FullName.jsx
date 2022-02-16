import {useState} from "react";
import MyAPIServices from "../utils/api/services/MyAPIServices";

const FullName = () => {
    const [data, setData] = useState('')
    const [firstName, setFirstName] = useState('Christoffer')
    const [lastName, setLastName] = useState('Knaving')

    function fetchDataFromExternalApi() {
        MyAPIServices.fullName(firstName, lastName)
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => console.log(error))
    }

    function displayData() {
        if (data.length !== 0) {
            return <h3>Response from API: "{data}" </h3>
        }
    }

    return (
        <>
            <h1>FullName</h1>
            Enter your name here:
            <input type="text"
                   value={firstName}
                   onChange={event => setFirstName(event.target.value)}/>
            <input type="text"
                   value={lastName}
                   onChange={event => setLastName(event.target.value)}/>
            <button onClick={ () => fetchDataFromExternalApi() }>Make API Call</button>
            { displayData() }
        </>
    )
}

export default FullName