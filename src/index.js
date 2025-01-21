import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.css"
import App from './App';
import Calculator from "./components/Calculator";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(
    <Calculator />
);
