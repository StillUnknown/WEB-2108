import './App.css';
import Header from "./components/Header/Header";
import WelcomeMessage from "./components/Welcome/WelcomeMessage";



function App() {
    const myName = 'Liselott'
    const myAge = 20

    return (
        <>
            <Header/>
            <WelcomeMessage name={myName} age={myAge}/>
        </>
    );
}

export default App;
