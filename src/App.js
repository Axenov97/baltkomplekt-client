import React, {useContext, useEffect, useState} from 'react'
import AppRouter from "./components/AppRouter";
import {BrowserRouter, withRouter} from "react-router-dom";
import {ContextProvider} from "./context";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/UserAPI";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";


const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    // useEffect(() => {
        // check().then(data => {
        //     user.setUser(true)
        //     user.setIsAuth(true)
        // }).finally(() => setLoading(false))
    // }, [])
    //
    // if (loading) {
    //     return (
    //         <Box sx={{ display: 'flex', justifyContent:"center", alignItems: "center", height:'100vh'}}>
    //             <CircularProgress />
    //         </Box>
    //     )
    // }
    return <BrowserRouter>
            <ContextProvider>
                <AppRouter />
            </ContextProvider>
        </BrowserRouter>
});

export default App;
