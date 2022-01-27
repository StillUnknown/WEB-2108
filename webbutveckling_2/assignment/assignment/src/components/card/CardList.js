import Card from './Card'

const CardList = ({ albumsData }) => {
    return (
        <>
            {
                albumsData.map((user, index) => {
                    return (
                        <Card key={ index }
                              id={ albumsData[index].id }
                              image={albumsData[index].image}
                              title={ albumsData[index].title }
                              price={ albumsData[index].price }/>
                    )
                })
            }
        </>
    )
}

export default CardList