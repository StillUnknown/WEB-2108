function navbar() {
    return ` <ul id="navbar">
        <li class="navbar-item navbar-hover">Categories</li>
        <li class="navbar-item navbar-hover">Winter Sale</li>
        <li class="navbar-item navbar-hover">Bestsellers</li>
        <li class="navbar-item navbar-hover">Contact</li>
        <li class="navbar-item"><label for="Håkan Hellström"></label><input type="text" id="Håkan Hellström" value="Search">
        <button onclick="searchButton()">Search</button></li>
        
    </ul>
    `
}
document.getElementById('nav').innerHTML = navbar()