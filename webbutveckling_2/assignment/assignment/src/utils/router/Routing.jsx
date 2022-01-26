import {BrowserRouter, Route, Routes} from "react-router-dom";
import RoutingPath from "./RoutingPath";
import ContactView from "../../views/ContactView";
import AlbumsView from "../../views/AlbumsView";
import HitlistView from "../../views/HitlistView";
import HomeView from "../../views/HomeView";
import NewAlbumsView from "../../views/NewAlbumsView";
import OffersView from "../../views/OffersView";
import PresentsView from "../../views/PresentsView";

const Routing = (props) => {
    return (
        <BrowserRouter>
            {props.children}
            <Routes>
                <Route path={RoutingPath.contactView} element={<ContactView/>}/>
                <Route path={RoutingPath.albumsView} element={<AlbumsView/>}/>
                <Route path={RoutingPath.hitlistView} element={<HitlistView/>}/>
                <Route path={RoutingPath.homeView} element={<HomeView/>}/>
                <Route path={RoutingPath.newAlbumsView} element={<NewAlbumsView/>}/>
                <Route path={RoutingPath.offersView} element={<OffersView/>}/>
                <Route path={RoutingPath.presentsView} element={<PresentsView/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing