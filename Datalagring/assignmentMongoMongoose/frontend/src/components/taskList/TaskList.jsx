import css from './TaskList.module.css'
import { useState } from 'react'
import TaskService from "../../utils/api/service/TaskService";
import CardList from "../CardList";

const TaskList = () => {
    const [data, setData] = useState([])

    const fetchDataFromBackend = () => {
        TaskService.getAllTasks()
            .then(response => {
                setData(response.data)
            })
            .catch (error => console.log(error))
    }
    console.log(data)
    return (
        <>
            <div className={css.centerContent}>
                <h1 className={css.h1Style} data-testid='header'>TaskList</h1>
                <h3 className={css.h3Style}>Click the button to get the most updated TaskList</h3>
                <button className={css.buttonStyle} onClick={fetchDataFromBackend}>Update</button>
                <CardList tasks={data}/>
                <button className={css.buttonStyle} onClick={() => setData([])}>Close tasklist</button>
            </div>
        </>
    )
}

export default TaskList