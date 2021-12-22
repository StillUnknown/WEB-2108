function navbar() {
    return ` <ul id="navbar">
        <li class="navbar-item navbar-hover">
        <a href="black_orange.html">Black and orange colorscheme</a></li>
        <li class="navbar-item navbar-hover">
        <a href="blueish.html">Blue colorscheme</a></li>
        <li class="navbar-item navbar-hover">
        <a href="purple.html">Purple colorscheme</a></li>
        <li class="navbar-item navbar-hover">
        <a href="red_orange.html">Red and orange colorscheme</a></li>
        <li class="navbar-item"><label for="Håkan Hellström"></label><input type="text" id="Håkan Hellström" value="Search">
        <button onclick="searchButton()">Search</button></li>
        
    </ul>
    `
}
document.getElementById('nav').innerHTML = navbar()