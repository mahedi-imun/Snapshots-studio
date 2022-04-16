import React from 'react';
import { useNavigate } from 'react-router-dom';
const Service = ({ service }) => {
    const { name, img, description, price } = service;
    const navigate = useNavigate()
    return (

        <div className='rounded-3 mb-5' style=
            {{
                height: '450px',
                width: '300px',
                backgroundColor: "#ffffff",
            }}>
            <img className='mt-4 rounded' style={{ width: '250px' }} src={img} alt="wedding-service" />
            <div className='p-1'>
                <h5 className='fs-6'>{name}</h5>
                <h5>price: ${price}</h5>
                <p className='p-2'>{description.slice(0, 100)}</p>
                <button 
                    onClick={()=>navigate('/checkout')}
                    style={{
                    color: '#fdee17',
                    backgroundColor: '#000000',
                    fontWeight: '600'
                }} className='btn '>book service</button>
            </div>
        </div>
    );
};

export default Service;