import React, {useContext, useEffect} from 'react';
import {Context} from "../../../App";
import {observer} from "mobx-react-lite";
import {fetchMaterials} from "../../../http/MaterialsAPI";
import {MaterialAdmin} from "./MaterialAdmin";
import {AddMaterials} from "./AddMaterials";


const MaterialsAdmin = observer(() => {
    const {blog} = useContext(Context)

    useEffect(() => {
        fetchMaterials().then(data=> {
            blog.setMaterials(data)
        })
    }, [])

    return (
        <>
            <h5>Раздел справочные материалы</h5>
            <div className="admin-list">
                <AddMaterials />
                <div className='admin-list__content'>
                    {blog.materials.map(material =>
                        <MaterialAdmin key={material.id} {...material} />
                    )}
                </div>
            </div>
        </>
    );
})

export default MaterialsAdmin;