import {NavLink} from "react-router-dom";

function BlogLinkGroup({blogPage}) {

    return(
        <>
            <div className="container flex-container blog__link-container">
                {<h2 className="blue__head">{blogPage}</h2>}
                <div className="link-group flex-container">
                    <NavLink to='/blog/materials/' className='btn blog__btn btn__black_border' >Справочные материалы</NavLink>
                    <NavLink to='/blog/cases/' className='btn blog__btn btn__black_border'>Интересные кейсы</NavLink>
                    <NavLink to='/blog/faq/' className='btn blog__btn btn__black_border'>Ответы на вопросы</NavLink>
                    <NavLink to='/blog/news/' className='btn blog__btn btn__black_border'>Новости</NavLink>
                </div>
            </div>
        </>
    );
}

export {BlogLinkGroup}