import './utils/global/style/global.css'
import Alive from "./components/Alive";
import TaskList from "./components/taskList/taskList";
import CreateTask from "./components/createTask/CreateTask";

function App() {
    return (
        <>
            <Alive/>
            <TaskList/>
            <CreateTask/>
        </>
    );
}

export default App;
