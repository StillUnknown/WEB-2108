import css from './Card.module.css'

const Card = ({name, task}) => {
    return (
        <ul>
            <li> {task} {name} </li>
        </ul>
    )
}

export default Card