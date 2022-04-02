import Card from "./card/Card";

const CardList = ({task}) => {
    return (
        <ul>
            {
                task.map((item) => {
                    return (
                        <Card key={item.id}
                              id={item.id}
                              name={item.name}
                              task={item.task}
                              isDone={item.isDone}/>
                    )
                })
            }
        </ul>
    )
}

export default CardList