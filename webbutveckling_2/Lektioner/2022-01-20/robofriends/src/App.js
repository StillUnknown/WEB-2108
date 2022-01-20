import CardList from "./components/CardList";
import robots from './utils/data/robots'
import Scroll from "./components/Scroll/Scroll";
import SearchBox from "./components/SearchBox";
import { useEffect, useState } from "react";

function App() {
    const [searchField, setSearchField] = useState('')
    const [robots, setRobots] = useState([])

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    const fetchRobots = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                setRobots(users)
            })
    }

    useEffect(() => {
        fetchRobots()
    }, [])


    return (
        <div className='tc'>
            <h1 className='robo-logo f1'>RoboFriends</h1>
            <SearchBox setSearchField={setSearchField}/>
            <Scroll>
                <CardList robots={filteredRobots}/>
            </Scroll>


        </div>
    );
}

export default App;

