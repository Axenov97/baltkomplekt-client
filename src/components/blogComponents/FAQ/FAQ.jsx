import {Question} from "./Question";
import React, {useContext, useEffect} from "react";
import {Context} from "../../../index";
import {fetchFaq} from "../../../http/FaqAPI";
import {observer} from "mobx-react-lite";
import {Helmet} from "react-helmet";

const FAQ = observer(({setBlogPage}) =>{
    const {blog} = useContext(Context)

    useEffect(() => {
        setBlogPage('FAQ')
        fetchFaq().then(data=> {
            blog.setFaq(data)
        })
    }, [])

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