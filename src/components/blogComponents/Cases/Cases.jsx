import {Case} from "./Case";
import {observer} from "mobx-react-lite";
import React, {useContext, useEffect} from "react";
import {Context} from "../../../index";
import {fetchCases} from "../../../http/CasesAPI";
import {Helmet} from "react-helmet";

const Cases = observer(({setBlogPage}) =>{
    const {blog} = useContext(Context)

    useEffect(() => {
        setBlogPage('Кейсы')
        fetchCases().then(data=> {
            blog.setItemCases(data)
        })
    }, [])

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