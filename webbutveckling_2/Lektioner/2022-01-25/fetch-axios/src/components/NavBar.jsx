import {Link} from "react-router-dom";
import RoutingPath from "../router/RoutingPath";
import classes from './Navbar.module.css';

const NavBar = () => {

    return (
        <nav>
            <ul className={classes.navList}>
                <li className={classes.item}>
                    <Link className={`${classes.links} ${classes.active}`}
                          to={RoutingPath.homeView}>HomeView</Link>
                </li>
                <li className={classes.item}>
                    <Link className={classes.links}
                          to={RoutingPath.fetchView}>FetchView</Link>
                </li>
                <li className={classes.item}>
                    <Link className={classes.links}
                          to={RoutingPath.axiosView}>AxiosView</Link>
                </li>
                <li className={classes.item}>
                    <Link className={classes.links}
                          to={RoutingPath.pokeView}>PokeView</Link>
                </li>
                <li className={classes.item}>
                    <Link className={classes.links}
                          to={RoutingPath.pokemonView}>PokemonView</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;