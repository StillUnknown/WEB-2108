import css from './Card.module.css'
import {useState} from 'react'
import TodoService from '../../utils/api/service/TodoService'

const Card = ({name, task, isDone, id}) => {

    const [isActive, setActive] = useState(false);
    const [isTaskDone, setIsTaskDone] = useState(isDone)

    const toggleClass = () => {
        setActive(!isActive)
    }

    function toggleDone() {
        TodoService.changeTaskIsDone(id)
            .then(response => {
                console.log(response.data)
                setIsTaskDone(response.data)
            }).catch(error => console.log(error))
    }

    return (
        <ul className={isTaskDone ? css.lineThrough : null} onClick={toggleDone}>
            <li className={isActive ? css.lineThrough : null} onClick={toggleClass}> {task} {name} </li>
        </ul>
    )
}

export default Card