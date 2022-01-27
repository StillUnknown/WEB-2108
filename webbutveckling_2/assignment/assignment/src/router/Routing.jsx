import {BrowserRouter, Routes, Route} from "react-router-dom";
import RoutingPath from "./RoutingPath";
import HomeView from '../views/HomeView';
import AlbumsView from "../views/AlbumsView";
import ContactView from "../views/ContactView";
import HitListView from "../views/HitListView";
import NewAlbumsView from "../views/NewAlbumsView";
import OffersView from "../views/OffersView";


const Routing = (props) => {
    return (
        <BrowserRouter>
            {props.children}
            <Routes>
                <Route path={RoutingPath.homeView} element={<HomeView/>}/>
                <Route path={RoutingPath.albumsView} element={<AlbumsView/>}/>
                <Route path={RoutingPath.contactView} element={<ContactView/>}/>
                <Route path={RoutingPath.hitListView} element={<HitListView/>}/>
                <Route path={RoutingPath.newAlbumsView} element={<NewAlbumsView/>}/>
                <Route path={RoutingPath.offersView} element={<OffersView/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing