import React, {createContext, Suspense} from 'react'
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";
import {ContextProvider} from "./context";
import {observer} from "mobx-react-lite";
import UserStore from "./store/UserStore";
import BlogStore from "./store/BlogStore";

export const Context = createContext(null)

const App = observer(() => {
    return <Context.Provider value={{
            user: new UserStore(),
            blog: new BlogStore()
        }} >
        <BrowserRouter>
            <ContextProvider>
                <Suspense fallback={'Load...'}>
                    <AppRouter />
                </Suspense>
            </ContextProvider>
        </BrowserRouter>
    </Context.Provider>
});

export default App;
