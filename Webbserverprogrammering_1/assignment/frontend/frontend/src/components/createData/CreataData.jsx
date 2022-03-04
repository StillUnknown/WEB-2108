import UsersService from '../../utils/api/service/UsersService'
import {useState} from 'react'
import css from './CreateData.module.css'
import Card from "../card/Card";

const CreataData = () => {
    const [data, setData] = useState({})
    const [task, setTask] = useState('')
    const [name, setName] = useState('')

    const sendDataToApi = () => {
        const newData = {
            'task': task,
            'name': name
        }
        UsersService.createTaskData(newData)
            .then(response => {
                console.log(response.data)
                setData(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <div className={css.centerContent}>
                <h1 data-testid='header'>CreateData</h1>
                Task: <input className={css.inputStyle} type="text"
                             value={task}
                             onChange={event => setTask(event.target.value)}/>
                Name: <input className={css.inputStyle} type="text"
                             value={name}
                             onChange={event => setName(event.target.value)}/>
                <button className={css.buttonStyle} onClick={sendDataToApi}>CreateData</button>
                {data.name ? <Card name={data.name}
                                   task={data.task}/>
                    : ''}
            </div>
        </>
    )
}

export default CreataData
