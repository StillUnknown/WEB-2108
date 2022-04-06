import TaskService from "../../utils/api/service/TaskService";
import {useState} from "react";
import Card from "../card/Card";
import css from './UpdateTask.module.css'

const UpdateTask = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [task, setTask] = useState('')
    const [_id, set_Id] = useState('')

    const sendDataToApi = () => {
        const changedTask = {
            'name': name,
            'task': task,
        }
        TaskService.updateTask(_id, changedTask)
            .then(response => {
                setData(response.data)
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
                           value={_id}
                           onChange={event => set_Id(event.target.value)}/>
                Task: <input className={css.inputStyle}
                             type="text"
                             value={task}
                             onChange={event => setTask(event.target.value)}/>
                Name: <input className={css.inputStyle}
                             type="text"
                             value={name}
                             onChange={event => setName(event.target.value)}/>
                <button className={css.buttonStyle}
                        onClick={sendDataToApi}>
                    Update Task
                </button>
                {data.name ? <Card name={data.name}
                                   task={data.task}
                                   _id={data._id}/>
                    : <h3>{data}</h3>}
            </div>
        </>
    )
}

export default UpdateTask