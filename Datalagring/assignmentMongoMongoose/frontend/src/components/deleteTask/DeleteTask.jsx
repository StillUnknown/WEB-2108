import TodoService from "../../utils/api/service/TaskService";
import {useState} from "react";
import css from './DeleteTask.module.css'


const DeleteTask = () => {
    const [data, setData] = useState('')
    const [id, setId] = useState('')

    const deleteTaskUsingId = () => {
        TodoService.deleteTask(id)
            .then(response => {
                setData(response.data.message)
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
                <button data-testid='deleteButton' className={css.buttonStyle} onClick={deleteTaskUsingId}>Delete Task
                </button>
                <p data-testid='DbResponse'>{data}</p>
            </div>
        </>
    )
}

export default DeleteTask