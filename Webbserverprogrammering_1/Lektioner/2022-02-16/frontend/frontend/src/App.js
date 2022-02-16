import './utils/css/global.css';
import Alive from "./components/Alive";
import Name from "./components/Name";
import Addition from "./components/Addition";
import Subtraction from "./components/Subtraction";
import Multiplication from "./components/Multiplication";
import Division from "./components/Division";
import FullName from "./components/FullName";

function App() {
    return (
        <>
            <h1>App</h1>
            <Alive/>
            <Name/>
            <Addition/>
            <Subtraction/>
            <Multiplication/>
            <Division/>
            <FullName/>
        </>
    )
}

export default App;