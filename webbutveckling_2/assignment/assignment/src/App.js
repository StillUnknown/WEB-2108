import './utils/global/css/global.css'
import Header from "./components/header/Header";
import Routing from "./router/Routing";
import NavBar from "./components/navBar/NavBar";


function App() {

    return (
        <>
            <Header/>
            <Routing>
                <NavBar/>
            </Routing>
        </>
    );
}

export default App;
