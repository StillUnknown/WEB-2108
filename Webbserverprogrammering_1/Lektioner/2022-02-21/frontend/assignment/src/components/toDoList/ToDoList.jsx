import css from './ToDoList.module.css'

const ToDoList = () => {


    return (
        <>
            <div className={css.centerContent}>
                <h1>ToDoList</h1>
                <input className={css.inputStyle} type="text"/>
                <button className={css.buttonStyle}>Update</button>
            </div>
            <div>
                <ul>
                    <li>hej</li>
                    <li>hej</li>
                    <li>hej</li>
                    <li>hej</li>
                </ul>
            </div>
        </>
    )
}

export default ToDoList