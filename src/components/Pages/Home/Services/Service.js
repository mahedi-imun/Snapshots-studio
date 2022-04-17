import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import { useNavigate } from 'react-router-dom';
const Service = ({ service }) => {
    const { name, img, description, price } = service;
    const navigate = useNavigate()

    // animation init 
    AOS.init();
    return (

        <div  data-aos="flip-right" className='rounded-3 mb-5' style=
            {{
                height: '450px',
                width: '300px',
                backgroundColor: "#ffffff",
            }}>
            <img className='mt-4 rounded' style={{ width: '250px' }} src={img} alt="wedding-service" />
            <div data-aos="zoom-in" className='p-1'>
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