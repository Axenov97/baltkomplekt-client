import {MaterialsItem} from "./MaterialsItem";
import React, {useContext, useEffect, useState} from "react";
import {Context} from "../../../index";
import {fetchMaterials} from "../../../http/MaterialsAPI";
import {observer} from "mobx-react-lite";
import {Helmet} from "react-helmet";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const Materials = observer(() => {
    const {blog} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchMaterials(blog).then(data=> {
            blog.setMaterials(data)
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
            title="Справочные материалы | Балткомплект "
            meta={[
                {
                    "name": "description",
                    "content": "Справочные материалы компании балткомплект, брокерские договоры и другие полезные материалы для таможенного оформления"}
            ]}
        />
        <div className='materials'>
            {blog.materials.map(material => (
                <MaterialsItem key={material.id} {...material}/>
            ))}
        </div>
    </>
})

export {Materials};