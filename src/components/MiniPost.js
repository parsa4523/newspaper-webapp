import React, { useEffect } from 'react';

function MiniPost(props) {
    if (props.loading) {
        return (
            <div className="mt-3 d-flex align-items-center border-bottom pb-3">
                <div className="shine loading-image-sub"></div>

                <div className="shine loading-line ml-3"></div>
            </div>
        );
    }

    return (
        <>
            <div className="mt-3 d-flex align-items-center border-bottom pb-3">
                <div className="sub-img bg-dark">
                    <img
                        className="w-100"
                        src={`http://localhost:1337${props.image}`}
                        alt=""
                    />
                </div>
                <a href="#" className="h6 ml-3 w-100 noticia-font text-dark">
                    {props.text}
                </a>
            </div>
        </>
    );
}

export default MiniPost;
