import React from 'react';

const Service = ({ service }) => {
    const { name, img, description, ratings, price } = service;
    return (
        <div className='rounded-3 mb-5' style=
            {{
                height: '400px',
                width: '300px',
                backgroundColor: "#ffffff",
            }}>
            <img className='mt-4 rounded' style={{ width: '250px' }} src={img} alt="wedding-service" />
            <div className='p-1'>
                <h5 className='fs-6'>{name}</h5>
                <h6>Ratings:{ratings}</h6>
                <h6>price: ${price}</h6>
                <p>{description}</p>
                <button style={{
                    color: '#fdee17',
                    backgroundColor: '#000000',
                    fontWeight: '600'
                }} className='btn '>book service</button>
            </div>
        </div>
    );
};

export default Service;