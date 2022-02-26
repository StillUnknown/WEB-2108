import UsersService from "../../utils/api/service/UsersService";
import {useState} from "react";
import Card from "../Card";
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
        UsersService.updateDataByName(changedData)
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <div className={css.centerContent}>
                <h1>Update Data</h1>
                Task: <input className={css.inputStyle} type="text" value={task} onChange={event => setTask(event.target.value)}/>
                Name: <input className={css.inputStyle} type="text" value={name} onChange={event => setName(event.target.value)}/>
                NewName: <input className={css.inputStyle} type="text" value={newName} onChange={event => setNewName(event.target.value)}/>
                <button className={css.buttonStyle} onClick={sendDataToApi}>Update Data</button>
                {data.name ? <Card name={data.name}
                                   task={data.task}/>
                    : <h3>{data}</h3>}
            </div>
        </>
    )
}

export default UpdateData