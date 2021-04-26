import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Post(props) {
    let map = new Map();
    map.set('News', 'text-danger')
        .set('Sports', 'text-success')
        .set('Life Style', 'text-warning')
        .set('Bussiness', 'text-primary');

    if (props.loading) {
        return (
            <>
                <div className="col-12 col-md-4 py-3">
                    <div className="shine loading-image"></div>

                    <div>
                        <h4 className="h5">
                            <div className="shine loading-line"></div>
                        </h4>
                        <div className="shine loading-time"></div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <div className="col-12 col-md-4 py-3">
                <div className="bg-dark">
                    <img
                        className="w-100"
                        src={`http://localhost:1337${props.image}`}
                    />
                </div>
                <div>
                    <a
                        className={
                            'd-inline-block my-2 ' + map.get(props.category)
                        }
                    >
                        {props.category}
                    </a>
                    <h4 className="h5">
                        <Link
                            to={`/${props.slug}`}
                            className="text-body text-decoration-none noticia-font font-w700"
                        >
                            {props.title}
                        </Link>
                    </h4>
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

export default Post;
