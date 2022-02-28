import css from './Card.module.css'
import {useState} from 'react'

const Card = ({name, task}) => {

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive)
    }


    return (
        <ul>
            <li className={isActive ? css.lineThrough : null} onClick={toggleClass}> {task} {name} </li>
        </ul>
    )
}

export default Card