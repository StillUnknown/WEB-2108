import React from "react";
import css from './App.module.css'
import Alive from "./components/Alive";
import GetAllUsers from "./components/user/GetAllUsers";
import GetUserById from "./components/user/GetUserById";
import CreateUser from "./components/user/CreateUser";
import DeleteUser from "./components/user/DeleteUser";
import UpdateUser from "./components/user/UpdateUser";

function App() {
    return (
        <>
            <h1>React App written in Typescript with CSS module</h1>
            <Alive/>
            <div className={css.container}>
                <div>
                    <GetAllUsers/>
                    <GetUserById/>
                </div>
                <div>
                    <CreateUser/>
                    <UpdateUser/>
                    <DeleteUser/>
                </div>
            </div>
        </>
    )
}

export default App