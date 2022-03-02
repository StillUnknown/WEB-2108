import UsersService from '../../utils/api/service/UsersService'
import {useState} from 'react'
import CardList from '../CardList'
import css from './CreateData.module.css'

const CreataData = () => {
    const [data, setData] = useState([])
    const [task, setTask] = useState('')
    const [name, setName] = useState('')

    const sendDataToApi = () => {
        const newData = {
            'task': task,
            'name': name
        }
        UsersService.createTaskData(newData)
            .then(response => {
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
                <CardList users={data}/>
            </div>
        </>
    )
}

export default CreataData
