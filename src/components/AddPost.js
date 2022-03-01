import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import url from '../utils/URL';

const initialPosts = [];
const initialFormValues = {
    title: '',
    username: '',
    image_url: '',
    recipe: ''
}

export default function AddPost(props) {

    const [posts, setPosts] = useState(initialPosts);
    const [formValues, setFormValues] = useState(initialFormValues);

    const postNewRecipe = newPost => {
        axiosWithAuth().post(`${url}api/posts`, newPost)
            .then(res => {
                console.log('hello from res', res);
                setPosts([res.data, ...posts])
            }).catch(err => {
                console.error(err)
            })
    }

    useEffect(() => {
        axiosWithAuth().get(`${url}/api/posts`)
            .then(res => {
                setPosts(res.data)
            }).catch(err => {
                console.error(err)
            })
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            title: formValues.title.trim(),
            username: formValues.username.trim(),
            image_url: formValues.image_url.trim(),
            recipe: formValues.recipe.trim()
        }
        postNewRecipe(newPost);
    }

    const onChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]:e.target.value
        });
    }

    return (
        <div className='add-container'>
            <form className='add-form' onSubmit={onSubmit}>
                <h3> Add Post </h3>
                <input 
                    name='title'
                    type='text'
                    value={formValues.title}
                    onChange={onChange}
                    placeholder='enter recipe title'
                />
                <input 
                    name='username'
                    type='text'
                    value={formValues.username}
                    onChange={onChange}
                    placeholder='enter recipe author/username'
                />
                <input 
                    name='image_url'
                    type='text'
                    value={formValues.image_url}
                    onChange={onChange}
                    placeholder='enter recipe image url'
                />
                <input 
                    name='recipe'
                    type='text'
                    value={formValues.recipe}
                    onChange={onChange}
                    placeholder='enter recipe directions'
                />
                <button className='submit-btn' onClick={onSubmit}> Add Recipe </button>
            </form>
        </div>
    )
}