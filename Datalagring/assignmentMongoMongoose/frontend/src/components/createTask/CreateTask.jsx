import TaskService from "../../utils/api/service/TaskService";
import {useState} from "react";
import css from './CreateTask.module.css'
import Card from "../card/Card";

const CreateTask = () => {
    const [data, setData] = useState({})
    const [task, setTask] = useState('')
    const [name, setName] = useState('')

    const sendDataToApi = () => {
        const newTask = {
            'task': task,
            'name': name,
            'isDone': false
        }
        TaskService.createTask(newTask)
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className={css.centerContent}>
                <h1 className={css.h1Style} data-testid='header'>Create Task</h1>
                Task: <input className={css.inputStyle} type="text"
                             value={task}
                             onChange={event => setTask(event.target.value)}/>
                <button className={css.buttonStyle} onClick={() => setTask([])}>Clear task</button>
                Name: <input className={css.inputStyle} type="text"
                             value={name}
                             onChange={event => setName(event.target.value)}/>
                <button className={css.buttonStyle} onClick={() => setName([])}>Clear name</button>
                <button className={css.buttonStyle} onClick={sendDataToApi}>CreateTask</button>
                {data.name ? <Card name={data.name}
                                   task={data.task}
                                   _id={data._id}/>
                    : ''}
            </div>
        </div>
    )
}

export default CreateTask