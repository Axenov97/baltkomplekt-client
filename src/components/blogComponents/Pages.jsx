import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../App";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

const Pages = observer(({page, setPage}) => {
    const {blog} = useContext(Context)

    const pageCount = Math.ceil(blog.totalCount / 9)
    const pages = []
    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    const handleChange = (event, value) => {
        setPage(value);
        blog.setPage(value)
    };

    return (
        <div className='pagination-pages' style={{paddingBottom: '25px'}}>
            <Stack spacing={2} >
                <Pagination
                    count={ pageCount }
                    variant="outlined"
                    shape="rounded"
                    size="large"
                    showFirstButton
                    showLastButton
                    page={page}
                    onChange={handleChange}
                />
            </Stack>
        </div>
    );
});

export default Pages;