import {Link} from "react-router-dom";
import RoutingPath from "../../utils/router/RoutingPath";
import css from './NavBar.module.css'

function NavBar() {
    return (
        <nav>
            <ul className={css.navbar}>
                <li className={css.navItems}>
                    <Link
                        to={RoutingPath.albumsView}>Our albums</Link></li>
                <li className={css.navItems}>
                    <Link
                        to={RoutingPath.newAlbumsView}>New albums</Link></li>
                <li className={css.navItems}>
                    <Link
                        to={RoutingPath.offersView}>Offers</Link></li>
                <li className={css.navItems}>
                    <Link
                        to={RoutingPath.hitlistView}>Hitlist</Link></li>
                <li className={css.navItems}>
                    <Link
                        to={RoutingPath.presentsView}>Presents</Link></li>
                <li className={css.navItems}>
                    <Link
                        to={RoutingPath.contactView}>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar