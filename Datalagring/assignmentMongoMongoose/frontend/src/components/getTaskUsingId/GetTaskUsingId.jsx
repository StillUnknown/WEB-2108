import TaskService from "../../utils/api/service/TaskService";
import {useState} from 'react'
import css from './GetTaskUsingId.module.css'
import Card from "../card/Card";

const GetTaskUsingId = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState('')

    const sendDataToApi = () => {
        TaskService.getTaskById(name)
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <div className={css.centerContent}>
                <h1 className={css.h1Style} data-testid='header'>Get Single Task By Id</h1>
                Id: <input className={css.inputStyle} type='text'
                           value={name}
                           onChange={event => setName(event.target.value)}/>
                <button className={css.buttonStyle} onClick={sendDataToApi}>Get Single Task By Id</button>
                {data.name ? <Card name={data.name}
                                   task={data.task}
                                   _id={data._id}/>
                    : <h3>{data}</h3>}
            </div>
        </>
    )
}

export default GetTaskUsingId