import css from './Card.module.css'
import { useState } from 'react'
import TaskService from "../../utils/api/service/TaskService";

const Card = ({ name, task, isDone, _id }) => {
    const [isTaskDone, setIsTaskDone] = useState(isDone)

    const toggleIsDone = () => {
        TaskService.toggleTaskDone(_id)
            .then(response => {
                console.log(response.data)
                setIsTaskDone(response.data.isDone)
            })
            .catch (error => console.log(error))
    }

    return (
        <li className={ isTaskDone ? css.lineThrough : null } onClick={toggleIsDone}> {task} {name} </li>
    )
}

export default Card