import React, { useEffect } from 'react';
import MiniPost from './MiniPost';

function MiniPosts() {
    const [posts, setPosts] = useState();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function fetchPosts() {
            try {
                console.log('test1');
                const res = await fetch(
                    `http://localhost:1337/articles`
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

    return <MiniPost />;
}

export default MiniPosts;
