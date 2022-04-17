import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div >
            <p className='text-center'> &copy; Copyright Snapshots {year} All rights reserved.</p>
        </div>
    );
};

export default Footer;