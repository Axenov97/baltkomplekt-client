import App from './App';
import React from 'react';
import { hydrate, render } from "react-dom";
import './index.scss';

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
    hydrate(<App />, rootElement);
} else {
    render(<App />, rootElement);
}

