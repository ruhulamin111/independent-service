import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import img1 from '../../../images/doctor1.jpg';
import img2 from '../../../images/doctor2.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block  w-100"
                    src={img1}
                    alt="First slide"
                    height={'600px'}
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                    height={'600px'}
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
};

export default Banner;