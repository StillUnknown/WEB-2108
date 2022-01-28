export default function Varukorg(){
    return(
        <div className="w3-container">
            <h2>Dropdown Button</h2>
            <p>Move the mouse over the button to open the dropdown content.</p>
            <div className="w3-dropdown-hover">
                <button className="w3-button w3-black">Hover Over Me!</button>
                <div className="w3-dropdown-content w3-bar-block w3-border">
                    <a href="#" className="w3-bar-item w3-button">Link 1</a>
                    <a href="#" className="w3-bar-item w3-button">Link 2</a>
                    <a href="#" className="w3-bar-item w3-button">Link 3</a>
                </div>
            </div>
        </div>
    )
}
