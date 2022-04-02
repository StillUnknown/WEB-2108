import './utils/global/style/global.css'
import Alive from "./components/Alive";
import TaskList from "./components/taskList/taskList";
import CreateTask from "./components/createTask/CreateTask";
import GetSingleTask from "./components/getSingleTaskByName/GetSingleTask";

function App() {
    return (
        <>
            <Alive/>
            <TaskList/>
            <CreateTask/>
            <GetSingleTask/>
        </>
    );
}

export default App;
