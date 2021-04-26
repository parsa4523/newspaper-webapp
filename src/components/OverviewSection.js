import React, { useEffect, useState } from 'react';
import Card from './Card';
import MiniPost from './MiniPost';
import Post from './Post';

function OverviewSection(props) {
    const [posts, setPosts] = useState();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function fetchPosts() {
            try {
                console.log('test1');
                const res = await fetch(
                    `http://localhost:1337/articles?category.Category=${props.type}`
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
        return <div>Loading</div>;
    }
    return (
        <>
            <h2 className="mt-5">{props.type}</h2>
            <div className="row">
                <Post
                    title={posts[0].Title}
                    image={posts[0].Thumbnail.url}
                    slug={posts[0].Slug}
                    category={posts[0].category.Category}
                />
                <Card
                    title={posts[1].Title}
                    category={posts[1].category.Category}
                />
                <div className="col-12 col-md-4 py-1">
                    {posts.map((item, index) => {
                        if (index < 5) {
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
        </>
    );
}

export default OverviewSection;
