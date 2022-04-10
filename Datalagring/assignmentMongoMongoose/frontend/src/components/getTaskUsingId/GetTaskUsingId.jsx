import TaskService from "../../utils/api/service/TaskService";
import {useState} from 'react'
import css from './GetTaskUsingId.module.css'
import CardList from '../CardList'

const GetTaskUsingId = () => {
    const [oneTask, setOneTask] = useState([])
    const [_id, set_Id] = useState('')

    const getTaskWithId = () => {
        TaskService.getTaskById(_id)
            .then(response => {
                const dataArray = []
                dataArray.push(response.data)
                console.log(dataArray)
                setOneTask(dataArray)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <div className={css.centerContent}>
                <h1 className={css.h1Style} data-testid='header'>Get Task By Id</h1>
                Id: <input className={css.inputStyle} type='text'
                           value={_id}
                           onChange={event => set_Id(event.target.value)}/>
                <button className={css.buttonStyle} onClick={getTaskWithId}>Get Task By Id</button>
                { oneTask.length > 0 && oneTask[0].message
                ? <li>{oneTask[0].message}</li>
                : <CardList tasks={oneTask}/>}
            </div>
        </>
    )
}

export default GetTaskUsingId