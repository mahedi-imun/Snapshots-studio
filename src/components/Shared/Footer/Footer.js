import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div style={{height:'200px',color:'#fdee17',backgroundColor:'#212529'}} className=' border-top '>
            <p className='d-flex justify-content-center h-100 align-items-center'> &copy; Copyright Snapshots {year} All rights reserved.</p>
        </div>
    );
};

export default Footer;