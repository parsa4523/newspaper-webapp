import React, { useEffect, useState } from 'react';

function Carousel(props) {
    const [posts, setPosts] = useState();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function fetchPosts() {
            try {
                console.log('This is for carousel');
                const res = await fetch(
                    `http://localhost:1337/articles?ShowOnSlider=true`
                ).then(response => response.json());

                console.log(res);
                setPosts(res);
                setIsLoading(false);
            } catch (e) {
                console.log('smothing went wrong');
            }
        }
        fetchPosts();
    }, []);

    if (isLoading) {
        return (
            <div
                id='carouselExampleSlidesOnly'
                className='carousel slide h-100'
                data-ride='carousel'
            >
                <div className='shine w-100 h-100'></div>
            </div>
        );
    }

    return (
        <div id='carouselExampleSlidesOnly' className='carousel slide h-100' data-ride='carousel'>
            <div className='carousel-inner h-100'>
                {posts.map((item, index) => {
                    return (
                        <div
                            key={item.id}
                            className={
                                'carousel-item container-fluid h-100 ' + (!index ? 'active' : '')
                            }
                        >
                            <div className='row h-100'>
                                <div className='bg-dark col-6 h-100 w-100 p-0'>
                                    <img
                                        src={`http://localhost:1337${item.Thumbnail.url}`}
                                        alt=''
                                        className='h-100 cover'
                                    />
                                </div>
                                <div className='col-6 bg-light py-2 d-flex flex-column'>
                                    <a className='text-danger py-1'>News</a>

                                    <h3 className='h4 py-3 noticia-font'>{item.Title}</h3>
                                    <p>
                                        Households in Birmingham have been banned from mixing in new
                                        lockdown measures announced following a spike in coronavirus
                                        cases.
                                    </p>
                                    <a className='stretched-link mt-auto' href='#'>
                                        read more
                                    </a>
                                    <div>
                                        <span className='text-muted mr-3'>
                                            <small>3 oct, 2019</small>
                                        </span>
                                        <span className='text-muted'>
                                            <small>
                                                <i className='bx bx-time-five align-middle'></i> 5
                                                min read
                                            </small>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Carousel;
