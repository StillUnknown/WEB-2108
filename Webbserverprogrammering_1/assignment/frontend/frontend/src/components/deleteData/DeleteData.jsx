import UsersService from "../../utils/api/service/UsersService";
import {useState} from "react";
import css from './DeleteData.module.css'

const DeleteData = () => {
    const [data, setData] = useState('')
    const [name, setName] = useState('')

    const sendDataToApi = () => {
        UsersService.deleteDataByName(name)
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <div className={css.centerContent}>
                <h1>Delete Data</h1>
                Name: <input data-testid='dataInput' className={css.inputStyle} type="text"
                             value={ name }
                             onChange={event => setName(event.target.value)}/>
                <button data-testid='deleteButton' className={css.buttonStyle} onClick={ sendDataToApi }>Delete Data</button>
                <h3 data-testid='DbResponse'>{ data }</h3>
            </div>
        </>
    )
}

export default DeleteData