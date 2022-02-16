import './utils/css/global.css';
import Alive from "./components/Alive";
import Name from "./components/Name";
import Addition from "./components/Addition";
import Subtraction from "./components/Subtraction";

function App() {
    return (
        <>
            <h1>App</h1>
            <Alive/>
            <Name/>
            <Addition/>
            <Subtraction/>
        </>
    )
}

export default App;