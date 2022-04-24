import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Loading.css'

const Loading = () => {
    return (
        <div>
            <Spinner animation="border" variant="info" />
        </div>
    );
};

export default Loading;