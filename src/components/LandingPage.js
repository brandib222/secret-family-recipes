// shows all the posts after you log in
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Post from './Post';
import url from '../utils/URL';

const initialPosts = [];

function LandingPage() {
    const [post, setPosts] = useState(initialPosts);

    const getPosts = () => {
        axios.get(`${url}api/posts`)
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
        <div className='posts-list-wrapper'>Secret Family Recipes
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