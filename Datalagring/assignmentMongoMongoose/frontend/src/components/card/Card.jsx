const Card = ({task, name, _id, isDone}) => {

    return (
        <li><b>Task:</b> {task} <b> Name:</b> {name} <b>Id:</b> {_id} </li>
    )
}

export default Card