import {BrowserRouter, Route, Routes} from 'react-router-dom'
import RoutingPath from "./RoutingPath";
import HomeView from '../views/homeView/HomeView';
import AlbumsView from "../views/albumsView/AlbumsView";
import ContactView from "../views/contactView/ContactView";
import HelpersView from "../views/helpersView/HelpersView";
import OffersView from "../views/offersView/OffersView";
import VideoView from "../views/videoView/VideoView";


const Routing = (props) => {
    return (
        <BrowserRouter>
            {props.children}
            <Routes>
                <Route path={RoutingPath.homeView} element={<HomeView/>}/>
                <Route path={RoutingPath.albumsView} element={<AlbumsView/>}/>
                <Route path={RoutingPath.contactView} element={<ContactView/>}/>
                <Route path={RoutingPath.videoView} element={<VideoView/>}/>
                <Route path={RoutingPath.helpers} element={<HelpersView/>}/>
                <Route path={RoutingPath.offersView} element={<OffersView/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing