import './utils/global/css/global.css';
import Alive from "./components/Alive";
import ToDoList from "./components/toDoList/ToDoList";
import CreateData from './components/createData/CreataData'
import UpdateData from "./components/updateData/UpdateData";
import DeleteData from "./components/deleteData/DeleteData";
import GetSingleDataByName from "./components/getSingleDataByName/GetSingleDataByName";

function App() {
    return (
        <>
            <Alive/>
            <h1>ToDo's</h1>
            <ToDoList/>
            <CreateData/>
            <UpdateData/>
            <DeleteData/>
            <GetSingleDataByName/>
        </>
    );
}

export default App;
