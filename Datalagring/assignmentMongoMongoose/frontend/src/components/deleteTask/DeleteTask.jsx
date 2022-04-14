import TodoService from "../../utils/api/service/TaskService";
import {useState} from "react";
import css from './DeleteTask.module.css'


const DeleteTask = () => {
    const [data, setData] = useState('')
    const [id, setId] = useState('6257d7e9d561ff454c5a433f') //Hardcoded because test

    const deleteTaskUsingId = () => {
        TodoService.deleteTask(id)
            .then(response => {
                setData(response.data)
                console.log(response.data)
            })
            .catch(error => {
                setData(error.response.data.message)
            })
    }

    return (
        <>
            <div className={css.centerContent}>
                <h1 className={css.h1Style}>Delete Task</h1>
                Id: <input data-testid='dataInput' className={css.inputStyle} type="text"
                           value={id}
                           onChange={event => setId(event.target.value)}/>
                <button className={css.buttonStyle} onClick={() => setId([])}>Clear id</button>
                <button data-testid='deleteButton' className={css.buttonStyle} onClick={deleteTaskUsingId}>Delete Task
                </button>
                <p data-testid='dbResponse'>{data}</p>
            </div>
        </>
    )
}

export default DeleteTask