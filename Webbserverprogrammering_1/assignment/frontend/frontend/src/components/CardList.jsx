import Card from './Card'

const CardList = ({ users }) => {
    return (
        <>
            {
                users.map((item) => {
                    return (
                        <Card key={ item.id }
                              id={ item.id }
                              name={ item.name }
                              task={ item.task }/>
                    )
                })
            }
        </>
    )
}

export default CardList