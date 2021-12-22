import React from 'react'
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";
import {ContextProvider} from "./context";
import {observer} from "mobx-react-lite";


const App = observer(() => {
    return <BrowserRouter>
            <ContextProvider>
                <AppRouter />
            </ContextProvider>
        </BrowserRouter>
});

export default App;
