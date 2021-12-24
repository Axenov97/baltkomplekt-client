import App from './App';
import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import UserStore from "./store/UserStore";
// import './phonemask'
import './index.scss';
import BlogStore from "./store/BlogStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        blog: new BlogStore()
    }} >
        <App />
    </Context.Provider>,
    document.getElementById('root')
);

