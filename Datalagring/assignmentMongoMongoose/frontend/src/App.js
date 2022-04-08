import './utils/global/style/global.css'
import Alive from "./components/Alive";
import TaskList from "./components/taskList/TaskList";
import CreateTask from "./components/createTask/CreateTask";
import GetTaskUsingName from './components/getTaskUsingName/GetTaskUsingName'
import GetTaskUsingId from './components/getTaskUsingId/GetTaskUsingId'
import UpdateTask from './components/updateTask/UpdateTask'
import DeleteTask from './components/deleteTask/DeleteTask'


function App() {
    return (
        <>
            <Alive/>
            <TaskList/>
            <CreateTask/>
            <GetTaskUsingName/>
            <GetTaskUsingId/>
            <UpdateTask/>
            <DeleteTask/>
        </>
    );
}

export default App;