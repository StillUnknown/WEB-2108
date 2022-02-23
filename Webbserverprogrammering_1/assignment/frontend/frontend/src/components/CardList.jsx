import Card from './Card'
import MyAPIService from "../utils/api/MyAPIService";

const CardList = ({ ToDoList }) => {
    return (
        <>
            {
                MyAPIService.ToDoList.map((user, index) => {
                    return (
                        <Card key={ index }
                              id={ ToDoList[index].id }
                              task={ ToDoList[index].task }
                              name={ ToDoList[index].name }/>
                    )
                })
            }
        </>
    )
}

export default CardList