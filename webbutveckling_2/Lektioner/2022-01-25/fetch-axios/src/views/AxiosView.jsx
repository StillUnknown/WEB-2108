import axios from "axios";
import {useEffect, useState} from "react";
import {JsonToTable} from "react-json-to-table";

const AxiosView = () => {
    const [data, setData] = useState([])

    function fetchDataFromExternalApi() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => console.log(error))

    }

    return (
        <>
            <h1>AxiosView</h1>
            <button onClick={ () => fetchDataFromExternalApi() }>Make API call</button>
            <button onClick={() => setData([])}>Reset</button>
            <JsonToTable json={data}/>
        </>
    );
};

export default AxiosView;