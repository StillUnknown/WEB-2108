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
                <h1 className={css.h1Style} data-testid='header'>ToDoList</h1>
                <h3 className={css.h3Style}>Click the button to always get the most updated ToDoList</h3>
                <button className={css.buttonStyle} onClick={fetchDataFromExternalApi}>Update</button>
                <CardList users={data}/>
            </div>
        </>
    )
}

export default ToDoList