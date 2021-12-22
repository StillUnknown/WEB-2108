function footerJs() {
    return ` <article
class = "footer-item" >
    <p> Copyright © 2021
by <img
src = "https://img.shields.io/badge/Still-Unknown-red"
alt = ""></p>
</article>
<article class="footer-item">
    <a href='https://sv-se.facebook.com/' target='_blank'>
        <img src='https://img.shields.io/badge/facebook-1F2833?&style=for-the-badge&logo=facebook'
             alt='facebook'>
    </a>
</article>

<article class="footer-item">
    <a href='https://www.instagram.com/' target='_blank'>
        <img src='https://img.shields.io/badge/instagram-1F2833?&style=for-the-badge&logo=instagram'
             alt='instagram'>
    </a>
</article>
<article class="footer-item">
    <a href='https://www.twitter.com/' target='_blank'>
        <img src='https://img.shields.io/badge/twitter-1F2833?&style=for-the-badge&logo=twitter' alt='twitter'>
    </a>
</article>
    `
}
document.getElementById('footer').innerHTML = footerJs()