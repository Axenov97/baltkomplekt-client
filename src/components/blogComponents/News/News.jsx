import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {fetchNews} from "../../../http/NewsAPI";
import {Context} from "../../../index";
import NewsItem from "./NewsItem";
import Pages from "../Pages";
import './news.scss';
import {Helmet} from "react-helmet";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const News = observer(() => {
    const {blog} = useContext(Context)
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchNews(blog.page).then(data=> {
            blog.setNews(data.rows)
            blog.setTotalCount(data.count)
        }).finally(() => setLoading(false))
    }, [blog.page])
    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent:"center", alignItems: "start", height: '100vh'}}>
                <CircularProgress />
            </Box>
        )
    }
    return <>
        <Helmet
            title="Новости | Балткомплект "
            meta={[
                {
                    "name": "description",
                    "content": "Последние новости в сфере таможенного оформления"}
            ]}
        />
        <div className='news' >
            <Pages page={page} setPage={setPage}/>
            {blog.news.map(newsItem =>
                <NewsItem key={newsItem.id} {...newsItem}/>
            )}
            <Pages page={page} setPage={setPage}/>
        </div>
    </>
});

export {News};