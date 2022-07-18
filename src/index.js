import React from 'react';
import './index.css';
import store from "./redux/reduxi-store";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";


let rerenderTree = () => {
    ReactDOM.render(<Provider store = {store}>  <App/> </Provider>, document.getElementById('root')
    );
}

rerenderTree()

store.subscribe( () => {rerenderTree()});

// If you want to start measuring performance in your app, pass a functionau
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

