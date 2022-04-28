import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Users from "./components/users/Users";
import UserPage from "./components/users/UserPage";

const App: React.FC = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/users" element={<Users/>}/>
                    <Route path="/users/:id" element={<UserPage/>}/>
                </Routes>
            </Router>

        </div>
    )
}

export default App