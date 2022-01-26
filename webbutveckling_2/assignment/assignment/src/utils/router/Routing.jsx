import {BrowserRouter, Routes, Route} from "react-router-dom";
import RoutingPath from "./RoutingPath";
import HomeView from "../../views/HomeView";
import AlbumsView from "../../views/AlbumsView";
import ContactView from "../../views/ContactView";
import HitListView from "../../views/HitListView";
import NewAlbumsView from "../../views/NewAlbumsView";
import OffersView from "../../views/OffersView";


const Routing = (props) => {
    return (
        <BrowserRouter>
            {props.children}
            <Routes>
                <Route to={RoutingPath.homeView} element={<HomeView/>}/>
                <Route to={RoutingPath.albumsView} element={<AlbumsView/>}/>
                <Route to={RoutingPath.contactView} element={<ContactView/>}/>
                <Route to={RoutingPath.hitListView} element={<HitListView/>}/>
                <Route to={RoutingPath.newAlbumsView} element={<NewAlbumsView/>}/>
                <Route to={RoutingPath.offersView} element={<OffersView/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing