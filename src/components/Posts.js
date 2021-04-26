import React, { useEffect, useState } from 'react';
import Post from './Post';

function Posts() {
    const [posts, setPosts] = useState();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function fetchPosts() {
            try {
                console.log('test1');
                const res = await fetch(
                    'http://localhost:1337/articles'
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
            <div className="row">
                <Post loading={true} />
                <Post loading={true} />
                <Post loading={true} />
                <Post loading={true} />
                <Post loading={true} />
                <Post loading={true} />
            </div>
        );
    }

    return (
        <div className="row">
            {!isLoading &&
                posts.map((item, index) => {
                    if (index < 6) {
                        return (
                            <Post
                                key={item.id}
                                title={item.Title}
                                image={item.Thumbnail.url}
                                slug={item.Slug}
                                category={item.category.Category || ''}
                            />
                        );
                    }
                })}
        </div>
    );
}

export default Posts;
