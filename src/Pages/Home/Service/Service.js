import React from 'react';
import './Service.css'
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {

    const { id, name, img, price, description } = service;

    const navigate = useNavigate();
    const serviceDetail = id => {
        navigate(`/service/${id}`)
    }

    return (
        <div className='service'>
            <img src={img} alt="" height={'300px'} width={'100%'} />
            <h3>Name: {name}</h3>
            <p>Description: {description}</p>
            <h4>Visit: {price}</h4>
            <button onClick={() => serviceDetail(id)} >Book: {name}</button>
        </div>
    );
};

export default Service;