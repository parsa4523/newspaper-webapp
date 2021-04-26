import React, { useEffect } from 'react';

function Card(props) {
    return (
        <>
            <div className="col-12 col-md-4 py-3 px-4">
                <div className="bg-light h-100 p-3">
                    <a className="text-success py-1">{props.category}</a>

                    <h3 className="h4 py-3 noticia-font">{props.title}</h3>
                    <p>
                        Households in Birmingham have been banned from mixing in
                        new lockdown measures announced following a spike in
                        coronavirus cases.
                    </p>
                    <a className="stretched-link mt-auto d-block" href="#">
                        read more
                    </a>

                    <span className="text-muted mr-3">
                        <small>3 oct, 2019</small>
                    </span>
                    <span className="text-muted">
                        <small>
                            <i className="bx bx-time-five align-middle"></i> 5
                            min read
                        </small>
                    </span>
                </div>
            </div>
        </>
    );
}

export default Card;
