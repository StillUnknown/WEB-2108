import TaskService from "../../utils/api/service/TaskService";
import {useState} from "react";
import css from './UpdateTask.module.css'
import CardList from '../CardList'

const UpdateTask = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [task, setTask] = useState('')
    const [id, setId] = useState('')

    const sendDataToApi = () => {
        const changedTask = {
            'name': name,
            'task': task,
        }
        TaskService.updateTask(id, changedTask)
            .then(response => {
                const dataArray = []
                dataArray.push(response.data)
                console.log(dataArray)
                setData(dataArray)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <div className={css.centerContent}>
                <h1 className={css.h1Style} data-testid='header'>Update Task</h1>
                <p className={css.pStyle}>You can change both task and name individually but to change only task you
                    have to type current name in both current name and assign new name</p>
                Id: <input className={css.inputStyle}
                           type="text"
                           value={id}
                           onChange={event => setId(event.target.value)}/>
                <button className={css.buttonStyle} onClick={() => setId([])}>Clear id</button>
                Task: <input className={css.inputStyle}
                             type="text"
                             value={task}
                             onChange={event => setTask(event.target.value)}/>
                <button className={css.buttonStyle} onClick={() => setTask([])}>Clear task</button>
                Name: <input className={css.inputStyle}
                             type="text"
                             value={name}
                             onChange={event => setName(event.target.value)}/>
                <button className={css.buttonStyle} onClick={() => setName([])}>Clear name</button>
                <button className={css.buttonStyle}
                        onClick={sendDataToApi}>
                    Update Task
                </button>
                {data.length > 0 && data[0].message
                    ? <ul>{data[0].message}</ul>
                    : <CardList tasks={data}/>}
            </div>
        </>
    )
}

export default UpdateTask