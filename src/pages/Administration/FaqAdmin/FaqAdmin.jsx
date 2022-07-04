import React, {useContext, useEffect} from 'react';
import {Context} from "../../../App";
import {fetchFaq} from "../../../http/FaqAPI";
import {observer} from "mobx-react-lite";
import {FaqItemAdmin} from "./FaqItemAdmin";
import {AddNewFaq} from "./AddNewFaq";

const FaqAdmin = observer(() => {
    const {blog} = useContext(Context)

    useEffect(() => {
        fetchFaq().then(data=> {
            blog.setFaq(data)
        })
    }, [])

    return (
        <>
            <h5>FAQ (Вопрос-Ответ)</h5>
            <div className="admin-list">
                <AddNewFaq />
                <div className='admin-list__content'>
                    {blog.faq.map(faq =>
                        <FaqItemAdmin key={faq.id} {...faq}/>
                    )}
                </div>
            </div>
        </>
    );
})

export default FaqAdmin;