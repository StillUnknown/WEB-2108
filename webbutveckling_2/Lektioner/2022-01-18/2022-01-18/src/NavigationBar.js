import {Link} from "react-router-dom";
import RoutingPath from "./utils/routing/RoutingPath";

export default function NavigationBar() {
    return (
        <nav>
            <ul>
                <li><Link to={RoutingPath.homeView}>Home</Link></li>
                <li><Link to={RoutingPath.otherView}>Other</Link></li>
            </ul>
        </nav>
    )
}