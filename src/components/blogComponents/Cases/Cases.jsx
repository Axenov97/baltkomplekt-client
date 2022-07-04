import {Case} from "./Case";
import {observer} from "mobx-react-lite";
import React, {useContext, useEffect, useState} from "react";
import {Context} from "../../../App";
import {fetchCases} from "../../../http/CasesAPI";
import {Helmet} from "react-helmet";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const Cases = observer(() =>{
    const {blog} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchCases().then(data=> {
            blog.setItemCases(data)
        }).finally(() => setLoading(false))
    }, [])
    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent:"center", alignItems: "start", height: '100vh'}}>
                <CircularProgress />
            </Box>
        )
    }
    return <>
        <Helmet
            title='Интересные кейсы выполненные компанией "Балткомплект" '
            meta={[
                {
                    "name": "description",
                    "content": "Интересные кейсы выполненные компанией \"Балткомплект\""}
            ]}
        />
        <div className='cases-list'>
            {blog.itemCases.map(itemCases =>
                <Case key={itemCases.id} {...itemCases}/>
            )}
        </div>
    </>
});

export {Cases};