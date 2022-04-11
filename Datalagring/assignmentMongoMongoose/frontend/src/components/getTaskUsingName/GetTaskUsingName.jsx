import TaskService from "../../utils/api/service/TaskService";
import {useState} from 'react'
import css from './GetSingleTaskByName.module.css'
import CardList from '../CardList'

const GetTaskUsingName = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState('')

    const sendDataToApi = () => {
        TaskService.getTaskWithNameQuery(name)
            .then(response => {
                console.log(response.data)
                setData(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <div className={css.centerContent}>
                <h1 className={css.h1Style} data-testid='header'>Get Task By Name</h1>
                Name: <input className={css.inputStyle} type='text'
                             value={name}
                             onChange={event => setName(event.target.value)}/>
                <button className={css.buttonStyle} onClick={() => setName([])}>Clear name</button>
                <button className={css.buttonStyle} onClick={sendDataToApi}>Get Task By Name</button>
                {data.length > 0 && data[0].message
                    ? <p>{data[0].message}</p>
                    : <CardList tasks={data}/>}
            </div>
        </>
    )
}

export default GetTaskUsingName