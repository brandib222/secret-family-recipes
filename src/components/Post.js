// creates the post structure

import React from 'react';

export default function ItemCard({details}) {
    if(!details) {
        return <h3> Working on retrieving your posts... </h3>
    }

    return (
        <div className='card-container'>
            <h2>{ details.title }</h2>
            <h3> { details.username }</h3>
            <img src={ `${details.image_url}` } alt='recipe'/>
            <p>{ details.recipe }</p>
         </div>
    )};