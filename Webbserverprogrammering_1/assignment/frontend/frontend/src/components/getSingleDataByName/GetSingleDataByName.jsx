import TodoService from "../../utils/api/service/TodoService";
import {useState} from "react";
import css from './GetSingleDataByName.module.css'
import Card from "../card/Card";

const GetSingleDataByName = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState('')

    const sendDataToApi = () => {
        TodoService.getSingleDataByName(name)
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <div className={css.centerContent}>
                <h1 className={css.h1Style} data-testid='header'>Get Single Data By Name</h1>
                Name: <input className={css.inputStyle} type='text'
                             value={name}
                             onChange={event => setName(event.target.value)}/>
                <button className={css.buttonStyle} onClick={sendDataToApi}>Get Single Data By Name</button>
                {data.name ? <Card name={data.name}
                                   task={data.task}/>
                    : <h3>{data}</h3>}
            </div>
        </>
    )
}

export default GetSingleDataByName