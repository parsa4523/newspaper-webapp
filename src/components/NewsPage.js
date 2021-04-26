import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';
import MiniPost from './MiniPost';
import OverviewSection from './OverviewSection';
import Posts from './Posts';

function NewsPage() {
    const [posts, setPosts] = useState();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function fetchPosts() {
            try {
                console.log('test1');
                const res = await fetch(
                    `http://localhost:1337/articles?Premium=true`
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
            <div className="container-lg">
                <div className="row my-4">
                    <div className="col-12 col-md-8 py-1">
                        <Carousel />
                    </div>
                    <div className="col-12 col-md-4 py-1">
                        <span className="h3">Subscribers only &#8250;</span>
                        <MiniPost loading={true} />
                        <MiniPost loading={true} />
                        <MiniPost loading={true} />
                    </div>
                </div>
                <Posts />
                <OverviewSection type="Sports" />
                <OverviewSection type="Bussiness" />
            </div>
        );
    }
    return (
        <div className="container-lg">
            <div className="row my-4">
                <div className="col-12 col-md-8 py-1">
                    <Carousel />
                </div>
                <div className="col-12 col-md-4 py-1">
                    <span className="h3">Subscribers only &#8250;</span>
                    {posts.map((item, index) => {
                        if (index < 3) {
                            return (
                                <MiniPost
                                    key={item.id}
                                    text={item.Title}
                                    image={item.Thumbnail.url}
                                />
                            );
                        }
                    })}
                </div>
            </div>
            <Posts />
            <OverviewSection type="Sports" />
            <OverviewSection type="Bussiness" />
        </div>
    );
}

export default NewsPage;
