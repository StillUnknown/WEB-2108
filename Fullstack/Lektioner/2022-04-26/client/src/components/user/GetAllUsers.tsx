import css from './Container.module.css'
import {useState} from "react";
import UserService from "../../utils/api/service/UserService";
import {ReadUser} from "../../utils/interface/Users";
import CardList from "./cards/CardList";

const GetAllUsers = () => {
    const [allUsers, setAllUsers] = useState<Array<ReadUser>>([])

    const getAllUsers = () => {
        UserService.getAll()
            .then(response => {
                console.log(response.data)
                setAllUsers(response.data)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const clear = () => {
        setAllUsers([])
    }

    return (
        <article className={css.container}>
            <h1>GetAllUsers</h1>
            <button onClick={ getAllUsers }>Get Users</button>
            <button onClick={ clear }>Clear</button>
            <br/>
            <CardList users={ allUsers }/>
        </article>
    )
}

export default GetAllUsers