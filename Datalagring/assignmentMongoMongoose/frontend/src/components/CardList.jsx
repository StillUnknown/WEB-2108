import Card from "./card/Card";

const CardList = ({tasks}) => {
    return (
        <ul>
            {
                tasks.map((task) => {
                    return (
                        <Card key={task._id}
                              _id={task._id}
                              name={task.name}
                              task={task.task}
                              isDone={task.isDone}/>
                    )
                })
            }
        </ul>
    )
}

export default CardList