import css from './ToDoList.module.css'
import CardList from "../CardList";

const ToDoList = () => {


    return (
        <>
            <div className={css.centerContent}>
                <h1>ToDoList</h1>
                <input className={css.inputStyle} type="text"/>
                <button className={css.buttonStyle}>Update</button>
            </div>
            <div>
                <ul className={css.ulStyle}>
                    <CardList/>
                </ul>
            </div>
        </>
    )
}

export default ToDoList