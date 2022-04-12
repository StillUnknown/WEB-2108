import css from './Card.module.css'
import {useState} from 'react'
import TaskService from '../../utils/api/service/TaskService'


const Card = ({task, name, _id, isDone}) => {

    const [isTaskDone, setIsTaskDone] = useState(isDone)

    function toggleDone() {
        const payload = {
            newTaskStatus : !isTaskDone
        }
        TaskService.toggleTaskDone(_id, payload)
            .then(response => {
                console.log(response.data)
                setIsTaskDone(response.data)
            }).catch(error => console.log(error))
    }

    return (
        <li className={isTaskDone ? css.lineThrough : null} onClick={toggleDone}><b>Task:</b> {task} <b> Name:</b> {name} <b>Id:</b> {_id} </li>
    )
}

export default Card