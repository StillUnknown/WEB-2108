import React from 'react';
import ReactDOM from 'react-dom';
import './utils/global/css/global.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tachyons'
import {AlbumContextProvider} from "./context/AlbumContext";

ReactDOM.render(
    <AlbumContextProvider>
        <App/>
    </AlbumContextProvider>,
    document.getElementById('root')
);
reportWebVitals();
