import TodoService from "../../utils/api/service/TodoService";
import {useState} from "react";
import Card from "../card/Card";
import css from './UpdateData.module.css'

const UpdateData = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [newName, setNewName] = useState('')
    const [task, setTask] = useState('')

    const sendDataToApi = () => {
        const changedData = {
            'name': name,
            'newName': newName,
            'task': task
        }
        TodoService.updateDataByName(changedData)
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <div className={css.centerContent}>
                <h1 className={css.h1Style} data-testid='header'>Update Data</h1>
                <p className={css.pStyle}>You can change both task and name individually but to change only task you have to type current name in both current name and assign new name</p>
                Task: <input className={css.inputStyle}
                             type="text"
                             value={task}
                             onChange={event => setTask(event.target.value)}/>
                Current name: <input className={css.inputStyle}
                                     type="text"
                                     value={name}
                                     onChange={event => setName(event.target.value)}/>
                Assign new name: <input className={css.inputStyle}
                                        type="text"
                                        value={newName}
                                        onChange={event => setNewName(event.target.value)}/>
                <button className={css.buttonStyle}
                        onClick={sendDataToApi}>
                    Update Data
                </button>
                {data.name ? <Card name={data.name}
                                   task={data.task}/>
                    : <h3>{data}</h3>}
            </div>
        </>
    )
}

export default UpdateData