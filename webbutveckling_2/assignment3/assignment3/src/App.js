import Header from "./components/header/Header";
import NavBar from "./components/navBar/navBar";
import Routing from "./routing/Routing";

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
