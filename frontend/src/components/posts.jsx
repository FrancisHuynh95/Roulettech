import React, { useState, useEffect } from 'react';
import { deletePost, getPosts } from '../services/PostService';
import { useNavigate } from 'react-router-dom';

function Posts() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await getPosts();
            if (data) {
                setPosts(data)
            }
        }
        fetchPosts();
    }, [])

    function handleDelete(id){
        deletePost(id)
        setPosts(posts.filter(post => post.id !== id))
    }

    function displayPost() {
        if (posts.length) {
            return (
                posts.map(post => <div key={post.id}>
                    <label>{post.title}</label>
                    {post.description}
                    <button onClick={() => navigate(`/posts/${post.id}/edit`)}>Update</button>
                    <button onClick={() => handleDelete(post.id)}>Delete</button>
                </div>)
            )
        }
        return <p>No posts</p>
    }

    return (
        <div>
            <h1>Posts</h1>
            {displayPost()}
        </div>
    )
}

export default Posts
