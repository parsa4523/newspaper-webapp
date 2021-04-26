import React, { useEffect, useState } from 'react';
import { useParams, Link, withRouter } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import MiniPost from './MiniPost';

function ViewSinglePost() {
    const [post, setPost] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    useEffect(() => {
        async function fetchPost() {
            try {
                console.log('test1');
                const res = await fetch(
                    `http://localhost:1337/articles?Slug=${id}`
                ).then(response => response.json());

                console.log(res);
                setPost(res[0]);
                setIsLoading(false);
            } catch (e) {
                console.log('smothing went wrong');
            }
        }
        fetchPost();
    }, []);

    return (
        <>
            {!isLoading && (
                <div className="container-lg my-3">
                    <div className="row">
                        <div className="col-12 col-md-8 noticia-font">
                            <a className="text-danger d-inline-block my-3">
                                Irreland
                            </a>
                            <h2 className="mb-3 font-w700">{post.Title}</h2>
                            <div className="mb-5">
                                <span className="text-muted mr-3">
                                    3 oct, 2019
                                </span>
                                <span className="text-muted">
                                    <i class="bx bx-time-five align-middle"></i>{' '}
                                    5 min read
                                </span>
                                <div className="d-inline-block float-right">
                                    <a href="#" className="text-dark ml-3">
                                        <i class="bx bxl-facebook-square h3"></i>
                                    </a>
                                    <a href="#" className="text-dark ml-3">
                                        <i class="bx bxl-whatsapp-square h3"></i>
                                    </a>
                                    <a href="#" className="text-dark ml-3">
                                        <i class="bx bxl-linkedin-square h3"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="image-fluid mb-5">
                                <img
                                    className="w-100"
                                    src={`http://localhost:1337${post.Thumbnail.url}`}
                                />
                            </div>

                            <ReactMarkdown
                                source={post.Content}
                                allowedTypes={[
                                    'paragraph',
                                    'strong',
                                    'emphasis',
                                    'text',
                                    'heading',
                                    'list',
                                    'listItem',
                                ]}
                            />

                            <div>
                                <h4 className="d-inline-block">
                                    <a href="#" class="badge badge-light mr-3">
                                        <small className="text-muted">
                                            Irreland
                                        </small>
                                    </a>
                                    <a href="#" class="badge badge-light mr-3">
                                        <small className="text-muted">
                                            CoronaVirus
                                        </small>
                                    </a>
                                    <a href="#" class="badge badge-light mr-3">
                                        <small className="text-muted">
                                            News
                                        </small>
                                    </a>
                                    <a href="#" class="badge badge-light mr-3">
                                        <small className="text-muted">
                                            Health
                                        </small>
                                    </a>
                                </h4>
                                <div className="d-inline-block float-right">
                                    <a href="#" className="text-dark ml-3">
                                        <i class="bx bxl-facebook-square h3"></i>
                                    </a>
                                    <a href="#" className="text-dark ml-3">
                                        <i class="bx bxl-whatsapp-square h3"></i>
                                    </a>
                                    <a href="#" className="text-dark ml-3">
                                        <i class="bx bxl-linkedin-square h3"></i>
                                    </a>
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div className="col-12 col-md-4">
                            <MiniPost />
                            <MiniPost />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default withRouter(ViewSinglePost);
