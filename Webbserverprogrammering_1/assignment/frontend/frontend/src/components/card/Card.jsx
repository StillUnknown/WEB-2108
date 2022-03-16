import css from './Card.module.css'
import {useState} from 'react'
import TodoService from '../../utils/api/service/TodoService'

const Card = ({name, task, isDone, id}) => {

    const [isTaskDone, setIsTaskDone] = useState(isDone)

    function toggleDone() {
        TodoService.changeTaskIsDone(id)
            .then(response => {
                console.log(response.data)
                setIsTaskDone(response.data.isDone)
            }).catch(error => console.log(error))
    }

    return (
        <li className={isTaskDone ? css.lineThrough : null} onClick={toggleDone}> {task} {name} </li>
    )
}

export default Card