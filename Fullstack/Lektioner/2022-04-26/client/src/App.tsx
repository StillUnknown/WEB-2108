import React from "react";
import css from './App.module.css'

function App() {
    return (
        <>
            <h1>React App written in Typescript with CSS module</h1>
            Alive
            <div className={css.container}>
                <div>
                    <p>Get All Users</p>
                    <p>Get User by id</p>
                </div>
                <div>
                    <p>Create User</p>
                    <p>Update User</p>
                    <p>Delete User</p>
                </div>
            </div>
        </>
    )
}

export default App