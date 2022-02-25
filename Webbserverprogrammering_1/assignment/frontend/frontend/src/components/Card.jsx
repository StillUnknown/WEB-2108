import css from './Card.module.css'

const Card = ({ name, task }) => {
    return (
        <article>
                <p> { task } { name } </p>
        </article>
    )
}

export default Card