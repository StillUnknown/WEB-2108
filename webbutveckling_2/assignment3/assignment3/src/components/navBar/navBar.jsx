import {Link} from "react-router-dom";
import RoutingPath from "../../routing/RoutingPath";
import css from './navBar.module.css'

function NavBar() {
    return (
        <nav>
            <ul className={css.navbar}>

                <Link to={RoutingPath.homeView} className={css.navBarItems}>
                    <li>Home</li>
                </Link>
                <Link to={RoutingPath.albumsView} className={css.navBarItems}>
                    <li>Our Albums</li>
                </Link>
                <Link to={RoutingPath.newAlbumsView} className={css.navBarItems}>
                    <li>New albums</li>
                </Link>
                <Link to={RoutingPath.offersView} className={css.navBarItems}>
                    <li>Offers</li>
                </Link>
                <Link to={RoutingPath.hitListView} className={css.navBarItems}>
                    <li>Hitlist</li>
                </Link>
                <Link to={RoutingPath.contactView} className={css.navBarItems}>
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    )
}

export default NavBar