import TodoService from "../../utils/api/service/TaskService";
import {useState} from "react";
import css from './DeleteTask.module.css'
import CardList from '../CardList'

const DeleteTask = () => {
    const [data, setData] = useState('')
    const [_id, set_Id] = useState('')

    const deleteTaskUsingId = () => {
        TodoService.deleteTask(_id)
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
                           value={_id}
                           onChange={event => set_Id(event.target.value)}/>
                <button data-testid='deleteButton' className={css.buttonStyle} onClick={deleteTaskUsingId}>Delete Task
                </button>
                <h3 data-testid='DbResponse'>{data}</h3>
            </div>
        </>
    )
}

export default DeleteTask