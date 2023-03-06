import React, {useEffect} from 'react';

const PageInterShipping = () => {
    useEffect(() => {
        fetch("./dataBase/Inernational-shipping.json")
            .then((res) => res.json())
            .then((data) => {
                console.log(data.toString());
            });
    }, [])
    return (
        <div>

        </div>
    );
};

export default PageInterShipping;