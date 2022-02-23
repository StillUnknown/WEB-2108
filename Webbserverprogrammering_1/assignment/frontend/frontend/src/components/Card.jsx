const Card = ({ task, name }) => {
    return (
        <article>
            <ul>
                <li>{ task }</li>
                <li>{ name }</li>
            </ul>
        </article>
    )
}

export default Card