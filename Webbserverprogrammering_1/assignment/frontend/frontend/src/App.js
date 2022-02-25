import './utils/global/css/global.css';
import Alive from "./components/Alive";
import ToDoList from "./components/toDoList/ToDoList";
import CreateData from './components/CreataData'

function App() {
    return (
        <>
            <h1>App</h1>
            <Alive/>
            <ToDoList/>
            <CreateData/>
        </>
    );
}

export default App;
