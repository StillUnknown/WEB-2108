import Card from './card/Card'

const CardList = ({ todo }) => {
    return (
        <div>
            {
                todo.map((item) => {
                    return (
                        <Card key={ item.id }
                              id={ item.id }
                              name={ item.name }
                              task={ item.task }/>
                    )
                })
            }
        </div>
    )
}

export default CardList