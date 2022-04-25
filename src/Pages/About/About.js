import React from 'react';
import './About.css';
import ruhul from '../../images/ruhul.jpg'

const About = () => {
    return (
        <div className='container'>
            <h3 className='text-center text-info my-3'>Mission and Vission</h3>
            <img src={ruhul} alt="" height={'300px'} width={'300px'} />
            <h5 className='my-3' >Name: Ruhul Amin</h5>
            <h6>Mission: With in 6 month I want to be a  junior Web Developer. I build my career on web development. </h6>
            <h6>Vision: First I want to leaning then I try to a web development job. </h6>
        </div>
    );
};

export default About;