import React from 'react';
import ReactDOM from 'react-dom/client'
// import App from './App';
// import  App  from './useStrict/App';
// import App from './react-router/App';
// import App from './useCallbach/App'
// import App from './useCallback2.jsx/App'
// import App from './useRef/App'
import App from './useReducer/App'
import {Provider} from 'react-redux';
import { store } from './useReducer/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Provider store={store}><App /></Provider>);


