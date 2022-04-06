import TaskService from "../../utils/api/service/TaskService";
import {useState} from 'react'
import css from './GetSingleTaskByName.module.css'
import CardList from '../CardList'

const GetTaskUsingName = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState('')

    const sendDataToApi = () => {
        TaskService.getTaskWithNameQuery(name)
            .then(response => {
                setData(response.data)
                console.log(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <div className={css.centerContent}>
                <h1 className={css.h1Style} data-testid='header'>Get Single Data By Name</h1>
                Name: <input className={css.inputStyle} type='text'
                             value={name}
                             onChange={event => setName(event.target.value)}/>
                <button className={css.buttonStyle} onClick={sendDataToApi}>Get Single Data By Name</button>
                <CardList task={data}/>
            </div>
        </>
    )
}

export default GetTaskUsingName