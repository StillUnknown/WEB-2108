import css from './ToDoList.module.css'
import {useState} from "react";
import UsersService from "../../utils/api/service/UsersService";
import CardList from "../CardList";


const ToDoList = () => {
    const [data, setData] = useState([])

    function fetchDataFromExternalApi() {
        UsersService.allData()
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <div className={css.centerContent}>
                <h1 data-testid='header'>ToDoList</h1>
                <input className={css.inputStyle} type="text"/>
                <button className={css.buttonStyle} onClick={fetchDataFromExternalApi}>Update</button>
                <CardList users={data}/>
            </div>
        </>
    )
}

export default ToDoList