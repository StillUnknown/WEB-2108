import {Link} from "react-router-dom";
import RoutingPath from "../../router/RoutingPath";
import css from './NavBar.module.css'

function NavBar() {
    return (
        <nav>
            <ul className={css.navbar}>
                <li className={css.navBarItems}>
                    <Link to={RoutingPath.homeView}>Home</Link>
                </li>
                <li className={css.navBarItems}>
                    <Link to={RoutingPath.albumsView}>Our Albums</Link>
                </li>
                <li className={css.navBarItems}>
                    <Link to={RoutingPath.newAlbumsView}>New Albums</Link>
                </li>
                <li className={css.navBarItems}>
                    <Link to={RoutingPath.offersView}>Offers</Link>
                </li>
                <li className={css.navBarItems}>
                    <Link to={RoutingPath.hitListView}>HitList</Link>
                </li>
                <li className={css.navBarItems}>
                    <Link to={RoutingPath.contactView}>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar