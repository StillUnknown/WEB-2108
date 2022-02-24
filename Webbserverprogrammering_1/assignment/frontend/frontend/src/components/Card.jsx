import css from './Card.module.css'

const Card = ({ name, task }) => {
    return (
        <ul>
            <li>Name: { name } <span className={css.spanSpace}></span>  Task: { task }</li>
        </ul>
    )
}

export default Card