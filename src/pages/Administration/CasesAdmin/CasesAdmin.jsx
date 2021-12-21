import React, {useContext, useEffect} from 'react';
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import {fetchCases} from "../../../http/CasesAPI";
import {CaseAdmin} from "./CaseAdmin";
import {AddNewCase} from "./AddNewCase";


const CasesAdmin = observer(() => {
    const {blog} = useContext(Context)

    useEffect(() => {
        fetchCases().then(data=> {
            blog.setItemCases(data)
        })
    }, [])

    return (
        <>
            <h5>Раздел интересные кейсы</h5>
            <div className="admin-list">
                <AddNewCase />
                <div className='admin-list__content'>
                    {blog.itemCases.map(itemCases =>
                        <CaseAdmin key={itemCases.id} {...itemCases} />
                    )}
                </div>
            </div>
        </>
    );
})

export default CasesAdmin;