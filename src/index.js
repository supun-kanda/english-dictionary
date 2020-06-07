// react
import React from 'react';
import ReactDOM from 'react-dom';

//redux - react
import { Provider } from "react-redux";

// App root
import App from "./components/App/App";

// store
import store from './store/createStore'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);
