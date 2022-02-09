import {BrowserRouter, Route, Routes} from 'react-router-dom'
import RoutingPath from "./RoutingPath";
import HomeView from '../views/homeView/HomeView';
import AlbumsView from "../views/albumsView/AlbumsView";
import ContactView from "../views/ContactView";
import NewAlbumsView from "../views/NewAlbumsView";
import OffersView from "../views/OffersView";
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
                <Route path={RoutingPath.newAlbumsView} element={<NewAlbumsView/>}/>
                <Route path={RoutingPath.offersView} element={<OffersView/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing