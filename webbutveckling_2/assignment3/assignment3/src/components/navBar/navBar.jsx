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
                    <li>Our albums</li>
                </Link>
                <Link to={RoutingPath.helpers} className={css.navBarItems}>
                    <li>Helpers</li>
                </Link>
                <Link to={RoutingPath.offersView} className={css.navBarItems}>
                    <li>Offers</li>
                </Link>
                <Link to={RoutingPath.videoView} className={css.navBarItems}>
                    <li>Video</li>
                </Link>
                <Link to={RoutingPath.contactView} className={css.navBarItems}>
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    )
}

export default NavBar