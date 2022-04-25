import React from 'react';
import './Expert.css'

const Expert = ({ expert }) => {
    const { name, img, description, price } = expert;
    return (
        <div className='expert'>
            <img src={img} alt="" height={'300px'} width={'100%'} />
            <h5 className='my-3'>Name: {name}</h5>
            <p>Description: {description} </p>
            <h6>Price: {price} </h6>
        </div>
    );
};

export default Expert;