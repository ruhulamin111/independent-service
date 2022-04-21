import React from 'react';
import './Expert.css'

const Expert = ({ expert }) => {
    const { name, img, description, price } = expert;
    return (
        <div className='expert'>
            <img src={img} alt="" height={'300px'} width={'100%'} />
            <h4>Name: {name}</h4>
            <h5>Price:{price} </h5>
            <p>Description:{description} </p>
        </div>
    );
};

export default Expert;