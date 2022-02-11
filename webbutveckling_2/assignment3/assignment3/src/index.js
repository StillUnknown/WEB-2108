import React from 'react';
import ReactDOM from 'react-dom';
import './utils/global/css/global.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tachyons'
import {CartContextProvider} from "./context/CartContext";

ReactDOM.render(
    <CartContextProvider>
        <App/>
    </CartContextProvider>,
    document.getElementById('root')
);
reportWebVitals();
