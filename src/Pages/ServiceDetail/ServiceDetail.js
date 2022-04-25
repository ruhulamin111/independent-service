import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <div className="text-center">
                <Link to='/checkout'>
                    <button className='btn btn-info my-5'>Please Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;