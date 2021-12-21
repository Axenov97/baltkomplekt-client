import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import {fetchNews} from "../../../http/NewsAPI";
import NewsItemAdmin from "./NewsItemAdmin";
import {AddNews} from "./AddNews";
import Pages from "../../../components/blogComponents/Pages";

const NewsAdmin = observer(() => {
    const {blog} = useContext(Context)
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchNews(blog.page).then(data=> {
            blog.setNews(data.rows)
            blog.setTotalCount(data.count)
        })
    }, [blog.page])

    return (
        <>
            <h5>Раздел Новости</h5>
            <div className="admin-list">
                <AddNews />
                <Pages page={page} setPage={setPage}/>
                <div className='admin-list__content'>
                    {blog.news.map(newsItem =>
                        <NewsItemAdmin key={newsItem.id} {...newsItem}/>
                    )}
                </div>
                <Pages page={page} setPage={setPage}/>
            </div>
        </>
    );
})

export default NewsAdmin;