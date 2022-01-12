import './App.css';
import Header from "./components/Header/Header";
import WelcomeMessage from "./components/Welcome/WelcomeMessage";

function App() {
    const myName = 'Liselott'

    return (
        <>
            <Header/>
            <WelcomeMessage name={myName}/>
        </>
    );
}

export default App;
