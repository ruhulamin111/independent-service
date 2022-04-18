import React from 'react';
import './Services.css'

const Services = () => {

    const services = [
        { id: 1, name: 'Shamsul Arefin', img: 'https://i.ibb.co/mDt7NsJ/doctor1.jpg', price: 500, description: 'hello' },
        { id: 2, name: 'Abu Bakar Siddik', img: 'https://i.ibb.co/mDt7NsJ/doctor1.jpg', price: 400, description: 'hello' },
        { id: 3, name: 'Tonmoy Sarker', img: 'https://i.ibb.co/mDt7NsJ/doctor1.jpg', price: 300, description: 'hello' },
        { id: 4, name: 'Asif Adnan', img: 'https://i.ibb.co/mDt7NsJ/doctor1.jpg', price: 200, description: 'hello' },
        { id: 5, name: 'Anamul Hoque', img: 'https://i.ibb.co/mDt7NsJ/doctor1.jpg', price: 100, description: 'hello' },
    ]

    return (
        <div>
            <h3>This is Service</h3>
        </div>
    );
};

export default Services;