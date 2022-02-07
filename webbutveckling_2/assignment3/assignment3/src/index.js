import React from 'react';
import ReactDOM from 'react-dom';
import './utils/global/css/global.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tachyons'
import {StoreContextProvider} from "./context/storeContext";

ReactDOM.render(
    <StoreContextProvider>
        <App/>
    </StoreContextProvider>,
    document.getElementById('root')
);
reportWebVitals();
