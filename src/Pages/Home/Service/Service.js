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
            <h4 className='my-3'>Name: {name}</h4>
            <p className='my-3'>Description: {description}</p>
            <h6>Visit: {price} $</h6>
            <button className='btn btn-info text-white w-100 p-2 fs-5 my-3' onClick={() => serviceDetail(id)} >Appointment: {name}</button>
        </div>
    );
};

export default Service;