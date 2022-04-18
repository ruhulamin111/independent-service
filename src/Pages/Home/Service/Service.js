import React from 'react';

const Service = ({ service }) => {

    const { name, img, price, description } = service;

    return (
        <div>
            <img src={img} alt="" height={'300px'} />
            <h4>{name}</h4>
            <p>{description}</p>
            <h5>{price}</h5>
        </div>
    );
};

export default Service;