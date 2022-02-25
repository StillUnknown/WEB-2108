import UsersService from '../utils/api/service/UsersService'
import {useState} from 'react'
import CardList from './CardList'

const CreataData = () => {
    const [data, setData] = useState([])
    const [task, setTask] = useState('Carina')
    const [name, setName] = useState(19)

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
            <h1>CreateData</h1>
            <input type="text"
                   value={task}
                   onChange={event => setTask(event.target.value)}/>
            <input type="text"
                   value={name}
                   onChange={event => setName(event.target.value)}/>
            <button onClick={ sendDataToApi }>CreateData</button>
            <CardList/>
        </>
    )
}

export default CreataData
