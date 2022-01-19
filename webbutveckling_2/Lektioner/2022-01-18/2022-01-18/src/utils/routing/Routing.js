import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeView from "../views/HomeView";
import RoutingPath from "./RoutingPath";
import OtherView from "../views/OtherView";

export default function Routing(props) {
    return (
        <BrowserRouter>
            {props.children}
            <Routes>
                <Route path={RoutingPath.homeView} element={<HomeView/>}/>
                <Route path={RoutingPath.otherView} element={<OtherView/>}/>
            </Routes>
        </BrowserRouter>
    )
}