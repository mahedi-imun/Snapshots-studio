import React from 'react';
import aboutImg1 from '../../../images/about me/about-me-1.png'
const About = () => {
    return (
        <div className='container mb-5'>
            <h4 className='text-center mt-3 '>About me</h4>
            <div className='d-flex flex-wrap '>
                <div className='w-50 d-flex flex-wrap flex-column justify-content-center align-items-start pe-4 '>
                    <h4>I am mahedi a  baby web developer</h4>
                    <h6>I already learned the  HTML, CSS,JAVASCRIPT , REACT , REACT ROUTER , FIREBASE AUTHENTICATION.</h6>
                    <p>I can build any  website. I can even teach my grandma how to make  website. My goal is do job professional software company and learn advanced topics.</p>
                    <p>From January 1 - I am still working 12/14 hours a day.
                        It may not be too late to reach the peak of dreams. 
                    </p>
                        
                </div>
                <div className='w-50 d-flex justify-content-center align-items-center' >
                    <img className='w-100' src={aboutImg1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;