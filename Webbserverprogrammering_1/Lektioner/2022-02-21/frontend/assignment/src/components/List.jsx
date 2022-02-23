import {useState} from "react";
import MyAPIService from '../utils/api/MyAPIService.js'

const List = () => {
    const [data, setData] = useState([])

    function fetchDataFromExternalApi() {
        MyAPIServices.List()
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
            <h1>List</h1>
            <button onClick={() => fetchDataFromExternalApi()}>Make API Call</button>
            {displayData()}
        </>
    )
}

export default List