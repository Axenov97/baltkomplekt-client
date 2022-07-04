import {Question} from "./Question";
import React, {useContext, useEffect, useState} from "react";
import {Context} from "../../../App";
import {fetchFaq} from "../../../http/FaqAPI";
import {observer} from "mobx-react-lite";
import {Helmet} from "react-helmet";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const FAQ = observer(() =>{
    const {blog} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchFaq().then(data=> {
            blog.setFaq(data)
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
            title="Вопросы по таможенному оформлению | Балткомплект "
            meta={[
                {
                    "name": "description",
                    "content": "Ответы на самые частозадаваемые вопросы в сфере таможни и таможенного оформления"}
            ]}
        />
        <div className='FAQ-list'>
            {blog.faq.map(faq =>
                <Question key={faq.id} {...faq}/>
            )}
        </div>
    </>
});

export {FAQ};