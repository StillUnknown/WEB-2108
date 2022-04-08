import TaskService from "../../utils/api/service/TaskService";
import {useState} from 'react'
import css from './GetTaskUsingId.module.css'
import Card from "../card/Card";
import CardList from '../CardList'

const GetTaskUsingId = () => {
    const [oneTask, setOneTask] = useState([])
    const [_id, set_Id] = useState('')

    const getTaskWithId = () => {
        TaskService.getTaskById(_id)
            .then(response => {
                const emptyArray = []
                emptyArray.push(response.data)
                console.log(response.data)
                setOneTask(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <div className={css.centerContent}>
                <h1 className={css.h1Style} data-testid='header'>Get Single Task By Id</h1>
                Id: <input className={css.inputStyle} type='text'
                           value={_id}
                           onChange={event => set_Id(event.target.value)}/>
                <button className={css.buttonStyle} onClick={getTaskWithId}>Get Single Task By Id</button>
                {oneTask.name ? <Card name={oneTask.name}
                                      task={oneTask.task}
                                      _id={oneTask._id}/>
                    : <h3>{oneTask.error}</h3>}
            </div>
        </>
    )
}

export default GetTaskUsingId