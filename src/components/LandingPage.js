// shows all the posts after you log in
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Post from './Post';

const initialPosts = [];

function LandingPage() {
    const [post, setPosts] = useState(initialPosts);

    const getPosts = () => {
        axios.get('http://localhost:8080/api/posts')
        .then((res) => {
            setPosts(res.data);
            console.log(res);
        }).catch(err => {
            console.error(err)
        })
    }

    useEffect(() => {
        getPosts()
    }, [])


    return (
        <div className='posts-list-wrapper'>OMG DOES THIS WORK
            <div className='post-cards'>
                {
                    post.map((posts) => {
                        return <Post key={posts.post_id} details={posts} />
                    })
                }
            </div>
        </div>
    )
}

export default LandingPage;